package redfive.software.blackpearltwo.resource;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
@AllArgsConstructor
public class ResourceQueryResolver implements GraphQLQueryResolver {

    private final ResourceService resourceService;

    public Resource resource(Long id) {
        return resourceService.getResource(id);
    }

    public List<Resource> resources() {
        return resourceService.getResources();
    }

    public Link linkPreview(String url) { return resourceService.getLinkPreviewInfo(url); }
}
