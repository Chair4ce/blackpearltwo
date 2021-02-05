package redfive.software.blackpearltwo.resources;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import redfive.software.blackpearltwo.BaseIntegrationTest;
import redfive.software.blackpearltwo.resource.Resource;
import redfive.software.blackpearltwo.resource.ResourceController;
import redfive.software.blackpearltwo.resource.ResourceRepository;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.*;

public class ResourceControllerTest extends BaseIntegrationTest {

    @Autowired
    private ResourceRepository resourceRepository;

    @Test
    public void returnResource() {
        Resource resource = new Resource(1L,"facebook","facebook.com");
        resourceRepository.save(resource);

        given()
                .port(port)
                .when()
                .get(ResourceController.URI)
                .then()
                .statusCode(200)
                .body("[0].url", equalTo("facebook.com"));

resourceRepository.deleteAll();
    }
}
