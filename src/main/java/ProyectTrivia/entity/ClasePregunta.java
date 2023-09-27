package ProyectTrivia.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Entity
@Table(name="tbl_pregunta")
public class ClasePregunta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "pregunta")
    private String pregunta;
    @Column(name = "opc_rta1")
    @Getter @Setter
    private String opc_rta1;
    @Column(name = "opc_rta2")
    @Getter @Setter
    private String opc_rta2;
    @Column(name = "opc_rta3")
    @Getter @Setter
    private String opc_rta3;

    @Column(name = "opc_rta_correct")
    private int opc_rta_correct;
}
