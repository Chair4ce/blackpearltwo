package redfive.software.blackpearltwo.resource;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;


@Component
@AllArgsConstructor
public class ResourceMutationResolver implements GraphQLMutationResolver {

    private final ResourceService resourceService;

    public Iterable<Resource> createResource(String title, String url, int tab, int card) {
        return resourceService.createResource(title, url, tab, card );
    }

    public Resource updateResource(Long id, String title, String url, int tab, int card) throws NotFoundException {
        return resourceService.updateResource(id, title, url, tab, card);
    }

    public boolean deleteResource(Long id) { return resourceService.deleteResource(id);}
}
