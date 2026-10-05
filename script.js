const questions = [

    // CAPITOLUL 1
    // Materii și interese academice

    {
    question: "Ce materie îți place cel mai mult la școală?",
    answers: [
        {
            text: "Matematică",
            scores: {
                matematica: 5,
                matematicaInformatica: 4,
                statistica: 4,
                ciberneticaEconomica: 3,
                fizica: 2,
                inginerieMecanica: 1
            }
        },

        {
            text: "Biologie",
            scores: {
                biologie: 5,
                medicina: 4,
                biochimie: 4,
                biotehnologii: 4,
                farmacie: 3,
                nutritieDietetica: 2
            }
        },

        {
            text: "Informatică",
            scores: {
                informatica: 5,
                informaticaAplicata: 5,
                inteligentaArtificiala: 4,
                calculatoare: 4,
                securitateCibernetica: 3,
                informaticaEconomica: 2
            }
        },

        {
            text: "Limba română / Limbi străine",
            scores: {
                litere: 5,
                limbiModerneAplicate: 5,
                jurnalism: 3,
                comunicarePR: 3,
                drept: 2
            }
        },

        {
            text: "Desen / Arte",
            scores: {
                artePlastice: 5,
                design: 5,
                arhitecturaInterior: 4,
                arhitectura: 3,
                fotografieVideo: 3
            }
        }
    ]
},

    {
    question: "Ce tip de subiect îți stârnește cel mai mult curiozitatea?",
    answers: [
        {
            text: "Cum funcționează tehnologia",
            scores: {
                informatica: 5,
                informaticaAplicata: 4,
                inteligentaArtificiala: 4,
                calculatoare: 4,
                automatica: 3,
                robotica: 3,
                mecatronica: 2
            }
        },
        {
            text: "Cum funcționează corpul uman",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                farmacie: 4,
                biochimie: 4,
                biotehnologii: 3,
                asistentaMedicala: 3,
                nutritieDietetica: 2,
                kinetoterapie: 2
            }
        },
        {
            text: "Cum funcționează economia și afacerile",
            scores: {
                economie: 5,
                afaceriInternationale: 4,
                finanteBanci: 4,
                administrareaAfacerilor: 4,
                management: 3,
                contabilitate: 3,
                marketing: 2,
                informaticaEconomica: 2
            }
        },
        {
            text: "Cum gândesc și se comportă oamenii",
            scores: {
                psihologie: 5,
                sociologie: 4,
                asistentaSociala: 3,
                resurseUmane: 3,
                pedagogie: 3,
                stiintePolitice: 2,
                comunicarePR: 2
            }
        },
        {
            text: "Cum sunt create operele artistice",
            scores: {
                artePlastice: 5,
                design: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                muzica: 3,
                teatru: 3,
                arhitecturaInterior: 2
            }
        }
    ]
},

 {
    question: "Dacă ai avea o zi întreagă pentru a învăța ceva nou, ce ai alege?",
    answers: [
        {
            text: "Programare sau inteligență artificială",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                informaticaAplicata: 4,
                calculatoare: 4,
                securitateCibernetica: 3,
                dataScience: 3
            }
        },
        {
            text: "Anatomie, genetică sau medicină",
            scores: {
                medicina: 5,
                biologie: 5,
                biochimie: 4,
                medicinaDentara: 4,
                farmacie: 4,
                biotehnologii: 3
            }
        },
        {
            text: "Investiții, economie sau antreprenoriat",
            scores: {
                economie: 5,
                finanteBanci: 5,
                administrareaAfacerilor: 4,
                afaceriInternationale: 4,
                management: 4,
                marketing: 3
            }
        },
        {
            text: "Psihologie, istorie sau societate",
            scores: {
                psihologie: 5,
                istorie: 4,
                sociologie: 4,
                stiintePolitice: 3,
                filosofie: 3,
                asistentaSociala: 3
            }
        },
        {
            text: "Design, fotografie, muzică sau film",
            scores: {
                design: 5,
                fotografieVideo: 5,
                muzica: 4,
                cinematografie: 4,
                artePlastice: 4,
                teatru: 3
            }
        }
    ]
}, 

  {
    question: "Ce tip de documentar ai urmări cu cel mai mare interes?",
    answers: [
        {
            text: "Tehnologie și invenții",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                calculatoare: 4,
                robotica: 4,
                automatica: 3,
                inginerieElectrica: 3
            }
        },
        {
            text: "Medicină și corpul uman",
            scores: {
                medicina: 5,
                biologie: 5,
                medicinaDentara: 4,
                biochimie: 4,
                farmacie: 4,
                kinetoterapie: 3
            }
        },
        {
            text: "Natură și mediul înconjurător",
            scores: {
                biologie: 5,
                stiintaMediului: 5,
                geologie: 4,
                silvicultura: 4,
                agricultura: 3,
                peisagistica: 3
            }
        },
        {
            text: "Istorie, politică și societate",
            scores: {
                istorie: 5,
                stiintePolitice: 5,
                drept: 4,
                relatiiInternationale: 4,
                sociologie: 3,
                filosofie: 3
            }
        },
        {
            text: "Artă, cultură și creație",
            scores: {
                artePlastice: 5,
                design: 5,
                cinematografie: 4,
                teatru: 4,
                muzica: 4,
                arhitectura: 3
            }
        }
    ]
},

  {
    question: "Ce problemă ți-ar plăcea cel mai mult să înțelegi?",
    answers: [
        {
            text: "Cum poate fi îmbunătățit un sistem tehnologic",
            scores: {
                informatica: 5,
                automatica: 5,
                calculatoare: 4,
                informaticaAplicata: 4,
                robotica: 4,
                mecatronica: 3
            }
        },
        {
            text: "Cum pot fi prevenite și tratate bolile",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                farmacie: 4,
                biologie: 4,
                biochimie: 4,
                asistentaMedicala: 3,
                nutritieDietetica: 3
            }
        },
        {
            text: "Cum poate deveni o afacere de succes",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 4,
                marketing: 4,
                afaceriInternationale: 4,
                ciberneticaEconomica: 3
            }
        },
        {
            text: "De ce oamenii iau anumite decizii",
            scores: {
                psihologie: 5,
                sociologie: 4,
                stiintePolitice: 3,
                resurseUmane: 3,
                filosofie: 3,
                asistentaSociala: 3
            }
        },
        {
            text: "Cum poate fi transmisă o idee într-un mod original",
            scores: {
                comunicarePR: 5,
                publicitate: 5,
                jurnalism: 4,
                design: 4,
                litere: 4,
                cinematografie: 3
            }
        }
    ]
}, 

    {
    question: "În ce tip de proiect școlar te-ai implica cu cel mai mare interes?",
    answers: [
        {
            text: "Construirea unei aplicații sau a unui robot",
            scores: {
                informatica: 5,
                calculatoare: 5,
                robotica: 5,
                automatica: 4,
                mecatronica: 4,
                informaticaAplicata: 4
            }
        },
        {
            text: "Un experiment de laborator",
            scores: {
                biologie: 5,
                chimie: 5,
                biochimie: 5,
                fizica: 4,
                biotehnologii: 4,
                medicina: 3
            }
        },
        {
            text: "Crearea unui plan de afaceri",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 4,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "O dezbatere despre o problemă socială",
            scores: {
                drept: 5,
                stiintePolitice: 5,
                sociologie: 4,
                psihologie: 4,
                relatiiInternationale: 4,
                filosofie: 3
            }
        },
        {
            text: "Realizarea unui proiect artistic sau media",
            scores: {
                design: 5,
                artePlastice: 5,
                cinematografie: 5,
                fotografieVideo: 4,
                publicitate: 4,
                comunicarePR: 3,
                teatru: 3
            }
        }
    ]
},


    // CAPITOLUL 2
    // Activități și interese practice

    {
    question: "Ce activitate ți-ar face cea mai mare plăcere?",
    answers: [
        {
            text: "Să rezolv o problemă logică dificilă",
            scores: {
                informatica: 5,
                matematica: 4,
                matematicaInformatica: 4,
                dataScience: 3,
                automatica: 3,
                inginerieMecanica: 2
            }
        },
        {
            text: "Să ajut direct o persoană care are nevoie",
            scores: {
                medicina: 5,
                asistentaMedicala: 5,
                psihologie: 4,
                asistentaSociala: 4,
                kinetoterapie: 4,
                pedagogie: 3
            }
        },
        {
            text: "Să organizez un proiect sau un eveniment",
            scores: {
                management: 5,
                administrareaAfacerilor: 4,
                marketing: 4,
                comunicarePR: 3,
                turism: 3,
                administratiePublica: 2
            }
        },
        {
            text: "Să creez ceva original",
            scores: {
                design: 5,
                artePlastice: 4,
                publicitate: 4,
                cinematografie: 3,
                fotografieVideo: 3,
                arhitecturaInterior: 3
            }
        },
        {
            text: "Să construiesc sau să repar ceva",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 4,
                autovehiculeRutiere: 4,
                inginerieElectrica: 4,
                robotica: 3,
                instalatiiConstructii: 2
            }
        }
    ]
},

    {
    question: "Dacă ai participa la un concurs, ce tip ai prefera?",
    answers: [
        {
            text: "Programare sau matematică",
            scores: {
                informatica: 5,
                matematicaInformatica: 5,
                matematica: 4,
                calculatoare: 4,
                dataScience: 3,
                statistica: 3
            }
        },
        {
            text: "Științe sau cercetare",
            scores: {
                biologie: 4,
                biochimie: 4,
                biotehnologii: 4,
                fizica: 4,
                chimie: 4,
                geologie: 3,
                stiintaMediului: 3
            }
        },
        {
            text: "Dezbateri și argumentare",
            scores: {
                drept: 5,
                stiintePolitice: 4,
                relatiiInternationale: 4,
                comunicarePR: 3,
                filosofie: 3,
                jurnalism: 3
            }
        },
        {
            text: "Antreprenoriat și business",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 4,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "Artă, design sau creație",
            scores: {
                design: 5,
                artePlastice: 5,
                arhitecturaInterior: 4,
                arhitectura: 4,
                fotografieVideo: 4,
                cinematografie: 3
            }
        }
    ]
},

   {
    question: "Ce sarcină ai alege într-un proiect de echipă?",
    answers: [
        {
            text: "Analizez datele și găsesc soluții",
            scores: {
                dataScience: 5,
                statistica: 4,
                informatica: 4,
                matematicaInformatica: 4,
                ciberneticaEconomica: 3,
                informaticaEconomica: 3
            }
        },
        {
            text: "Coordonez oamenii și sarcinile",
            scores: {
                management: 5,
                administrareaAfacerilor: 4,
                resurseUmane: 4,
                administratiePublica: 3,
                turism: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "Prezint rezultatele proiectului",
            scores: {
                comunicarePR: 5,
                jurnalism: 4,
                publicitate: 4,
                relatiiInternationale: 3,
                marketing: 3,
                drept: 2
            }
        },
        {
            text: "Mă ocup de partea vizuală și creativă",
            scores: {
                design: 5,
                fotografieVideo: 4,
                artePlastice: 4,
                arhitecturaInterior: 4,
                publicitate: 3,
                cinematografie: 3
            }
        },
        {
            text: "Testez practic dacă soluția funcționează",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                robotica: 4,
                autovehiculeRutiere: 4,
                inginerieElectrica: 4,
                automatica: 4
            }
        }
    ]
},

 {
    question: "Ce ai prefera să faci într-o zi liberă?",
    answers: [
        {
            text: "Să descopăr un program sau o tehnologie nouă",
            scores: {
                informatica: 5,
                informaticaAplicata: 5,
                inteligentaArtificiala: 4,
                securitateCibernetica: 4,
                calculatoare: 4,
                automatica: 3
            }
        },
        {
            text: "Să citesc despre știință sau sănătate",
            scores: {
                medicina: 5,
                biologie: 4,
                biochimie: 4,
                farmacie: 4,
                nutritieDietetica: 3,
                kinetoterapie: 3
            }
        },
        {
            text: "Să particip la o activitate cu mulți oameni",
            scores: {
                turism: 5,
                geografiaTurismului: 4,
                educatieFizicaSport: 4,
                sportPerformanta: 4,
                comunicarePR: 3,
                marketing: 3
            }
        },
        {
            text: "Să creez, să desenez, să scriu sau să filmez",
            scores: {
                design: 5,
                artePlastice: 5,
                litere: 4,
                fotografieVideo: 4,
                cinematografie: 4,
                jurnalism: 3
            }
        },
        {
            text: "Să fac sport sau o activitate în aer liber",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                geografiaTurismului: 3,
                turism: 3,
                peisagistica: 2
            }
        }
    ]
},

   {
    question: "Ce tip de problemă ai rezolva cu cea mai mare satisfacție?",
    answers: [
        {
            text: "O problemă tehnică",
            scores: {
                informatica: 5,
                calculatoare: 5,
                inginerieMecanica: 4,
                automatica: 4,
                robotica: 4,
                mecatronica: 4
            }
        },
        {
            text: "O problemă legată de sănătatea unei persoane",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                farmacie: 4,
                asistentaMedicala: 4,
                kinetoterapie: 4,
                nutritieDietetica: 3
            }
        },
        {
            text: "Un conflict între oameni",
            scores: {
                psihologie: 5,
                sociologie: 4,
                resurseUmane: 4,
                drept: 4,
                asistentaSociala: 4,
                administratiePublica: 2
            }
        },
        {
            text: "O problemă financiară sau de organizare",
            scores: {
                economie: 5,
                finanteBanci: 5,
                contabilitate: 4,
                management: 4,
                administrareaAfacerilor: 4,
                ciberneticaEconomica: 3
            }
        },
        {
            text: "O problemă de design sau comunicare",
            scores: {
                design: 5,
                comunicarePR: 5,
                publicitate: 4,
                jurnalism: 4,
                fotografieVideo: 3,
                artePlastice: 3
            }
        }
    ]
},

   {
    question: "Ce rezultat al muncii tale ți-ar da cea mai mare satisfacție?",
    answers: [
        {
            text: "Un sistem care funcționează perfect",
            scores: {
                informatica: 5,
                calculatoare: 5,
                automatica: 4,
                inteligentaArtificiala: 4,
                securitateCibernetica: 4,
                informaticaAplicata: 4
            }
        },
        {
            text: "O persoană pe care am ajutat-o",
            scores: {
                medicina: 5,
                asistentaMedicala: 5,
                psihologie: 4,
                asistentaSociala: 4,
                kinetoterapie: 3,
                pedagogie: 3
            }
        },
        {
            text: "Un proiect profitabil și bine organizat",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                contabilitate: 4,
                finanteBanci: 4,
                marketing: 3
            }
        },
        {
            text: "O schimbare pozitivă în societate",
            scores: {
                stiintePolitice: 5,
                administratiePublica: 4,
                drept: 4,
                relatiiInternationale: 4,
                asistentaSociala: 4,
                sociologie: 3
            }
        },
        {
            text: "O creație originală apreciată de oameni",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                muzica: 3,
                teatru: 3
            }
        }
    ]
},

    // CAPITOLUL 3
    // Aptitudini și mod de gândire

   {
    question: "Care dintre aceste abilități te descrie cel mai bine?",
    answers: [
        {
            text: "Gândesc logic și analitic",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 4,
                dataScience: 4,
                statistica: 3,
                automatica: 3
            }
        },
        {
            text: "Înțeleg ușor emoțiile oamenilor",
            scores: {
                psihologie: 5,
                asistentaSociala: 4,
                resurseUmane: 4,
                sociologie: 4,
                pedagogie: 3,
                medicina: 2
            }
        },
        {
            text: "Comunic și argumentez bine",
            scores: {
                drept: 5,
                comunicarePR: 5,
                jurnalism: 4,
                stiintePolitice: 4,
                relatiiInternationale: 3,
                publicitate: 3
            }
        },
        {
            text: "Sunt creativ și am multe idei",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                arhitecturaInterior: 3
            }
        },
        {
            text: "Sunt practic și găsesc soluții concrete",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                robotica: 4,
                autovehiculeRutiere: 4,
                inginerieElectrica: 4,
                constructii: 3
            }
        }
    ]
},

   {
    question: "Când întâlnești o problemă dificilă, ce faci prima dată?",
    answers: [
        {
            text: "O împart în pași mici și logici",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 4,
                dataScience: 4,
                automatica: 3,
                inginerieMecanica: 3
            }
        },
        {
            text: "Caut informații și dovezi",
            scores: {
                cercetare: 5,
                biologie: 4,
                biochimie: 4,
                medicina: 3,
                chimie: 3,
                fizica: 3
            }
        },
        {
            text: "Cer opiniile altor persoane",
            scores: {
                psihologie: 5,
                sociologie: 4,
                resurseUmane: 4,
                asistentaSociala: 3,
                management: 3,
                comunicarePR: 3
            }
        },
        {
            text: "Încerc o abordare originală",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                arhitecturaInterior: 3
            }
        },
        {
            text: "Testez direct mai multe soluții",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                robotica: 4,
                autovehiculeRutiere: 4,
                inginerieElectrica: 4,
                inginerieIndustriala: 3
            }
        }
    ]
}, 

   {
    question: "Ce observi cel mai repede într-o situație nouă?",
    answers: [
        {
            text: "Tiparele și regulile",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 4,
                statistica: 4,
                dataScience: 3,
                automatica: 3
            }
        },
        {
            text: "Detaliile importante",
            scores: {
                medicina: 5,
                biologie: 4,
                biochimie: 4,
                farmacie: 4,
                chimie: 3,
                inginerieMedicala: 3
            }
        },
        {
            text: "Starea și reacțiile oamenilor",
            scores: {
                psihologie: 5,
                sociologie: 4,
                asistentaSociala: 4,
                resurseUmane: 4,
                pedagogie: 3,
                comunicarePR: 3
            }
        },
        {
            text: "Oportunitățile și avantajele",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 4,
                marketing: 4,
                antreprenoriat: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "Aspectul vizual și atmosfera",
            scores: {
                design: 5,
                artePlastice: 5,
                arhitecturaInterior: 4,
                fotografieVideo: 4,
                cinematografie: 4,
                arhitectura: 3
            }
        }
    ]
},

   {
    question: "Ce tip de sarcină ți se pare cea mai ușoară?",
    answers: [
        {
            text: "Să lucrez cu numere și formule",
            scores: {
                matematica: 5,
                matematicaInformatica: 5,
                statistica: 4,
                informatica: 3,
                dataScience: 3,
                fizica: 3
            }
        },
        {
            text: "Să memorez și să înțeleg informații complexe",
            scores: {
                medicina: 5,
                biologie: 5,
                biochimie: 4,
                farmacie: 4,
                biotehnologii: 3,
                chimie: 3
            }
        },
        {
            text: "Să explic ceva unei persoane",
            scores: {
                pedagogie: 5,
                psihologie: 4,
                comunicarePR: 4,
                jurnalism: 4,
                litere: 3,
                asistentaSociala: 3
            }
        },
        {
            text: "Să organizez un grup",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                resurseUmane: 4,
                administratiePublica: 4,
                marketing: 3,
                turism: 3
            }
        },
        {
            text: "Să creez ceva de la zero",
            scores: {
                design: 5,
                artePlastice: 5,
                arhitectura: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                publicitate: 3
            }
        }
    ]
},

  {
    question: "Cum iei de obicei o decizie importantă?",
    answers: [
        {
            text: "Analizez logic avantajele și dezavantajele",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 4,
                economie: 3,
                dataScience: 3,
                statistica: 3
            }
        },
        {
            text: "Caut cât mai multe informații",
            scores: {
                cercetare: 5,
                biologie: 4,
                medicina: 4,
                biochimie: 4,
                fizica: 3,
                chimie: 3
            }
        },
        {
            text: "Mă gândesc la efectele asupra oamenilor",
            scores: {
                psihologie: 5,
                sociologie: 4,
                asistentaSociala: 4,
                drept: 3,
                resurseUmane: 3,
                pedagogie: 3
            }
        },
        {
            text: "Mă bazez pe experiență și rezultate",
            scores: {
                management: 5,
                administrareaAfacerilor: 4,
                inginerieMecanica: 4,
                autovehiculeRutiere: 4,
                economie: 3,
                marketing: 3
            }
        },
        {
            text: "Îmi urmez intuiția și ideile",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                comunicarePR: 3
            }
        }
    ]
},

  {
    question: "Ce te motivează cel mai mult să înveți ceva nou?",
    answers: [
        {
            text: "Curiozitatea și dorința de a înțelege cum funcționează lucrurile",
            scores: {
                informatica: 5,
                matematica: 4,
                fizica: 4,
                inginerieMecanica: 3,
                matematicaInformatica: 4,
                dataScience: 3
            }
        },
        {
            text: "Dorința de a ajuta sau de a înțelege oamenii",
            scores: {
                medicina: 4,
                psihologie: 5,
                pedagogie: 4,
                asistentaSociala: 4,
                medicinaDentara: 3,
                kinetoterapie: 3
            }
        },
        {
            text: "Posibilitatea de a obține rezultate și de a avea succes",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 4,
                marketing: 4,
                finanteBanci: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "Dorința de a-mi exprima ideile și creativitatea",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                litere: 3
            }
        },
        {
            text: "Dorința de a-mi depăși limitele și de a deveni mai bun(ă)",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 3,
                management: 2,
                psihologie: 2
            }
        }
    ]
},


    // CAPITOLUL 4
    // Stil de lucru și personalitate profesională

  {
    question: "În ce mediu ai prefera să lucrezi?",
    answers: [
        {
            text: "Într-un birou modern sau de acasă",
            scores: {
                informatica: 5,
                informaticaAplicata: 5,
                informaticaEconomica: 4,
                dataScience: 4,
                marketing: 3,
                contabilitate: 3
            }
        },
        {
            text: "Într-un laborator sau spital",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                farmacie: 5,
                biologie: 4,
                biochimie: 4,
                inginerieMedicala: 3
            }
        },
        {
            text: "Într-o companie dinamică",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "În contact permanent cu oamenii",
            scores: {
                psihologie: 5,
                drept: 4,
                pedagogie: 4,
                asistentaSociala: 5,
                comunicarePR: 4,
                resurseUmane: 4
            }
        },
        {
            text: "Într-un studio, atelier sau spațiu creativ",
            scores: {
                design: 5,
                artePlastice: 5,
                arhitecturaInterior: 5,
                fotografieVideo: 4,
                cinematografie: 4,
                publicitate: 4
            }
        }
    ]
},
   {
    question: "Cum preferi să lucrezi?",
    answers: [
       {
    text: "Singur și foarte concentrat",
    scores: {
        informatica: 5,
        matematica: 5,
        matematicaInformatica: 4,
        dataScience: 4,
        statistica: 3,
        fizica: 3
    }
},
        {
            text: "Într-o echipă de specialiști",
            scores: {
                medicina: 4,
                inginerieMecanica: 4,
                inginerieMedicala: 4,
                biochimie: 4,
                fizica: 3,
                inginerieElectrica: 3
            }
        },
        {
            text: "Coordonând o echipă",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                resurseUmane: 4,
                administratiePublica: 4,
                marketing: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "În contact direct cu oamenii",
            scores: {
                psihologie: 5,
                drept: 5,
                pedagogie: 4,
                asistentaSociala: 4,
                comunicarePR: 4,
                medicina: 3
            }
        },
        {
            text: "Cu multă libertate și flexibilitate",
            scores: {
                design: 5,
                publicitate: 5,
                fotografieVideo: 4,
                cinematografie: 4,
                jurnalism: 4,
                litere: 3
            }
        }
    ]
},
  {
    question: "Ce tip de program de lucru ai prefera?",
    answers: [
        {
            text: "Previzibil și bine organizat",
            scores: {
                contabilitate: 5,
                finanteBanci: 5,
                administratiePublica: 4,
                farmacie: 3,
                matematica: 3,
                statistica: 3
            }
        },
        {
            text: "Intens, dacă munca are un scop important",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                inginerieMedicala: 4,
                drept: 4,
                psihologie: 3,
                asistentaMedicala: 3
            }
        },
        {
            text: "Dinamic, cu multe proiecte diferite",
            scores: {
                informatica: 5,
                management: 5,
                marketing: 4,
                administrareaAfacerilor: 4,
                publicitate: 4,
                comunicarePR: 3
            }
        },
        {
            text: "Flexibil și independent",
            scores: {
                design: 5,
                fotografieVideo: 5,
                jurnalism: 4,
                litere: 4,
                publicitate: 4,
                artePlastice: 3
            }
        },
        {
            text: "Activ, cu deplasări și schimbări frecvente",
            scores: {
                turism: 5,
                geografiaTurismului: 5,
                afaceriInternationale: 4,
                jurnalism: 3,
                management: 3,
                sportPerformanta: 3
            }
        }
    ]
},

   {
    question: "Cum te simți când trebuie să vorbești în fața unui grup?",
    answers: [
        {
            text: "Prefer să evit și să lucrez în culise",
            scores: {
                informatica: 5,
                matematica: 4,
                contabilitate: 4,
                informaticaAplicata: 3,
                statistica: 3
            }
        },
        {
            text: "Pot vorbi dacă stăpânesc foarte bine subiectul",
            scores: {
                medicina: 4,
                drept: 4,
                inginerieMecanica: 4,
                fizica: 3,
                informatica: 3,
                economie: 3
            }
        },
        {
            text: "Îmi place să explic și să conving",
            scores: {
                drept: 5,
                comunicarePR: 5,
                jurnalism: 4,
                marketing: 4,
                pedagogie: 4,
                publicitate: 3
            }
        },
        {
            text: "Îmi place să conduc discuția",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                stiintePolitice: 4,
                administratiePublica: 4,
                afaceriInternationale: 4,
                resurseUmane: 3
            }
        },
        {
            text: "Prefer să transmit ideile prin creație",
            scores: {
                design: 5,
                artePlastice: 5,
                cinematografie: 5,
                fotografieVideo: 4,
                publicitate: 4,
                teatru: 3
            }
        }
    ]
},

    {
    question: "Ce fel de responsabilitate ai prefera?",
    answers: [
        {
            text: "Să răspund de corectitudinea unei soluții",
            scores: {
                informatica: 5,
                matematica: 5,
                inginerieMecanica: 4,
                calculatoare: 4,
                automatica: 4,
                inginerieElectrica: 3
            }
        },
        {
            text: "Să răspund de sănătatea sau binele oamenilor",
            scores: {
                medicina: 5,
                medicinaDentara: 5,
                asistentaMedicala: 5,
                farmacie: 4,
                psihologie: 4,
                kinetoterapie: 3
            }
        },
        {
            text: "Să răspund de succesul unui proiect",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                marketing: 4,
                afaceriInternationale: 3,
                finanteBanci: 3
            }
        },
        {
            text: "Să răspund de o echipă",
            scores: {
                management: 5,
                resurseUmane: 5,
                administrareaAfacerilor: 4,
                administratiePublica: 4,
                stiintePolitice: 3,
                turism: 3
            }
        },
        {
            text: "Să răspund de calitatea unei creații",
            scores: {
                design: 5,
                artePlastice: 5,
                arhitectura: 5,
                cinematografie: 4,
                fotografieVideo: 4,
                publicitate: 4
            }
        }
    ]
},

   {
    question: "Ce te-ar face să fii mulțumit(ă) de locul tău de muncă?",
    answers: [
        {
            text: "Să rezolv probleme și să văd rezultate concrete",
            scores: {
                informatica: 5,
                calculatoare: 5,
                matematica: 4,
                inginerieMecanica: 4,
                robotica: 4,
                automatica: 4
            }
        },
        {
            text: "Să știu că ajut oameni în mod direct",
            scores: {
                medicina: 5,
                asistentaMedicala: 5,
                psihologie: 5,
                asistentaSociala: 4,
                pedagogie: 4,
                kinetoterapie: 4
            }
        },
        {
            text: "Să am rezultate bune și oportunități de dezvoltare",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                marketing: 4,
                finanteBanci: 4,
                afaceriInternationale: 3
            }
        },
        {
            text: "Să am libertatea de a-mi folosi ideile",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 5,
                cinematografie: 4,
                fotografieVideo: 4,
                litere: 3
            }
        },
        {
            text: "Să am un impact pozitiv asupra societății",
            scores: {
                drept: 5,
                stiintePolitice: 5,
                administratiePublica: 4,
                relatiiInternationale: 4,
                sociologie: 4,
                asistentaSociala: 3
            }
        }
    ]
},


    // CAPITOLUL 5
    // Valori și motivații de carieră

   

   {
    question: "Ce contează cel mai mult pentru tine într-o carieră?",
    answers: [
        {
            text: "Să rezolv probleme complexe",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 4,
                inginerieMecanica: 4,
                calculatoare: 4,
                dataScience: 4
            }
        },
        {
            text: "Să ajut oamenii",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                pedagogie: 4,
                asistentaSociala: 4,
                kinetoterapie: 4
            }
        },
        {
            text: "Să am stabilitate financiară",
            scores: {
                economie: 5,
                finanteBanci: 5,
                contabilitate: 5,
                informaticaEconomica: 4,
                administrareaAfacerilor: 4,
                management: 3
            }
        },
        {
            text: "Să am influență și responsabilitate",
            scores: {
                drept: 5,
                management: 5,
                stiintePolitice: 5,
                administratiePublica: 4,
                afaceriInternationale: 4,
                relatiiInternationale: 4
            }
        },
        {
            text: "Să mă exprim liber și creativ",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 5,
                cinematografie: 4,
                fotografieVideo: 4,
                litere: 4
            }
        }
    ]
},
    {
    question: "Ce tip de succes te-ar face cel mai mândru?",
    answers: [
        {
            text: "Să inventez sau să dezvolt ceva util",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                inginerieMecanica: 4,
                robotica: 4,
                mecatronica: 4,
                inginerieElectrica: 3
            }
        },
        {
            text: "Să îmbunătățesc viața unor oameni",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                kinetoterapie: 4,
                pedagogie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Să construiesc o afacere de succes",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "Să contribui la o schimbare importantă în societate",
            scores: {
                drept: 5,
                stiintePolitice: 5,
                administratiePublica: 5,
                relatiiInternationale: 4,
                sociologie: 4,
                asistentaSociala: 3
            }
        },
        {
            text: "Să creez ceva cunoscut și apreciat",
            scores: {
                design: 5,
                artePlastice: 5,
                cinematografie: 5,
                publicitate: 4,
                fotografieVideo: 4,
                muzica: 3,
                teatru: 3
            }
        }
    ]
},

   {
    question: "Ce ai vrea să spună oamenii despre munca ta?",
    answers: [
        {
            text: "Este inteligentă și inovatoare",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                inginerieMecanica: 4,
                robotica: 4,
                matematicaInformatica: 4,
                dataScience: 3
            }
        },
        {
            text: "Este utilă și ajută oamenii",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                pedagogie: 4,
                kinetoterapie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Este eficientă și produce rezultate",
            scores: {
                economie: 5,
                management: 5,
                administrareaAfacerilor: 5,
                finanteBanci: 4,
                contabilitate: 4,
                marketing: 3
            }
        },
        {
            text: "Are impact asupra societății",
            scores: {
                drept: 5,
                stiintePolitice: 5,
                administratiePublica: 4,
                relatiiInternationale: 4,
                sociologie: 4,
                asistentaSociala: 3
            }
        },
        {
            text: "Este originală și memorabilă",
            scores: {
                design: 5,
                artePlastice: 5,
                cinematografie: 5,
                publicitate: 4,
                fotografieVideo: 4,
                arhitecturaInterior: 4
            }
        }
    ]
},

   {
    question: "Care dintre aceste obiective te atrage cel mai mult?",
    answers: [
        {
            text: "Să devin expert într-un domeniu tehnic",
            scores: {
                informatica: 5,
                calculatoare: 5,
                matematicaInformatica: 4,
                inteligentaArtificiala: 4,
                inginerieMecanica: 4,
                robotica: 3
            }
        },
        {
            text: "Să descopăr lucruri noi prin cercetare",
            scores: {
                biologie: 5,
                biochimie: 5,
                fizica: 5,
                chimie: 4,
                biotehnologii: 4,
                geologie: 3
            }
        },
        {
            text: "Să conduc proiecte sau organizații",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                administratiePublica: 4,
                afaceriInternationale: 4,
                resurseUmane: 3
            }
        },
        {
            text: "Să lucrez pentru oameni și comunitate",
            scores: {
                psihologie: 5,
                drept: 5,
                asistentaSociala: 5,
                pedagogie: 4,
                administratiePublica: 4,
                sociologie: 4
            }
        },
        {
            text: "Să creez proiecte originale",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 5,
                cinematografie: 4,
                fotografieVideo: 4,
                arhitecturaInterior: 4
            }
        }
    ]
},

  {
    question: "Ce risc ai accepta mai ușor în carieră?",
    answers: [
        {
            text: "Să învăț permanent tehnologii noi",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                calculatoare: 4,
                dataScience: 4,
                securitateCibernetica: 4,
                informaticaAplicata: 3
            }
        },
        {
            text: "Să petrec mulți ani pregătindu-mă pentru o profesie",
            scores: {
                medicina: 5,
                medicinaDentara: 5,
                farmacie: 4,
                drept: 4,
                psihologie: 3,
                inginerieMedicala: 3
            }
        },
        {
            text: "Să pornesc propria afacere",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "Să îmi asum decizii importante pentru alții",
            scores: {
                drept: 5,
                management: 5,
                medicina: 4,
                administratiePublica: 4,
                stiintePolitice: 4,
                resurseUmane: 3
            }
        },
        {
            text: "Să aleg un drum creativ și mai puțin previzibil",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 5,
                cinematografie: 4,
                fotografieVideo: 4,
                teatru: 3
            }
        }
    ]
},

    {
    question: "Ce te motivează cel mai mult să continui când ceva este dificil?",
    answers: [
        {
            text: "Dorința de a găsi soluția",
            scores: {
                informatica: 5,
                matematica: 5,
                calculatoare: 4,
                inginerieMecanica: 4,
                robotica: 4,
                dataScience: 3
            }
        },
        {
            text: "Faptul că rezultatul poate ajuta pe cineva",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                pedagogie: 4,
                kinetoterapie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Ambiția de a reuși",
            scores: {
                economie: 5,
                management: 5,
                administrareaAfacerilor: 5,
                finanteBanci: 4,
                marketing: 4,
                afaceriInternationale: 3
            }
        },
        {
            text: "Responsabilitatea față de ceilalți",
            scores: {
                drept: 5,
                medicina: 4,
                management: 4,
                administratiePublica: 4,
                stiintePolitice: 4,
                resurseUmane: 3
            }
        },
        {
            text: "Dorința de a crea ceva personal",
            scores: {
                design: 5,
                artePlastice: 5,
                publicitate: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                litere: 3
            }
        }
    ]
},

    // CAPITOLUL 6
    // Scenarii și situații concrete

   {
    question: "Un oraș are o problemă importantă. Cum ai prefera să contribui?",
    answers: [
        {
            text: "Aș crea o soluție tehnologică",
            scores: {
                informatica: 5,
                calculatoare: 5,
                informaticaAplicata: 4,
                automatica: 4,
                inteligentaArtificiala: 4,
                robotica: 3
            }
        },
      {
    text: "Aș analiza efectele asupra sănătății și mediului",
    scores: {
        medicina: 5,
        biologie: 4,
        stiintaMediului: 5,
        ingineriaMediului: 4,
        nutritieDietetica: 3,
        farmacie: 3
    }
},
        {
            text: "Aș construi un plan financiar și de management",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                finanteBanci: 4,
                contabilitate: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "Aș lucra cu oamenii și instituțiile pentru o soluție",
            scores: {
                drept: 5,
                administratiePublica: 5,
                stiintePolitice: 4,
                sociologie: 4,
                relatiiInternationale: 3,
                asistentaSociala: 3
            }
        },
        {
            text: "Aș crea o campanie publică de informare",
            scores: {
                comunicarePR: 5,
                jurnalism: 5,
                publicitate: 5,
                marketing: 4,
                fotografieVideo: 3,
                litere: 3
            }
        }
    ]
},

  {
    question: "Primești finanțare pentru un proiect. Ce ai crea?",
    answers: [
        {
            text: "O aplicație sau un sistem inteligent",
            scores: {
                informatica: 5,
                calculatoare: 5,
                inteligentaArtificiala: 5,
                informaticaAplicata: 4,
                automatica: 4,
                securitateCibernetica: 3
            }
        },
        {
            text: "Un proiect de cercetare medicală sau științifică",
            scores: {
                medicina: 5,
                biologie: 5,
                biochimie: 5,
                farmacie: 4,
                chimie: 4,
                fizica: 3
            }
        },
        {
            text: "Un startup",
            scores: {
                economie: 5,
                administrareaAfacerilor: 5,
                management: 5,
                marketing: 4,
                afaceriInternationale: 4,
                finanteBanci: 3
            }
        },
        {
            text: "Un program educațional sau social",
            scores: {
                pedagogie: 5,
                asistentaSociala: 5,
                psihologie: 4,
                sociologie: 4,
                educatieTimpurie: 3,
                invatamantPrimar: 3
            }
        },
        {
            text: "Un film, un produs de design sau o companie creativă",
            scores: {
                cinematografie: 5,
                design: 5,
                publicitate: 5,
                fotografieVideo: 4,
                artePlastice: 4,
                comunicarePR: 3
            }
        }
    ]
},
   {
    question: "O echipă nu reușește să termine un proiect. Ce faci?",
    answers: [
        {
            text: "Analizez problema și găsesc cauza",
            scores: {
                informatica: 5,
                matematica: 4,
                dataScience: 4,
                inginerieIndustriala: 4,
                inginerieMecanica: 3,
                automatica: 3
            }
        },
        {
            text: "Verific dacă lipsesc informații sau cercetări",
            scores: {
                biologie: 5,
                biochimie: 5,
                chimie: 4,
                fizica: 4,
                medicina: 3,
                stiintaMediului: 3
            }
        },
        {
            text: "Reorganizez planul și resursele",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                contabilitate: 4,
                administratiePublica: 3,
                turism: 3
            }
        },
        {
            text: "Discut cu membrii echipei și rezolv conflictele",
            scores: {
                psihologie: 5,
                resurseUmane: 5,
                sociologie: 4,
                asistentaSociala: 4,
                drept: 3,
                comunicarePR: 3
            }
        },
        {
            text: "Propun o soluție complet diferită",
            scores: {
                design: 5,
                publicitate: 5,
                artePlastice: 4,
                cinematografie: 4,
                fotografieVideo: 4,
                arhitecturaInterior: 3
            }
        }
    ]
},

   {
    question: "Dacă ai putea face un stagiu pentru o săptămână, ce ai alege?",
    answers: [
        {
            text: "O companie de tehnologie",
            scores: {
                informatica: 5,
                calculatoare: 5,
                informaticaAplicata: 4,
                inteligentaArtificiala: 4,
                automatica: 3,
                securitateCibernetica: 3
            }
        },
        {
            text: "Un spital sau laborator",
            scores: {
                medicina: 5,
                medicinaDentara: 4,
                farmacie: 4,
                biologie: 4,
                biochimie: 4,
                asistentaMedicala: 3
            }
        },
        {
            text: "O bancă sau companie internațională",
            scores: {
                economie: 5,
                finanteBanci: 5,
                afaceriInternationale: 5,
                administrareaAfacerilor: 4,
                contabilitate: 3,
                management: 3
            }
        },
        {
            text: "O instanță, instituție publică sau organizație socială",
            scores: {
                drept: 5,
                administratiePublica: 5,
                stiintePolitice: 4,
                asistentaSociala: 4,
                sociologie: 3,
                relatiiInternationale: 3
            }
        },
        {
            text: "Un studio de design, televiziune sau agenție creativă",
            scores: {
                design: 5,
                cinematografie: 5,
                fotografieVideo: 5,
                publicitate: 4,
                comunicarePR: 4,
                jurnalism: 3
            }
        }
    ]
},
   {
    question: "Ai de prezentat o idee importantă. Cum te pregătești?",
    answers: [
        {
            text: "Construiesc argumente logice și folosesc date",
            scores: {
                informatica: 5,
                matematica: 4,
                economie: 4,
                drept: 4,
                dataScience: 4,
                statistica: 3
            }
        },
        {
            text: "Verific atent toate informațiile și dovezile",
            scores: {
                medicina: 5,
                biologie: 5,
                biochimie: 4,
                chimie: 4,
                fizica: 3,
                stiintaMediului: 3
            }
        },
        {
            text: "Mă concentrez pe beneficii și rezultate",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                marketing: 4,
                finanteBanci: 3,
                afaceriInternationale: 3
            }
        },
        {
            text: "Mă gândesc cum va reacționa publicul",
            scores: {
                comunicarePR: 5,
                jurnalism: 5,
                publicitate: 4,
                psihologie: 4,
                marketing: 4,
                relatiiInternationale: 3
            }
        },
        {
            text: "Creez o prezentare vizuală și originală",
            scores: {
                design: 5,
                fotografieVideo: 5,
                cinematografie: 5,
                artePlastice: 4,
                publicitate: 4,
                arhitecturaInterior: 3
            }
        }
    ]
},

   {
    question: "Dacă ai putea avea orice rol într-un proiect important, ce ai alege?",
    answers: [
        {
            text: "Să dezvolt soluția tehnică",
            scores: {
                informatica: 5,
                calculatoare: 5,
                inteligentaArtificiala: 5,
                automatica: 4,
                robotica: 4,
                mecatronica: 3
            }
        },
        {
            text: "Să cercetez și să analizez informațiile",
            scores: {
                biologie: 5,
                biochimie: 5,
                fizica: 4,
                chimie: 4,
                medicina: 4,
                stiintaMediului: 3
            }
        },
        {
            text: "Să coordonez proiectul și oamenii",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                resurseUmane: 4,
                administratiePublica: 4,
                afaceriInternationale: 3
            }
        },
        {
            text: "Să reprezint și să apăr interesele oamenilor",
            scores: {
                drept: 5,
                stiintePolitice: 5,
                relatiiInternationale: 4,
                administratiePublica: 4,
                comunicarePR: 3,
                sociologie: 3
            }
        },
        {
            text: "Să mă ocup de partea creativă",
            scores: {
                design: 5,
                artePlastice: 5,
                cinematografie: 5,
                fotografieVideo: 4,
                publicitate: 4,
                arhitecturaInterior: 4
            }
        }
    ]
},

    // CAPITOLUL 7
// Sport, agricultură și științele naturii

    {
    question: "Ce tip de activitate ți-ar plăcea cel mai mult să faci în mod constant?",
    answers: [
        {
            text: "Să mă antrenez și să îmi depășesc limitele fizice",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 3
            }
        },
        {
            text: "Să lucrez cu plante, culturi și terenuri agricole",
            scores: {
                agricultura: 5,
                horticultura: 5,
                agronomie: 5,
                inginerieMediului: 3,
                peisagistica: 3
            }
        },
        {
            text: "Să lucrez cu animale și să mă ocup de creșterea lor",
            scores: {
                zootehnie: 5,
                biologie: 4,
                medicinaVeterinara: 5,
                agricultura: 3
            }
        },
        {
            text: "Să explorez natura, mediul și diferite locuri",
            scores: {
                geografie: 5,
                geografiaTurismului: 5,
                silvicultura: 4,
                stiintaMediului: 4,
                geologie: 3
            }
        },
        {
            text: "Să proiectez și să amenajez spații verzi sau peisaje",
            scores: {
                peisagistica: 5,
                arhitectura: 4,
                arhitecturaInterior: 4,
                design: 4,
                horticultura: 3
            }
        }
    ]
},

    {
    question: "În ce tip de mediu ți-ar plăcea cel mai mult să îți desfășori activitatea?",
    answers: [
        {
            text: "Pe teren, în aer liber și în mijlocul naturii",
            scores: {
                silvicultura: 5,
                stiintaMediului: 5,
                geologia: 4,
                agricultura: 4,
                geografiaTurismului: 3
            }
        },
        {
            text: "În ferme, sere sau pe terenuri agricole",
            scores: {
                agricultura: 5,
                horticultura: 5,
                zootehnie: 4,
                peisagistica: 3,
                inginerieAlimentara: 3
            }
        },
        {
            text: "Într-un mediu în care lucrez cu animale",
            scores: {
                zootehnie: 5,
                biologie: 5,
                agricultura: 3,
                stiintaMediului: 3
            }
        },
        {
            text: "Într-un mediu activ, unde mă pot mișca și lucra cu oamenii",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                turism: 3,
                geografiaTurismului: 3
            }
        },
        {
            text: "Într-un spațiu în care pot proiecta și amenaja locuri",
            scores: {
                peisagistica: 5,
                arhitectura: 4,
                design: 4,
                arhitecturaInterior: 4,
                horticultura: 3
            }
        }
    ]
},

    {
    question: "Ce rezultat ți-ar aduce cea mai mare satisfacție?",
    answers: [
        {
            text: "Să văd că am obținut o recoltă bună și am îmbunătățit o cultură",
            scores: {
                agricultura: 5,
                horticultura: 5,
                inginerieAlimentara: 3,
                peisagistica: 3
            }
        },
        {
            text: "Să contribui la protejarea pădurilor și a naturii",
            scores: {
                silvicultura: 5,
                stiintaMediului: 5,
                biologie: 4,
                geologie: 3,
                peisagistica: 3
            }
        },
        {
            text: "Să văd animale sănătoase și bine îngrijite",
            scores: {
                zootehnie: 5,
                biologie: 5,
                agricultura: 3,
                nutritieDietetica: 2
            }
        },
        {
            text: "Să văd că o persoană sau o echipă își îmbunătățește performanțele",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                psihologie: 3,
                pedagogie: 2
            }
        },
        {
            text: "Să creez un spațiu verde frumos și funcțional",
            scores: {
                peisagistica: 5,
                horticultura: 5,
                design: 4,
                arhitectura: 3,
                arhitecturaInterior: 2
            }
        }
    ]
},

    {
    question: "Ce tip de activitate practică te-ar atrage cel mai mult?",
    answers: [
        {
            text: "Să lucrez cu plante și să învăț cum pot fi cultivate mai eficient",
            scores: {
                agricultura: 5,
                horticultura: 5,
                peisagistica: 4,
                inginerieAlimentara: 3
            }
        },
        {
            text: "Să mă ocup de păduri, animale sălbatice și protejarea naturii",
            scores: {
                silvicultura: 5,
                biologie: 5,
                stiintaMediului: 5,
                geologie: 3
            }
        },
        {
            text: "Să lucrez cu animale și să înțeleg nevoile lor",
            scores: {
                zootehnie: 5,
                biologie: 5,
                agricultura: 3,
                stiintaMediului: 2
            }
        },
        {
            text: "Să antrenez, să pregătesc sau să ajut oameni să își îmbunătățească forma fizică",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 5,
                psihologie: 2
            }
        },
        {
            text: "Să lucrez pe teren și să studiez mediul, relieful și diferite zone",
            scores: {
                geologie: 5,
                geografiaTurismului: 5,
                stiintaMediului: 4,
                silvicultura: 3
            }
        }
    ]
},

    {
    question: "Ce tip de activitate ți s-ar părea cel mai interesantă?",
    answers: [
        {
            text: "Să îmi folosesc corpul, să mă antrenez și să îmi depășesc limitele",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 3
            }
        },
        {
            text: "Să experimentez metode noi pentru plante și culturi",
            scores: {
                agricultura: 5,
                horticultura: 5,
                inginerieAlimentara: 4,
                peisagistica: 3
            }
        },
        {
            text: "Să studiez animalele și modul în care pot fi îngrijite",
            scores: {
                zootehnie: 5,
                biologie: 5,
                agricultura: 3,
                stiintaMediului: 3
            }
        },
        {
            text: "Să cercetez natura, relieful și schimbările din mediul înconjurător",
            scores: {
                geologie: 5,
                stiintaMediului: 5,
                biologie: 4,
                silvicultura: 4,
                geografiaTurismului: 3
            }
        },
        {
            text: "Să planific și să amenajez spații verzi și zone naturale",
            scores: {
                peisagistica: 5,
                horticultura: 5,
                arhitectura: 3,
                design: 3,
                silvicultura: 3
            }
        }
    ]
},

    {
    question: "Cum ai prefera să vezi rezultatul muncii tale?",
    answers: [
        {
            text: "Să văd că o persoană sau o echipă a devenit mai bună datorită pregătirii mele",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                psihologie: 3,
                pedagogie: 2
            }
        },
        {
            text: "Să văd că am obținut rezultate bune într-o cultură sau într-o activitate agricolă",
            scores: {
                agricultura: 5,
                horticultura: 5,
                agronomie: 5,
                inginerieAlimentara: 3,
                peisagistica: 2
            }
        },
        {
            text: "Să văd că am contribuit la protejarea naturii și a mediului",
            scores: {
                silvicultura: 5,
                stiintaMediului: 5,
                biologie: 4,
                geologie: 3,
                ingineriaMediului: 3
            }
        },
        {
            text: "Să văd animale sănătoase și bine îngrijite",
            scores: {
                zootehnie: 5,
                biologie: 5,
                agricultura: 3,
                stiintaMediului: 2
            }
        },
        {
            text: "Să văd că am creat un spațiu natural sau un peisaj apreciat de oameni",
            scores: {
                peisagistica: 5,
                horticultura: 5,
                design: 4,
                arhitectura: 3,
                arhitecturaInterior: 2
            }
        }
    ]
},

let currentQuestion = 0;
const scores = {
    // INFORMATICĂ ȘI TEHNOLOGIE
    informatica: 0,
    informaticaAplicata: 0,
    informaticaIndustriala: 0,
    inteligentaArtificiala: 0,
    calculatoare: 0,
    automatica: 0,
    securitateCibernetica: 0,
    informaticaEconomica: 0,
    dataScience: 0,

    // MATEMATICĂ ȘI ȘTIINȚE EXACTE
    matematica: 0,
    matematicaInformatica: 0,
    statistica: 0,
    fizica: 0,
    chimie: 0,

    // INGINERIE
    inginerieMecanica: 0,
    mecatronica: 0,
    robotica: 0,
    inginerieElectrica: 0,
    energetica: 0,
    electronicaTelecomunicatii: 0,
    inginerieMedicala: 0,
    inginerieAerospatiala: 0,
    autovehiculeRutiere: 0,
    inginerieIndustriala: 0,
    ingineriaMaterialelor: 0,
    inginerieChimica: 0,
    ingineriaMediului: 0,
    constructii: 0,
    instalatiiConstructii: 0,
    geodezie: 0,

    // MEDICINĂ ȘI SĂNĂTATE
    medicina: 0,
    medicinaDentara: 0,
    farmacie: 0,
    asistentaMedicala: 0,
    nutritieDietetica: 0,
    kinetoterapie: 0,

    // BIOLOGIE ȘI ȘTIINȚELE NATURII
    biologie: 0,
    biochimie: 0,
    biotehnologii: 0,
    geologie: 0,
    stiintaMediului: 0,

    // ECONOMIE ȘI AFACERI
    economie: 0,
    afaceriInternationale: 0,
    finanteBanci: 0,
    contabilitate: 0,
    management: 0,
    marketing: 0,
    administrareaAfacerilor: 0,
    ciberneticaEconomica: 0,

    // DREPT ȘI ADMINISTRAȚIE
    drept: 0,
    administratiePublica: 0,
    stiintePolitice: 0,
    relatiiInternationale: 0,

    // PSIHOLOGIE ȘI ȘTIINȚE SOCIALE
    psihologie: 0,
    sociologie: 0,
    resurseUmane: 0,
    asistentaSociala: 0,

    // EDUCAȚIE
    pedagogie: 0,
    invatamantPrimar: 0,
    educatieTimpurie: 0,

    // COMUNICARE ȘI ȘTIINȚE UMANISTE
    jurnalism: 0,
    comunicarePR: 0,
    publicitate: 0,
    limbiModerneAplicate: 0,
    litere: 0,
    istorie: 0,
    filosofie: 0,

    // ARHITECTURĂ ȘI ARTE
    arhitectura: 0,
    arhitecturaInterior: 0,
    urbanism: 0,
    design: 0,
    artePlastice: 0,
    fotografieVideo: 0,
    cinematografie: 0,
    teatru: 0,
    muzica: 0,

    // AGRICULTURĂ ȘI NATURĂ
    agricultura: 0,
    horticultura: 0,
    silvicultura: 0,
    zootehnie: 0,
    peisagistica: 0,
    inginerieAlimentara: 0,

    // SPORT ȘI TURISM
    educatieFizicaSport: 0,
    sportPerformanta: 0,
    geografiaTurismului: 0,
    turism: 0
};

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

q.answers.forEach((answer, index) => {
    const answerText =
        typeof answer === "string" ? answer : answer.text;

    html += `
        <button onclick="selectAnswer(${index})">
            ${answerText}
        </button>
    `;
});

document.getElementById("answers").innerHTML = html;
}
function selectAnswer(answerIndex) {
    const selectedAnswer =
        questions[currentQuestion].answers[answerIndex];

    if (
        typeof selectedAnswer === "object" &&
        selectedAnswer.scores
    ) {
        for (const profile in selectedAnswer.scores) {
            scores[profile] += selectedAnswer.scores[profile];
        }
    }

    nextQuestion();
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
