package ProyectTrivia.controllers;

import ProyectTrivia.entity.ClasePregunta;
import ProyectTrivia.repository.TriviaInterfaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/trivia")
public class TriviaControllers {
    @Autowired
    private TriviaInterfaceRepository preguntaRepository;
    @GetMapping
    public ClasePregunta obtenerPreguntas() {
        return preguntaRepository.obtenerPreguntaAleatoria();
    }
}
