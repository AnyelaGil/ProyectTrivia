const questionsContainer = document.getElementById("container-ques");
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const ques = document.getElementById("titulo");


document.addEventListener('DOMContentLoaded', function () {
    loadRandomQuestion();
});

let isLoadingQuestion = false;

async function loadRandomQuestion(){
    if (isLoadingQuestion) {
            return;
        }

        isLoadingQuestion = true;
    while (questionsContainer.firstChild) {
            questionsContainer.removeChild(questionsContainer.firstChild);
        }

    fetch('/trivia')
        .then(response => response.json())
        .then(data => {
                ques.textContent = `Question # ${data.id}`;
                const questionElement = document.createElement('div');
                questionElement.classList.add("conteJs");
                const seccionQuestion = document.createElement('h2');
                seccionQuestion.classList.add("quesJs")
                seccionQuestion.textContent = `${data.pregunta}`;

                const optionButton1 = document.createElement('button');
                const optionButton2 = document.createElement('button');
                const optionButton3 = document.createElement('button');

                optionButton1.textContent = `Opción 1: ${data.opc_rta1}`;
                optionButton2.textContent = `Opción 2: ${data.opc_rta2}`;
                optionButton3.textContent = `Opción 3: ${data.opc_rta3}`;

                optionButton1.classList.add("btnJs");
                optionButton2.classList.add("btnJs");
                optionButton3.classList.add("btnJs");

                questionElement.appendChild(seccionQuestion);
                questionElement.appendChild(optionButton1);
                questionElement.appendChild(optionButton2);
                questionElement.appendChild(optionButton3);
                questionsContainer.appendChild(questionElement);

                // Agregar manejadores de eventos click a los botones de opción
                optionButton1.addEventListener('click', () => checkAnswer(1,data.opc_rta_correct));
                optionButton2.addEventListener('click', () => checkAnswer(2,data.opc_rta_correct));
                optionButton3.addEventListener('click', () => checkAnswer(3,data.opc_rta_correct));

        })
        .catch(error => {
                    console.error('Error:', error);
                    isLoadingQuestion = false; // Asegura que el botón se habilite en caso de error
                });
}


    function checkAnswer(optionUser, optionCorrect)
    {
        if (optionUser == optionCorrect) {
                showModal("¡Respuesta correcta! 🚀💥");
            } else {
                showModal("Respuesta incorrecta. 😢 La respuesta correcta es Opcion : " + optionCorrect);
            }
    }

    function showModal(message) {

        modalText.textContent = message;
        modal.style.display = "flex";

        // Agregar un manejador de eventos para cerrar el modal al hacer clic en la "x"
        closeModal.addEventListener('click', () => modal.style.display = "none");

        nextQuestionButton.addEventListener('click', () => {
                              // Oculta el modal
                              modal.style.display = "none";


                              window.location.reload()
        });
    }

