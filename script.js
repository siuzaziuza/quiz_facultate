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
