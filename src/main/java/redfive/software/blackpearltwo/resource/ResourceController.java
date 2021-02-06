package redfive.software.blackpearltwo.resource;


import jdk.nashorn.api.scripting.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping(ResourceController.URI)
public class ResourceController {

    public static final String URI = "/resources";

    private ResourceRepository resourceRepository;

    @Autowired
    public void repositoryInjections(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    @GetMapping
    public @ResponseBody
    Iterable<Resource> getResources() {
        return resourceRepository.findAll();
    }

    @PostMapping(path = "/post")
    public Resource postResource(@Valid @RequestBody ResourceJson resourceJson ) {
        Resource newResource = new Resource(resourceJson.getTitle(),resourceJson.getUrl());
        return resourceRepository.save(newResource);
    }

    @PostMapping(path = "/update")
    public Resource updateResource(@Valid @RequestBody ResourceJson resourceJson, HttpServletResponse response ) {
        Resource updatedResource = new Resource(resourceJson);
        return resourceRepository.save(updatedResource);
    }

    @DeleteMapping(path = "/delete/{resourceId}")
    public void deleteResource(@PathVariable("resourceId") long resourceId) {
        resourceRepository.deleteById(resourceId);
    }
}
