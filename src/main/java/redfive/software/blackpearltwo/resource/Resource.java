package redfive.software.blackpearltwo.resource;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@Table(name = "resources")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String title;

    private String url;

    public Resource(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Resource(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public Resource(ResourceJson resourceJson) {
        this.id = resourceJson.getId();
        this.title = resourceJson.getTitle();
        this.url = resourceJson.getUrl();
    }

}
