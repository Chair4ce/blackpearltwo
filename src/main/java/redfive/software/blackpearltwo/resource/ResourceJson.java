package redfive.software.blackpearltwo.resource;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class ResourceJson {

    private long id;
    private String title;
    private String url;

    public ResourceJson(long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public ResourceJson(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
