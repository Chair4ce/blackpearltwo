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

    private int status;


    public Resource(Long id, String title, String url, int status) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.status = status;
    }

    public Resource(String title, String url, int status) {
        this.title = title;
        this.url = url;
        this.status = status;
    }

    public Resource(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
