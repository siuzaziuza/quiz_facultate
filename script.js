const questions = [
{
    question: "Ce materie îți place cel mai mult?",
    answers: [
        "Matematică",
        "Informatică",
        "Biologie",
        "Istorie",
        "Română"
    ]
},
{
    question: "Cum preferi să lucrezi?",
    answers: [
        "Singur",
        "În echipă",
        "Nu contează",
        "Cu oamenii",
        "Pe calculator"
    ]
},
{
    question: "Ce activitate îți place cel mai mult?",
    answers: [
        "Rezolv probleme",
        "Ajut oamenii",
        "Organizez echipe",
        "Desenez",
        "Fac sport"
    ]
}
];

let currentQuestion = 0;

function startQuiz(){

    document.getElementById("start-screen").style.display="none";

    document.getElementById("quiz-screen").style.display="block";

    showQuestion();

}

function showQuestion(){

    const q=questions[currentQuestion];

    document.getElementById("question-number").innerHTML=
    `Întrebarea ${currentQuestion+1} din ${questions.length}`;

    document.getElementById("question").innerHTML=q.question;

    document.getElementById("progress-bar").style.width=
    ((currentQuestion)/questions.length*100)+"%";

    let html="";

    q.answers.forEach(answer=>{

        html+=`<button onclick="nextQuestion()">${answer}</button>`;

    });

    document.getElementById("answers").innerHTML=html;

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }else{

        document.getElementById("quiz-screen").style.display="none";

        document.getElementById("result-screen").style.display="block";

        document.getElementById("progress-bar").style.width="100%";

        document.getElementById("results").innerHTML=`
        <h2>🎉 Felicitări!</h2>

        <p>Ai terminat testul.</p>

        <p>În etapa următoare vom calcula automat Top 5 facultăți.</p>
        `;

    }

}
