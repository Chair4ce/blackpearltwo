package redfive.software.blackpearltwo.resource;

import com.google.common.net.InternetDomainName;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import redfive.software.blackpearltwo.linkPreview.Link;
import redfive.software.blackpearltwo.linkPreview.LinkRepository;

import java.io.IOException;
import java.net.URL;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ResourceService {

    private final ResourceRepository resourceRepository;
    private final LinkRepository linkRepository;
    private final Logger logger = LogManager.getLogger(getClass());

    public Resource getResource(Long id) {
        return resourceRepository.getOne(id);
    }

    public List<Resource> getResources() {
        return resourceRepository.findAll();
    }

    public Resource createResource(String title, String url, int tab, int card) {
        Resource resource = new Resource(title, url, tab, card);
        int resources = resourceRepository.countAllByCard(card);
        int toCardCount = resourceRepository.countAllByCard(card);
        if (toCardCount > 0) {
            List<Resource> newlyOrderedResources = addResourceAndReOrder(card, 1, resource);
            resourceRepository.saveAll(newlyOrderedResources);
        } else {
            resource.setPos(1);
            resourceRepository.save(resource);
        }

        Link preview = getLinkPreviewInfo(url);
        if (preview != null) {
            resource.setStatus(preview.getStatus());
            linkRepository.save(preview);
        }

        return resource;
    }

    public void generatePreviews() {
        List<Resource> links = resourceRepository.findAll();
        for (Resource link : links) {
            Link preview = getLinkPreviewInfo(link.getUrl());
            if (linkRepository.findByUrl(link.getUrl()) == null) {
                linkRepository.save(preview);
            }
        }
    }

    public Resource updateResource(Long id, String title, String url, int tab, int card) throws javassist.NotFoundException {

        if (resourceRepository.findById(id).isPresent()) {
            Resource resource = resourceRepository.findById(id).orElseThrow(RuntimeException::new);
            resource.setTitle(title);
            resource.setUrl(url);

            Link preview = getLinkPreviewInfo(url);
            if (preview != null) {
                resource.setStatus(preview.getStatus());
                linkRepository.save(preview);
            } else {
                resource.setStatus(404);
            }


            resourceRepository.save(resource);
            return resource;
        }
        throw new javassist.NotFoundException("No site to update!");
    }

    public Resource editResourceCard(Long id, int toCard, int toIndex) throws javassist.NotFoundException {

        if (resourceRepository.findById(id).isPresent()) {
            Resource newResource = resourceRepository.findById(id).orElseThrow(RuntimeException::new);
            int fromCard = newResource.getCard();
            Thread cleanUp = new Thread(() -> {
                reorderCard(fromCard);
            });

            int toCardCount = resourceRepository.countAllByCard(toCard);

            if (toCardCount > 0) {
                List<Resource> newlyOrderedResources = addResourceAndReOrder(toCard, toIndex, newResource);
                resourceRepository.saveAll(newlyOrderedResources);
            } else {
                newResource.setPos(1);
                resourceRepository.save(newResource);
            }

            cleanUp.start();
            return newResource;
        }
        throw new javassist.NotFoundException("No site to update!");
    }

    @NotNull
    private List<Resource> addResourceAndReOrder(int toCard, int toIndex, Resource editingResource) {


        List<Resource> toCardResources = getResourcesFromCard(toCard);

        if (toCard == editingResource.getCard()) {
            toCardResources.remove(editingResource);
            editingResource.setCard(toCard);
            toCardResources.add(toIndex - 1, editingResource);
        } else {
            editingResource.setCard(toCard);
            toCardResources.add(toIndex - 1, editingResource);
        }

        int newPos = 1;

        for (Resource toCardResource : toCardResources) {
            toCardResource.setPos(newPos++);
        }
        return toCardResources;
    }

    private void reorderCard(int cardId) {
        List<Resource> cardResources = getResourcesFromCard(cardId);

        int newPos = 1;

        for (Resource resource : cardResources) {
            resource.setPos(newPos++);
        }
        resourceRepository.saveAll(cardResources);
    }

    @NotNull
    private List<Resource> getResourcesFromCard(int cardId) {
        return resourceRepository.findAllByCard(cardId).stream().sorted(Comparator.comparingInt(Resource::getPos)).collect(Collectors.toList());
    }

    public boolean deleteResource(Long id) {
        resourceRepository.deleteById(id);
        return true;
    }

    public ModelAndView home(String view) {
        logger.info("Entering home page");
        ModelAndView model = new ModelAndView("previewLink");
        model.addObject("title", "Home");
        model.addObject("view", view);
        return model;
    }

    public Link getLinkPreviewInfo(String url) {
        Link link = null;
        try {
            link = extractLinkPreviewInfo(url);
        } catch (IOException e) {
            logger.error("Unable to connect to : {}", url);
        }
        return link;
    }

    public ModelAndView linkPreview(String url) {
        ModelAndView model = new ModelAndView("link");
        try {
            model.addObject("link", extractLinkPreviewInfo(url));
        } catch (IOException e) {
            logger.error("Unable to connect to : {}", url);
            model.addObject("css", "danger");
            model.addObject("msg", "Unable to connect to '" + url + "': " + e.getMessage());
        }
        return model;
    }

    public Link extractLinkPreviewInfo(String url) throws IOException {
        if (!url.startsWith("http")) {
            url = "http://" + url;
        }
        Connection siteConnect = Jsoup.connect(url);
        Document document = siteConnect.get();
        String title = getMetaTagContent(document, "meta[name=title]");
        String desc = getMetaTagContent(document, "meta[name=description]");
        String ogUrl = StringUtils.defaultIfBlank(getMetaTagContent(document, "meta[property=og:url]"), url);
        String ogTitle = getMetaTagContent(document, "meta[property=og:title]");
        String ogDesc = getMetaTagContent(document, "meta[property=og:description]");
        String ogImage = getMetaTagContent(document, "meta[property=og:image]");
        String ogImageAlt = getMetaTagContent(document, "meta[property=og:image:alt]");
        String domain = ogUrl;
        try {
            domain = InternetDomainName.from(new URL(ogUrl).getHost()).topPrivateDomain().toString();
        } catch (Exception e) {
            logger.warn("Unable to connect to extract domain name from : {}", url);
        }
        return new Link(domain, url, StringUtils.defaultIfBlank(ogTitle, title), StringUtils.defaultIfBlank(ogDesc, desc), ogImage, ogImageAlt, siteConnect.response().statusCode());
    }

    private String getMetaTagContent(Document document, String cssQuery) {
        Element elm = document.select(cssQuery).first();
        if (elm != null) {
            return elm.attr("content");
        }
        return "";
    }

}
