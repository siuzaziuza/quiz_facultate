const questions = [

    // CAPITOLUL 1
    // Materii și interese academice

    {
        question: "Ce materie îți place cel mai mult la școală?",
        answers: [
            "Matematică",
            "Biologie",
            "Informatică",
            "Limba română / Limbi străine",
            "Desen / Arte"
        ]
    },

    {
        question: "Ce tip de subiect îți stârnește cel mai mult curiozitatea?",
        answers: [
            "Cum funcționează tehnologia",
            "Cum funcționează corpul uman",
            "Cum funcționează economia și afacerile",
            "Cum gândesc și se comportă oamenii",
            "Cum sunt create operele artistice"
        ]
    },

    {
        question: "Dacă ai avea o zi întreagă pentru a învăța ceva nou, ce ai alege?",
        answers: [
            "Programare sau inteligență artificială",
            "Anatomie, genetică sau medicină",
            "Investiții, economie sau antreprenoriat",
            "Psihologie, istorie sau societate",
            "Design, fotografie, muzică sau film"
        ]
    },

    {
        question: "Ce tip de documentar ai urmări cu cel mai mare interes?",
        answers: [
            "Tehnologie și invenții",
            "Medicină și corpul uman",
            "Natură și mediul înconjurător",
            "Istorie, politică și societate",
            "Artă, cultură și creație"
        ]
    },

    {
        question: "Ce problemă ți-ar plăcea cel mai mult să înțelegi?",
        answers: [
            "Cum poate fi îmbunătățit un sistem tehnologic",
            "Cum pot fi prevenite și tratate bolile",
            "Cum poate deveni o afacere de succes",
            "De ce oamenii iau anumite decizii",
            "Cum poate fi transmisă o idee într-un mod original"
        ]
    },

    {
        question: "În ce tip de proiect școlar te-ai implica cu cel mai mare interes?",
        answers: [
            "Construirea unei aplicații sau a unui robot",
            "Un experiment de laborator",
            "Crearea unui plan de afaceri",
            "O dezbatere despre o problemă socială",
            "Realizarea unui proiect artistic sau media"
        ]
    },


    // CAPITOLUL 2
    // Activități și interese practice

    {
        question: "Ce activitate ți-ar face cea mai mare plăcere?",
        answers: [
            "Să rezolv o problemă logică dificilă",
            "Să ajut direct o persoană care are nevoie",
            "Să organizez un proiect sau un eveniment",
            "Să creez ceva original",
            "Să construiesc sau să repar ceva"
        ]
    },

    {
        question: "Dacă ai participa la un concurs, ce tip ai prefera?",
        answers: [
            "Programare sau matematică",
            "Științe sau cercetare",
            "Dezbateri și argumentare",
            "Antreprenoriat și business",
            "Artă, design sau creație"
        ]
    },

    {
        question: "Ce sarcină ai alege într-un proiect de echipă?",
        answers: [
            "Analizez datele și găsesc soluții",
            "Coordonez oamenii și sarcinile",
            "Prezint rezultatele proiectului",
            "Mă ocup de partea vizuală și creativă",
            "Testez practic dacă soluția funcționează"
        ]
    },

    {
        question: "Ce ai prefera să faci într-o zi liberă?",
        answers: [
            "Să descopăr un program sau o tehnologie nouă",
            "Să citesc despre știință sau sănătate",
            "Să particip la o activitate cu mulți oameni",
            "Să creez, să desenez, să scriu sau să filmez",
            "Să fac sport sau o activitate în aer liber"
        ]
    },

    {
        question: "Ce tip de problemă ai rezolva cu cea mai mare satisfacție?",
        answers: [
            "O problemă tehnică",
            "O problemă legată de sănătatea unei persoane",
            "Un conflict între oameni",
            "O problemă financiară sau de organizare",
            "O problemă de design sau comunicare"
        ]
    },

    {
        question: "Ce rezultat al muncii tale ți-ar da cea mai mare satisfacție?",
        answers: [
            "Un sistem care funcționează perfect",
            "O persoană pe care am ajutat-o",
            "Un proiect profitabil și bine organizat",
            "O schimbare pozitivă în societate",
            "O creație originală apreciată de oameni"
        ]
    },


    // CAPITOLUL 3
    // Aptitudini și mod de gândire

    {
        question: "Care dintre aceste abilități te descrie cel mai bine?",
        answers: [
            "Gândesc logic și analitic",
            "Înțeleg ușor emoțiile oamenilor",
            "Comunic și argumentez bine",
            "Sunt creativ și am multe idei",
            "Sunt practic și găsesc soluții concrete"
        ]
    },

    {
        question: "Când întâlnești o problemă dificilă, ce faci prima dată?",
        answers: [
            "O împart în pași mici și logici",
            "Caut informații și dovezi",
            "Cer opiniile altor persoane",
            "Încerc o abordare originală",
            "Testez direct mai multe soluții"
        ]
    },

    {
        question: "Ce observi cel mai repede într-o situație nouă?",
        answers: [
            "Tiparele și regulile",
            "Detaliile importante",
            "Starea și reacțiile oamenilor",
            "Oportunitățile și avantajele",
            "Aspectul vizual și atmosfera"
        ]
    },

    {
        question: "Ce tip de sarcină ți se pare cea mai ușoară?",
        answers: [
            "Să lucrez cu numere și formule",
            "Să memorez și să înțeleg informații complexe",
            "Să explic ceva unei persoane",
            "Să organizez un grup",
            "Să creez ceva de la zero"
        ]
    },

    {
        question: "Cum iei de obicei o decizie importantă?",
        answers: [
            "Analizez logic avantajele și dezavantajele",
            "Caut cât mai multe informații",
            "Mă gândesc la efectele asupra oamenilor",
            "Mă bazez pe experiență și rezultate",
            "Îmi urmez intuiția și ideile"
        ]
    },

    {
        question: "Pentru ce te caută cel mai des ceilalți?",
        answers: [
            "Pentru a rezolva o problemă tehnică",
            "Pentru un sfat personal",
            "Pentru a explica sau prezenta ceva",
            "Pentru a organiza și coordona",
            "Pentru idei originale și creative"
        ]
    },


    // CAPITOLUL 4
    // Stil de lucru și personalitate profesională

    {
        question: "În ce mediu ai prefera să lucrezi?",
        answers: [
            "Într-un birou modern sau de acasă",
            "Într-un laborator sau spital",
            "Într-o companie dinamică",
            "În contact permanent cu oamenii",
            "Într-un studio, atelier sau spațiu creativ"
        ]
    },

    {
        question: "Cum preferi să lucrezi?",
        answers: [
            "Singur și foarte concentrat",
            "Într-o echipă de specialiști",
            "Coordonând o echipă",
            "În contact direct cu oamenii",
            "Cu multă libertate și flexibilitate"
        ]
    },

    {
        question: "Ce tip de program de lucru ai prefera?",
        answers: [
            "Previzibil și bine organizat",
            "Intens, dacă munca are un scop important",
            "Dinamic, cu multe proiecte diferite",
            "Flexibil și independent",
            "Activ, cu deplasări și schimbări frecvente"
        ]
    },

    {
        question: "Cum te simți când trebuie să vorbești în fața unui grup?",
        answers: [
            "Prefer să evit și să lucrez în culise",
            "Pot vorbi dacă stăpânesc foarte bine subiectul",
            "Îmi place să explic și să conving",
            "Îmi place să conduc discuția",
            "Prefer să transmit ideile prin creație"
        ]
    },

    {
        question: "Ce fel de responsabilitate ai prefera?",
        answers: [
            "Să răspund de corectitudinea unei soluții",
            "Să răspund de sănătatea sau binele oamenilor",
            "Să răspund de succesul unui proiect",
            "Să răspund de o echipă",
            "Să răspund de calitatea unei creații"
        ]
    },

    {
        question: "Ce tip de muncă te-ar obosi cel mai puțin?",
        answers: [
            "Analiză și concentrare îndelungată",
            "Activitate practică și precisă",
            "Discuții și interacțiune cu oamenii",
            "Organizare și luarea deciziilor",
            "Creație și experimentare"
        ]
    },


    // CAPITOLUL 5
    // Valori și motivații de carieră

    {
        question: "Ce contează cel mai mult pentru tine într-o carieră?",
        answers: [
            "Să rezolv probleme complexe",
            "Să ajut oamenii",
            "Să am stabilitate financiară",
            "Să am influență și responsabilitate",
            "Să mă exprim liber și creativ"
        ]
    },

    {
        question: "Ce tip de succes te-ar face cel mai mândru?",
        answers: [
            "Să inventez sau să dezvolt ceva util",
            "Să îmbunătățesc viața unor oameni",
            "Să construiesc o afacere de succes",
            "Să contribui la o schimbare importantă în societate",
            "Să creez ceva cunoscut și apreciat"
        ]
    },

    {
        question: "Ce ai vrea să spună oamenii despre munca ta?",
        answers: [
            "Este inteligentă și inovatoare",
            "Este utilă și ajută oamenii",
            "Este eficientă și produce rezultate",
            "Are impact asupra societății",
            "Este originală și memorabilă"
        ]
    },

    {
        question: "Care dintre aceste obiective te atrage cel mai mult?",
        answers: [
            "Să devin expert într-un domeniu tehnic",
            "Să descopăr lucruri noi prin cercetare",
            "Să conduc proiecte sau organizații",
            "Să lucrez pentru oameni și comunitate",
            "Să creez proiecte originale"
        ]
    },

    {
        question: "Ce risc ai accepta mai ușor în carieră?",
        answers: [
            "Să învăț permanent tehnologii noi",
            "Să petrec mulți ani pregătindu-mă pentru o profesie",
            "Să pornesc propria afacere",
            "Să îmi asum decizii importante pentru alții",
            "Să aleg un drum creativ și mai puțin previzibil"
        ]
    },

    {
        question: "Ce te motivează cel mai mult să continui când ceva este dificil?",
        answers: [
            "Dorința de a găsi soluția",
            "Faptul că rezultatul poate ajuta pe cineva",
            "Ambiția de a reuși",
            "Responsabilitatea față de ceilalți",
            "Dorința de a crea ceva personal"
        ]
    },


    // CAPITOLUL 6
    // Scenarii și situații concrete

    {
        question: "Un oraș are o problemă importantă. Cum ai prefera să contribui?",
        answers: [
            "Aș crea o soluție tehnologică",
            "Aș analiza efectele asupra sănătății și mediului",
            "Aș construi un plan financiar și de management",
            "Aș lucra cu oamenii și instituțiile pentru o soluție",
            "Aș crea o campanie publică de informare"
        ]
    },

    {
        question: "Primești finanțare pentru un proiect. Ce ai crea?",
        answers: [
            "O aplicație sau un sistem inteligent",
            "Un proiect de cercetare medicală sau științifică",
            "Un startup",
            "Un program educațional sau social",
            "Un film, un produs de design sau o campanie creativă"
        ]
    },

    {
        question: "O echipă nu reușește să termine un proiect. Ce faci?",
        answers: [
            "Analizez problema și găsesc cauza",
            "Verific dacă lipsesc informații sau cercetări",
            "Reorganizez planul și resursele",
            "Discut cu membrii echipei și rezolv conflictele",
            "Propun o soluție complet diferită"
        ]
    },

    {
        question: "Dacă ai putea face un stagiu pentru o săptămână, ce ai alege?",
        answers: [
            "O companie de tehnologie",
            "Un spital sau laborator",
            "O bancă sau companie internațională",
            "O instanță, instituție publică sau organizație socială",
            "Un studio de design, televiziune sau agenție creativă"
        ]
    },

    {
        question: "Ai de prezentat o idee importantă. Cum te pregătești?",
        answers: [
            "Construiesc argumente logice și folosesc date",
            "Verific atent toate informațiile și dovezile",
            "Mă concentrez pe beneficii și rezultate",
            "Mă gândesc cum va reacționa publicul",
            "Creez o prezentare vizuală și originală"
        ]
    },

    {
        question: "Dacă ai putea rezolva o singură problemă mare, ce ai alege?",
        answers: [
            "Dezvoltarea unor tehnologii mai inteligente și sigure",
            "Vindecarea sau prevenirea unor boli",
            "Crearea unor oportunități economice mai bune",
            "Reducerea problemelor sociale și a nedreptății",
            "Îmbunătățirea educației, culturii și comunicării"
        ]
    }

];

let currentQuestion = 0;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    showQuestion();
}

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question-number").innerHTML =
        `Întrebarea ${currentQuestion + 1} din ${questions.length}`;

    document.getElementById("question").innerHTML = q.question;

    document.getElementById("progress-bar").style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    let html = "";

    q.answers.forEach(answer => {
        html += `
            <button onclick="nextQuestion()">
                ${answer}
            </button>
        `;
    });

    document.getElementById("answers").innerHTML = html;
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.getElementById("quiz-screen").style.display = "none";

        document.getElementById("result-screen").style.display = "block";

        document.getElementById("progress-bar").style.width = "100%";

        document.getElementById("results").innerHTML = `
            <h2>🎉 Felicitări!</h2>
            <p>Ai terminat testul.</p>
            <p>În etapa următoare vom calcula automat Top 5 facultăți potrivite pentru tine.</p>
        `;
    }
}
