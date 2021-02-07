package redfive.software.blackpearltwo.resources;

import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import javassist.NotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import redfive.software.blackpearltwo.BaseIntegrationTest;
import redfive.software.blackpearltwo.resource.Resource;
import redfive.software.blackpearltwo.resource.ResourceService;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ActiveProfiles("test")
public class ResourceQueryTest extends BaseIntegrationTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @MockBean
    private ResourceService resourceServiceMock;

    @Test
    public void getResourceById() throws IOException {
        Resource resource = new Resource(1L, "Facebook", "facebook.com");
        when(resourceServiceMock.getResource(any())).thenReturn(resource);
        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/get-resource-by-id.graphql");
        assertTrue(response.isOk());

        assertEquals("1", response.get("$.data.resource.id"));
        assertEquals("Facebook", response.get("$.data.resource.title"));
        assertEquals("facebook.com", response.get("$.data.resource.url"));
    }

    @Test
    public void createResource() throws IOException {
        Resource resource = new Resource( "Facebook", "facebook.com");
        when(resourceServiceMock.createResource(any(), any())).thenReturn(resource);
        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/create-resource.graphql");
        assertTrue(response.isOk());
        assertEquals("Facebook", response.get("$.data.createResource.title"));
        assertEquals("facebook.com", response.get("$.data.createResource.url"));
    }

    @Test
    public void updateResource() throws IOException, NotFoundException {
        Resource resource = new Resource( 1L,"Instagram", "facebook.com");
        when(resourceServiceMock.updateResource(any() ,any(), any())).thenReturn(resource);
        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/update-resource.graphql");
        assertTrue(response.isOk());
        assertEquals("Instagram", response.get("$.data.updateResource.title"));
        assertEquals("facebook.com", response.get("$.data.updateResource.url"));
    }

    @Test
    public void deleteResource() throws IOException, NotFoundException {
        when(resourceServiceMock.deleteResource(any())).thenReturn(true);
        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/delete-resource.graphql");
        assertTrue(response.isOk());
        assertEquals("true", response.get("$.data.deleteResource"));
    }
}
