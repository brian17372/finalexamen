// Función para verificar el login
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "alumno" && password === "2024") {
        // Redirige a la página de contenido del curso
        window.location.href = 'astronomia.html';
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

// Calcular la puntuación del examen
function calculateScore() {
    let score = 0;

    // Pregunta 1 (Radio Button)
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") score += 20;

    // Pregunta 2 (Checkboxes)
    const q2Answers = document.querySelectorAll('input[name="q2"]:checked');
    const correctQ2 = Array.from(q2Answers).filter(ans => ans.value === "correct");
    if (correctQ2.length === 3 && q2Answers.length === 3) score += 20;

    // Pregunta 3 (Radio Button)
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "correct") score += 20;

    // Pregunta 4 (Select)
    const q4 = document.querySelector('select[name="q4"]').value;
    if (q4 === "correct") score += 20;

    // Pregunta 5 (Radio Button)
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "correct") score += 20;

    // Mostrar la puntuación final
    document.getElementById("result").innerText = `Tu calificación es: ${score} / 100`;
    document.getElementById("result").style.display = "block";
}
