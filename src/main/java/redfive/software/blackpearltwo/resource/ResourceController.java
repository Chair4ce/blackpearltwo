package redfive.software.blackpearltwo.resource;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ResourceController.URI)
public class ResourceController {

    public static final String URI = "/resources";

    private ResourceRepository resourceRepository;

    @Autowired
    public void repositoryInjections(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    @CrossOrigin
    @GetMapping
    public @ResponseBody
    Iterable<Resource> getResources() {
        return resourceRepository.findAll();
    }
}
