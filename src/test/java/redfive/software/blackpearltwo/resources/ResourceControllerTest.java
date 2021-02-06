package redfive.software.blackpearltwo.resources;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.SneakyThrows;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import redfive.software.blackpearltwo.BaseIntegrationTest;
import redfive.software.blackpearltwo.resource.Resource;
import redfive.software.blackpearltwo.resource.ResourceController;
import redfive.software.blackpearltwo.resource.ResourceRepository;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertEquals;

public class ResourceControllerTest extends BaseIntegrationTest {


    @Autowired
    private ResourceRepository resourceRepository;


    @SneakyThrows
    @Test
    public void createResource() throws JsonProcessingException {
        Resource resource = new Resource("facebook", "facebook.com");
        String json = objectMapper.writeValueAsString(resource);

        given()
                .port(port)
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .post(ResourceController.URI + "/post")
                .then()
                .statusCode(200);

        assertEquals(1, resourceRepository.findAll().size());


    }

    @Test
    public void getResource() {
        resourceRepository.deleteAll();
        Resource resource = new Resource("facebook", "facebook.com");
        resourceRepository.save(resource);
        //send request to the controllers base uri and assert
        given()
                .port(port)
                .when()
                .get(ResourceController.URI)
                .then()
                .statusCode(200)
                .body("[0].url", equalTo("facebook.com"));
        resourceRepository.deleteAll();
    }

    @Test
    public void updateResource() throws JsonProcessingException {
        Resource newResource = new Resource("facebook", "facebook.com");
        resourceRepository.save(newResource);

        long newResourceId = resourceRepository.findAll().get(0).getId();
        Resource resource = new Resource(newResourceId, "Google", "google.com");
        String json = objectMapper.writeValueAsString(resource);

        given()
                .port(port)
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .post(ResourceController.URI + "/update")
                .then()
                .statusCode(200);

        assertEquals(1, resourceRepository.findAll().size());
        Resource updatedResource = resourceRepository.findAll().get(0);

        assertEquals(resource.getId(), updatedResource.getId());
        assertEquals(resource.getTitle(), updatedResource.getTitle());
        assertEquals(resource.getUrl(), updatedResource.getUrl());

        resourceRepository.deleteAll();
    }

    @Test
    public void deleteResource() {
        Resource newResource = new Resource("facebook", "facebook.com");
        resourceRepository.save(newResource);
        long resourceId = resourceRepository.findAll().get(0).getId();

        given()
                .port(port)
                .header("Content-Type", "application/json")
                .when()
                .delete(ResourceController.URI + "/delete/" + resourceId)
                .then()
                .statusCode(200);

        assertEquals(0, resourceRepository.findAll().size());
        resourceRepository.deleteAll();
    }


}
