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
    private int tab;
    private int card;
    private int clickies;
    private int pos;


    public Resource(Long id, String title, String url, int status, int tab, int card, int clickies, int pos) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.status = status;
        this.tab = tab;
        this.card = card;
        this.clickies = clickies;
        this.pos = pos;
    }

    public Resource(String title, String url, int status, int tab, int card, int clickies) {
        this.title = title;
        this.url = url;
        this.status = status;
        this.tab = tab;
        this.card = card;
        this.clickies = clickies;
        this.pos = pos;
    }

    public Resource(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Resource(String title, String url, int tab, int card) {
        this.title = title;
        this.url = url;
        this.tab = tab;
        this.card = card;
    }
}
