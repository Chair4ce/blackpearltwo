package redfive.software.blackpearltwo.linkPreview;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkRepository extends JpaRepository<Link, Long> {

    Link findByUrl(String url);
}
