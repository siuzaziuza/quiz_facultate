let currentQuestion = 0;

const questions = [
{
    question: "Ce activitate îți place cel mai mult?",
    answers: [
        "Rezolv probleme logice",
        "Ajut oamenii",
        "Desenez sau creez",
        "Coordonez echipe",
        "Lucrez cu bani"
    ]
}
];

function startQuiz() {

const quiz = document.getElementById("quiz");

quiz.innerHTML = `
<h2>${questions[currentQuestion].question}</h2>

<button>${questions[currentQuestion].answers[0]}</button><br><br>

<button>${questions[currentQuestion].answers[1]}</button><br><br>

<button>${questions[currentQuestion].answers[2]}</button><br><br>

<button>${questions[currentQuestion].answers[3]}</button><br><br>

<button>${questions[currentQuestion].answers[4]}</button>

`;

}
