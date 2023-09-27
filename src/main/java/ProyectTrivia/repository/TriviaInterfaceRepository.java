package ProyectTrivia.repository;

import ProyectTrivia.entity.ClasePregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TriviaInterfaceRepository extends JpaRepository<ClasePregunta, Long> {
    @Query(value = "SELECT * FROM tbl_pregunta ORDER BY RAND() LIMIT 1", nativeQuery = true)
    ClasePregunta obtenerPreguntaAleatoria();
}
