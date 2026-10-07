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
            text: "Să rezolv probleme și să creez soluții folosind logica, tehnologia sau știința",
            scores: {
                informatica: 5,
                calculatoare: 5,
                matematicaInformatica: 4,
                automatica: 4,
                inteligentaArtificiala: 4,
                inginerie: 3
            }
        },
        {
            text: "Să lucrez direct cu oameni și să îi ajut să își rezolve problemele",
            scores: {
                medicina: 5,
                psihologie: 5,
                drept: 4,
                asistentaMedicala: 4,
                asistentaSociala: 4,
                pedagogie: 3
            }
        },
        {
            text: "Să organizez oameni, proiecte sau activități și să iau decizii",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                afaceriInternationale: 4,
                resurseUmane: 4,
                marketing: 3
            }
        },
        {
            text: "Să am o activitate practică, dinamică, în care să mă mișc și să îmi folosesc abilitățile fizice",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                inginerieMecanica: 3,
                autovehiculeRutiere: 3,
                ordinePublica: 3
            }
        },
        {
            text: "Să lucrez cu natura, animalele, mediul sau să studiez lumea din jurul meu",
            scores: {
                biologie: 5,
                stiintaMediului: 5,
                agricultura: 4,
                medicinaVeterinara: 4,
                geografie: 4,
                silvicultura: 4,
                geologie: 3
            }
        }
    ]
},
   {
    question: "În ce fel de mediu ai prefera să îți desfășori activitatea?",
    answers: [
        {
            text: "Într-un mediu tehnic, unde pot lucra cu calculatoare, aparatură sau sisteme complexe",
            scores: {
                informatica: 5,
                calculatoare: 5,
                informaticaIndustriala: 4,
                automatica: 4,
                electronicaTelecomunicatii: 4,
                inginerieElectrica: 3
            }
        },
        {
            text: "Într-un mediu în care interacționez permanent cu oameni și comunic mult",
            scores: {
                psihologie: 5,
                drept: 5,
                comunicarePR: 4,
                jurnalism: 4,
                resurseUmane: 4,
                marketing: 3
            }
        },
        {
            text: "Într-un mediu organizat, unde coordonez activități și iau decizii",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                administratiePublica: 4,
                afaceriInternationale: 4,
                contabilitate: 3
            }
        },
        {
            text: "Într-un mediu activ, practic, unde nu stau toată ziua la birou",
            scores: {
                educatieFizicaSport: 5,
                sportPerformanta: 5,
                kinetoterapie: 4,
                inginerieMecanica: 4,
                constructii: 3,
                autovehiculeRutiere: 3,
                ordinePublica: 3
            }
        },
        {
            text: "Într-un mediu în aer liber, în laborator sau în contact cu natura și lumea vie",
            scores: {
                biologie: 5,
                chimie: 4,
                stiintaMediului: 5,
                agricultura: 4,
                medicinaVeterinara: 4,
                geologie: 4,
                silvicultura: 4
            }
        }
    ]
},

  {
    question: "Ce fel de rezultat te-ar face să simți că munca ta a meritat?",
    answers: [
        {
            text: "Să creez ceva nou sau să găsesc o soluție la o problemă dificilă",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                calculatoare: 4,
                matematica: 4,
                inginerieMecanica: 4,
                robotica: 4,
                inventica: 3
            }
        },
        {
            text: "Să văd că am ajutat o persoană sau am schimbat ceva în bine pentru cineva",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                drept: 4,
                asistentaSociala: 4,
                pedagogie: 4
            }
        },
        {
            text: "Să văd că un proiect, o afacere sau o echipă funcționează datorită deciziilor mele",
            scores: {
                management: 5,
                economie: 5,
                administrareaAfacerilor: 5,
                afaceriInternationale: 4,
                marketing: 4,
                resurseUmane: 4
            }
        },
        {
            text: "Să văd rezultate concrete, practice, pe care le pot observa imediat",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                constructii: 4,
                autovehiculeRutiere: 5,
                inginerieElectrica: 4,
                sportPerformanta: 4,
                educatieFizicaSport: 3
            }
        },
        {
            text: "Să descopăr, protejez sau îmbunătățesc ceva din natură și lumea vie",
            scores: {
                biologie: 5,
                medicinaVeterinara: 5,
                stiintaMediului: 5,
                agricultura: 4,
                geologie: 4,
                silvicultura: 4,
                horticultura: 3
            }
        }
    ]
},

   {
    question: "Ce tip de provocare te-ar atrage cel mai mult?",
    answers: [
        {
            text: "Să rezolv o problemă complexă folosind logica, analiza și cunoștințele mele",
            scores: {
                informatica: 5,
                matematica: 5,
                matematicaInformatica: 5,
                calculatoare: 4,
                dataScience: 4,
                inteligentaArtificiala: 4
            }
        },
        {
            text: "Să găsesc cea mai bună soluție într-o situație care implică oameni și opinii diferite",
            scores: {
                drept: 5,
                psihologie: 5,
                comunicarePR: 4,
                resurseUmane: 4,
                stiintePolitice: 4,
                relatiiInternationale: 3
            }
        },
        {
            text: "Să coordonez o situație importantă și să îmi asum responsabilitatea pentru rezultat",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                administratiePublica: 4,
                economie: 4,
                studiiMilitare: 4,
                ordinePublica: 4,
                politie: 3
            }
        },
        {
            text: "Să rezolv o problemă practică și să construiesc, repar sau îmbunătățesc ceva",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                robotica: 5,
                inginerieElectrica: 4,
                autovehiculeRutiere: 5,
                constructii: 4,
                inginerieIndustriala: 4
            }
        },
        {
            text: "Să descopăr cum funcționează organismul, natura, animalele sau mediul",
            scores: {
                medicina: 5,
                biologie: 5,
                medicinaVeterinara: 5,
                chimie: 4,
                biochimie: 4,
                stiintaMediului: 4,
                geologie: 3
            }
        }
    ]
},

  {
    question: "Ce fel de activitate ai prefera să îți ocupe cea mai mare parte din timpul de lucru?",
    answers: [
        {
            text: "Să analizez informații, să lucrez cu date și să găsesc soluții",
            scores: {
                informatica: 5,
                dataScience: 5,
                matematica: 5,
                statistica: 5,
                inteligentaArtificiala: 4,
                informaticaEconomica: 4
            }
        },
        {
            text: "Să comunic, să creez idei și să lucrez cu oameni",
            scores: {
                comunicarePR: 5,
                jurnalism: 5,
                marketing: 5,
                publicitate: 4,
                psihologie: 4,
                resurseUmane: 4
            }
        },
        {
            text: "Să organizez, să planific și să coordonez activități",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                administratiePublica: 4,
                afaceriInternationale: 4,
                contabilitate: 3
            }
        },
        {
            text: "Să fac lucruri practice, să mă mișc și să văd rezultate concrete",
            scores: {
                inginerieMecanica: 5,
                autovehiculeRutiere: 5,
                mecatronica: 4,
                constructii: 4,
                sportPerformanta: 4,
                educatieFizicaSport: 4,
                kinetoterapie: 3
            }
        },
        {
            text: "Să cercetez oamenii, sănătatea, animalele, natura sau mediul",
            scores: {
                medicina: 5,
                biologie: 5,
                medicinaVeterinara: 5,
                psihologie: 4,
                stiintaMediului: 4,
                agricultura: 3,
                geologie: 3
            }
        }
    ]
},

   {
    question: "Dacă ai putea alege liber ce fel de impact să ai prin cariera ta, ce ai prefera?",
    answers: [
        {
            text: "Să dezvolt tehnologii, invenții sau soluții care să facă lucrurile mai eficiente",
            scores: {
                informatica: 5,
                inteligentaArtificiala: 5,
                calculatoare: 5,
                automatica: 4,
                robotica: 4,
                inginerieIndustriala: 4,
                electronicaTelecomunicatii: 3
            }
        },
        {
            text: "Să îmbunătățesc viața oamenilor prin ajutor, educație, sănătate sau protejarea drepturilor lor",
            scores: {
                medicina: 5,
                psihologie: 5,
                drept: 5,
                pedagogie: 4,
                asistentaMedicala: 4,
                asistentaSociala: 4,
                educatieTimpurie: 3
            }
        },
        {
            text: "Să construiesc proiecte de succes, să dezvolt afaceri sau să conduc echipe",
            scores: {
                management: 5,
                economie: 5,
                administrareaAfacerilor: 5,
                afaceriInternationale: 4,
                marketing: 4,
                antreprenoriat: 4
            }
        },
        {
            text: "Să obțin performanță, să lucrez practic sau să contribui la siguranța și funcționarea societății",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                kinetoterapie: 4,
                studiiMilitare: 4,
                politie: 4,
                ordinePublica: 4,
                transporturi: 3
            }
        },
        {
            text: "Să protejez natura, animalele și resursele planetei",
            scores: {
                biologie: 5,
                medicinaVeterinara: 5,
                stiintaMediului: 5,
                agricultura: 4,
                silvicultura: 5,
                geologie: 4,
                horticultura: 3
            }
        }
    ]
},

    // CAPITOLUL 8
// Teologie, militar, ordine publică și transporturi

{
    question: "Ce fel de rol ți s-ar potrivi cel mai bine într-o echipă?",
    answers: [
        {
            text: "Persoana care analizează situația, găsește soluții și propune cea mai bună strategie",
            scores: {
                informatica: 5,
                matematica: 4,
                inteligentaArtificiala: 4,
                calculatoare: 4,
                economie: 3,
                strategie: 3
            }
        },
        {
            text: "Persoana care îi motivează pe ceilalți și îi ajută să își atingă obiectivele",
            scores: {
                psihologie: 5,
                management: 4,
                pedagogie: 4,
                educatieFizicaSport: 4,
                sportPerformanta: 4,
                resurseUmane: 4
            }
        },
        {
            text: "Persoana care își asumă responsabilitatea și poate lua decizii în situații dificile",
            scores: {
                drept: 4,
                administratiePublica: 4,
                studiiMilitare: 5,
                ordinePublica: 5,
                politie: 4,
                aparareSecuritate: 5
            }
        },
        {
            text: "Persoana care organizează activitățile și se asigură că totul funcționează corect",
            scores: {
                management: 5,
                transporturi: 4,
                administratiePublica: 4,
                inginerieIndustriala: 4,
                economie: 4,
                afaceriInternationale: 3
            }
        },
        {
            text: "Persoana care preferă acțiunea, mișcarea și obținerea unor rezultate concrete",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                kinetoterapie: 4,
                inginerieMecanica: 4,
                autovehiculeRutiere: 4,
                aviatie: 3,
                marina: 3
            }
        }
    ]
},

   {
    question: "Ce te-ar face să simți că ai ales cariera potrivită?",
    answers: [
        {
            text: "Să pot învăța permanent lucruri noi și să îmi folosesc inteligența pentru a rezolva probleme",
            scores: {
                informatica: 5,
                matematica: 5,
                calculatoare: 4,
                inteligentaArtificiala: 4,
                fizica: 3,
                cercetare: 3
            }
        },
        {
            text: "Să simt că munca mea are un efect direct asupra oamenilor",
            scores: {
                medicina: 5,
                psihologie: 5,
                drept: 4,
                asistentaMedicala: 4,
                pedagogie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Să am libertatea de a crea, comunica și veni cu idei proprii",
            scores: {
                marketing: 5,
                publicitate: 5,
                comunicarePR: 5,
                jurnalism: 4,
                design: 4,
                arhitectura: 3
            }
        },
        {
            text: "Să am obiective clare, disciplină și să pot demonstra prin rezultate cât de bun sunt",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                studiiMilitare: 5,
                ordinePublica: 4,
                politie: 4,
                aparareSecuritate: 4
            }
        },
        {
            text: "Să construiesc, să organizez sau să coordonez lucruri care produc rezultate concrete",
            scores: {
                management: 5,
                inginerieMecanica: 5,
                inginerieIndustriala: 4,
                administrareaAfacerilor: 4,
                transporturi: 4,
                autovehiculeRutiere: 4,
                economie: 3
            }
        }
    ]
},

  {
    question: "Ce fel de provocare te-ar motiva cel mai mult?",
    answers: [
        {
            text: "Să depășesc o problemă dificilă prin logică, strategie și perseverență",
            scores: {
                informatica: 5,
                matematica: 5,
                inteligentaArtificiala: 4,
                calculatoare: 4,
                drept: 3,
                strategie: 3
            }
        },
        {
            text: "Să îmi depășesc limitele și să obțin performanțe din ce în ce mai bune",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                kinetoterapie: 4,
                psihologie: 3,
                management: 3
            }
        },
        {
            text: "Să gestionez o situație dificilă în care trebuie să rămân calm și să iau decizii rapide",
            scores: {
                medicina: 5,
                politie: 5,
                ordinePublica: 5,
                studiiMilitare: 5,
                aparareSecuritate: 4,
                asistentaMedicala: 4
            }
        },
        {
            text: "Să construiesc sau să îmbunătățesc ceva astfel încât să funcționeze mai bine",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                robotica: 4,
                inginerieElectrica: 4,
                autovehiculeRutiere: 5,
                inginerieIndustriala: 4
            }
        },
        {
            text: "Să coordonez oameni și resurse pentru a transforma o idee într-un rezultat concret",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                afaceriInternationale: 4,
                transporturi: 4,
                marketing: 3
            }
        }
    ]
},

  {
    question: "Ce fel de program de lucru ți s-ar potrivi cel mai bine?",
    answers: [
        {
            text: "Un program în care să pot lucra concentrat, să analizez și să rezolv probleme",
            scores: {
                informatica: 5,
                matematica: 4,
                calculatoare: 4,
                dataScience: 4,
                informaticaEconomica: 4,
                contabilitate: 3
            }
        },
        {
            text: "Un program dinamic, în care să fiu mereu activ și să nu fac același lucru în fiecare zi",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                kinetoterapie: 4,
                politie: 4,
                ordinePublica: 4,
                aviatie: 3,
                marina: 3
            }
        },
        {
            text: "Un program în care să interacționez mult cu oamenii și să îi pot ajuta",
            scores: {
                medicina: 5,
                psihologie: 5,
                drept: 4,
                asistentaMedicala: 4,
                pedagogie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Un program în care să organizez, coordonez și să iau decizii",
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
            text: "Un program în care să lucrez practic, cu echipamente, mașini, sisteme sau proiecte concrete",
            scores: {
                inginerieMecanica: 5,
                mecatronica: 5,
                autovehiculeRutiere: 5,
                robotica: 4,
                inginerieElectrica: 4,
                transporturi: 4,
                aviatie: 3,
                marina: 3
            }
        }
    ]
},

  {
    question: "Ce calitate ai vrea să fie cea mai importantă în viitoarea ta profesie?",
    answers: [
        {
            text: "Inteligența și capacitatea de a înțelege lucruri complexe",
            scores: {
                informatica: 5,
                matematica: 5,
                calculatoare: 4,
                fizica: 4,
                inteligentaArtificiala: 5,
                dataScience: 4
            }
        },
        {
            text: "Empatia și capacitatea de a înțelege și ajuta oamenii",
            scores: {
                psihologie: 5,
                medicina: 5,
                asistentaMedicala: 5,
                pedagogie: 4,
                drept: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Creativitatea și capacitatea de a veni mereu cu idei noi",
            scores: {
                design: 5,
                arhitectura: 5,
                marketing: 5,
                publicitate: 5,
                comunicarePR: 4,
                jurnalism: 4
            }
        },
        {
            text: "Disciplina, rezistența și dorința de a-mi depăși limitele",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                studiiMilitare: 5,
                ordinePublica: 4,
                politie: 4,
                aparareSecuritate: 4,
                kinetoterapie: 3
            }
        },
        {
            text: "Organizarea și capacitatea de a transforma ideile în rezultate",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                inginerieIndustriala: 4,
                transporturi: 4,
                afaceriInternationale: 4
            }
        }
    ]
},

  {
    question: "Ce te-ar face să fii cel mai mândru de cariera ta?",
    answers: [
        {
            text: "Să creez ceva inovator care să rezolve probleme și să fie util pentru mulți oameni",
            scores: {
                informatica: 5,
                calculatoare: 5,
                inteligentaArtificiala: 5,
                automatica: 4,
                robotica: 4,
                inginerieIndustriala: 4,
                electronicaTelecomunicatii: 3
            }
        },
        {
            text: "Să știu că prin munca mea am ajutat oameni și le-am făcut viața mai bună",
            scores: {
                medicina: 5,
                psihologie: 5,
                asistentaMedicala: 5,
                drept: 4,
                pedagogie: 4,
                asistentaSociala: 4
            }
        },
        {
            text: "Să îmi depășesc constant limitele și să ajung foarte bun într-un domeniu competitiv",
            scores: {
                sportPerformanta: 5,
                educatieFizicaSport: 5,
                kinetoterapie: 4,
                studiiMilitare: 4,
                politie: 3,
                ordinePublica: 3
            }
        },
        {
            text: "Să construiesc ceva important, să conduc proiecte și să văd rezultate concrete",
            scores: {
                management: 5,
                administrareaAfacerilor: 5,
                economie: 4,
                inginerieMecanica: 4,
                constructii: 4,
                autovehiculeRutiere: 4,
                transporturi: 3
            }
        },
        {
            text: "Să contribui la protejarea societății, a oamenilor sau a mediului",
            scores: {
                aparareSecuritate: 5,
                ordinePublica: 5,
                politie: 5,
                studiiMilitare: 4,
                stiintaMediului: 5,
                biologie: 4,
                silvicultura: 4,
                agricultura: 3
            }
        }
    ]
},
    ];

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
agronomie: 0,
horticultura: 0,
silvicultura: 0,
zootehnie: 0,
medicinaVeterinara: 0,
peisagistica: 0,
inginerieAlimentara: 0,
geografie: 0,

    // SPORT ȘI TURISM
    educatieFizicaSport: 0,
    sportPerformanta: 0,
    geografiaTurismului: 0,
    turism: 0,

    // TEOLOGIE, MILITAR, ORDINE PUBLICĂ ȘI TRANSPORTURI
teologie: 0,
studiiMilitare: 0,
aparareSecuritate: 0,
ordinePublica: 0,
politie: 0,
transporturi: 0,
aviatie: 0,
marina: 0

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

        const profileNames = {
            informatica: "Informatică",
            informaticaAplicata: "Informatică Aplicată",
            informaticaIndustriala: "Informatică Industrială",
            inteligentaArtificiala: "Inteligență Artificială",
            calculatoare: "Calculatoare",
            automatica: "Automatică",
            securitateCibernetica: "Securitate Cibernetică",
            informaticaEconomica: "Informatică Economică",
            dataScience: "Data Science",

            matematica: "Matematică",
            matematicaInformatica: "Matematică-Informatică",
            statistica: "Statistică",
            fizica: "Fizică",
            chimie: "Chimie",

            inginerieMecanica: "Inginerie Mecanică",
            mecatronica: "Mecatronică",
            robotica: "Robotică",
            inginerieElectrica: "Inginerie Electrică",
            energetica: "Energetică",
            electronicaTelecomunicatii: "Electronică și Telecomunicații",
            inginerieMedicala: "Inginerie Medicală",
            inginerieAerospatiala: "Inginerie Aerospațială",
            autovehiculeRutiere: "Autovehicule Rutiere",
            inginerieIndustriala: "Inginerie Industrială",
            ingineriaMaterialelor: "Ingineria Materialelor",
            inginerieChimica: "Inginerie Chimică",
            ingineriaMediului: "Ingineria Mediului",
            constructii: "Construcții",
            instalatiiConstructii: "Instalații pentru Construcții",
            geodezie: "Geodezie",

            medicina: "Medicină",
            medicinaDentara: "Medicină Dentară",
            farmacie: "Farmacie",
            asistentaMedicala: "Asistență Medicală",
            nutritieDietetica: "Nutriție și Dietetică",
            kinetoterapie: "Kinetoterapie",

            biologie: "Biologie",
            biochimie: "Biochimie",
            biotehnologii: "Biotehnologii",
            geologie: "Geologie",
            stiintaMediului: "Știința Mediului",

            economie: "Economie",
            afaceriInternationale: "Afaceri Internaționale",
            finanteBanci: "Finanțe și Bănci",
            contabilitate: "Contabilitate",
            management: "Management",
            marketing: "Marketing",
            administrareaAfacerilor: "Administrarea Afacerilor",
            ciberneticaEconomica: "Cibernetică Economică",

            drept: "Drept",
            administratiePublica: "Administrație Publică",
            stiintePolitice: "Științe Politice",
            relatiiInternationale: "Relații Internaționale",

            psihologie: "Psihologie",
            sociologie: "Sociologie",
            resurseUmane: "Resurse Umane",
            asistentaSociala: "Asistență Socială",

            pedagogie: "Pedagogie",
            invatamantPrimar: "Învățământ Primar",
            educatieTimpurie: "Educație Timpurie",

            jurnalism: "Jurnalism",
            comunicarePR: "Comunicare și PR",
            publicitate: "Publicitate",
            limbiModerneAplicate: "Limbi Moderne Aplicate",
            litere: "Litere",
            istorie: "Istorie",
            filosofie: "Filosofie",

            arhitectura: "Arhitectură",
            arhitecturaInterior: "Arhitectură de Interior",
            urbanism: "Urbanism",
            design: "Design",
            artePlastice: "Arte Plastice",
            fotografieVideo: "Fotografie și Video",
            cinematografie: "Cinematografie",
            teatru: "Teatru",
            muzica: "Muzică",

            agricultura: "Agricultură",
            agronomie: "Agronomie",
            horticultura: "Horticultură",
            silvicultura: "Silvicultură",
            zootehnie: "Zootehnie",
            medicinaVeterinara: "Medicină Veterinară",
            peisagistica: "Peisagistică",
            inginerieAlimentara: "Inginerie Alimentară",
            geografie: "Geografie",

            educatieFizicaSport: "Educație Fizică și Sport",
            sportPerformanta: "Sport de Performanță",
            geografiaTurismului: "Geografia Turismului",
            turism: "Turism",

            teologie: "Teologie",
            studiiMilitare: "Studii Militare",
            aparareSecuritate: "Apărare și Securitate",
            ordinePublica: "Ordine Publică",
            politie: "Poliție",
            transporturi: "Transporturi",
            aviatie: "Aviație",
            marina: "Marină"
        };

        // Calculăm punctajul maxim posibil pentru fiecare profil
        const maxScores = {};

        questions.forEach(question => {

            const questionMax = {};

            question.answers.forEach(answer => {

                if (
                    typeof answer === "object" &&
                    answer.scores
                ) {
                    for (const profile in answer.scores) {

                        const points = answer.scores[profile];

                        if (typeof points === "number") {
                            if (
                                questionMax[profile] === undefined ||
                                points > questionMax[profile]
                            ) {
                                questionMax[profile] = points;
                            }
                        }
                    }
                }
            });

            for (const profile in questionMax) {

                if (maxScores[profile] === undefined) {
                    maxScores[profile] = 0;
                }

                maxScores[profile] += questionMax[profile];
            }
        });

        // Construim rezultatele
        const results = [];

        for (const profile in scores) {

            if (
                profileNames[profile] &&
                maxScores[profile] > 0 &&
                Number.isFinite(scores[profile])
            ) {

                const percentage = scores[profile];

                results.push({
                    name: profileNames[profile],
                    score: scores[profile],
                    percentage: Math.min(100, percentage)
                });
            }
        }

        // Transformăm punctajele în procente
const highestScore = Math.max(
    ...results.map(result => result.score)
);

results.forEach(result => {
    result.percentage = Math.round(
        (result.score / highestScore) * 100
    );
});

        // Sortăm de la cel mai mare procent la cel mai mic
        results.sort((a, b) => {
            if (b.percentage !== a.percentage) {
                return b.percentage - a.percentage;
            }

            return b.score - a.score;
        });

        // Luăm primele 5 facultăți
        const top5 = results.slice(0, 5);

        let resultHTML = `
            <h2>🎉 Rezultatele tale</h2>

            <p>
                Pe baza răspunsurilor tale, acestea sunt cele mai potrivite
                facultăți pentru tine:
            </p>
        `;

        top5.forEach((result, index) => {

            resultHTML += `
                <div class="result-item">
                    <h3>${index + 1}. ${result.name}</h3>

                    <p>
                        Compatibilitate:
                        <strong>${result.percentage}%</strong>
                    </p>

                    <p>
                        Punctaj: ${result.score}
                    </p>
                </div>
            `;
        });

        resultHTML += `
            <p style="margin-top: 25px;">
                Rezultatele sunt orientative și se bazează pe răspunsurile
                oferite în cadrul testului.
            </p>
        `;

        document.getElementById("results").innerHTML = resultHTML;
    }
}
