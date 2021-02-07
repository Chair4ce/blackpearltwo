package redfive.software.blackpearltwo.resource;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@AllArgsConstructor
public class ResourceService {

    private final ResourceRepository resourceRepository;

    public Resource getResource(Long id) {
        return resourceRepository.getOne(id);
    }

    public List<Resource> getResources() {
        return resourceRepository.findAll();
    }

    public Resource createResource(String title, String url) {
        Resource resource = new Resource(title, url);
        return resourceRepository.save(resource);
    }

    public Resource updateResource(Long id, String title, String url) throws javassist.NotFoundException {

        if (resourceRepository.findById(id).isPresent()) {
        Resource resource = resourceRepository.findById(id).orElseThrow(RuntimeException::new);
        resource.setTitle(title);
        resource.setUrl(url);
        resourceRepository.save(resource);
        return resource;
        }
        throw new javassist.NotFoundException("No site to update!");
    }

    public boolean deleteResource(Long id) {
        resourceRepository.deleteById(id);
        return true;
    }

}
