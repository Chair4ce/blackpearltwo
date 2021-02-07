package redfive.software.blackpearltwo.resource;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ResourceQueryResolver implements GraphQLQueryResolver {

    private final ResourceService resourceService;

    public Resource getResource(Long id) {
        return resourceService.getResource(id);
    }

    public List<Resource> resources() {
        return resourceService.getResources();
    }
}
