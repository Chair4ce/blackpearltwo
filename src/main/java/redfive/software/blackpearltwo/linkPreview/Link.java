package redfive.software.blackpearltwo.linkPreview;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@Table(name = "link_preview")
public class Link {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String domain;

    private String url;

    private String title;

    private String description;

    private String image;

    @Column(name = "image_alt")
    private String imageAlt;

    public Link(String domain, String url, String title, String description, String image, String imageAlt) {
        this.domain = domain;
        this.url = url;
        this.title = title;
        this.description = description;
        this.image = image;
        this.imageAlt = imageAlt;
    }

}
