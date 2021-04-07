package redfive.software.blackpearltwo.resource;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {

    int countAllByCard( int cardId);
    List<Resource> findAllByCardAndPos(int card);

}
