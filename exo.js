
/*
//EXO 1 - Script permettant de savoir si une année est bissextile
var annee=prompt("année?");

if ( ((annee%4==0) && (annee%100!=0)) || (annee%400==0)) {
    console.log("l'année "+ annee + " est bissextile");
}
else{
    console.log("l'année "+ annee + " n'est pas bissextile");
}

    //option en TERNAIRE
        ( (annee=prompt("année?")) %4==0&&annee%100!=0) || annee%400==0? console.log("Bis") : console.log("pas bis");
*/
//-----------------------------------------------------------------------------------------------------------
/*
//EXO 2 - nombre premier
var nombre=prompt("nombre?");
if (nombre==0 || nombre==1) {
    console.log("ce n'est pas un nombre premier");
} else {
    for (let index = 2; index <=nombre; index++) {
        if (nombre%index!=0) {
            continue;
        } else {
            if (nombre%index==0 && nombre==index) {
                console.log("c'est un nombre premier");
                break; 
            } else {
                console.log("ce n'est pas un nombre premier");
                break;
            }
        }
    }
}

    //EXO2 - correction
    var nbre = prompt("Saisir nombre");
    var estPremier = true;
    if (nbre == 0 || nbre == 1) {
        alert("pas premier");
    }
    for (let index = 2; index < nbre; index++) {
        if (nbre % index == 0) {
            alert("Pas premier");
            estPremier = false;
        }
    }
    if (estPremier) {
        alert("est premier");
    }
*/
//------------------------------------------------------------------------------------------------------------
/*
//EXO 3 -tableau
    var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanc"] ;
    //1
    let last = semaine.pop();
    //2
    for (indice in semaine) {
        document.write(semaine[indice]+"<br>"); //pour un retour à la ligne
    }

    for (indice in semaine) {
        document.writeln(semaine[indice]); //pour un espace
    }
    //3
    let newLength = semaine.push("dimanche");
    //4
    let pos = semaine.indexOf("mar");
    semaine[pos]="mardi";
    document.write("<br>"+semaine[pos]+"<br>"); //pour un retour à la ligne
    //5
    document.write(semaine.length+"<br>");
    //6
    document.write(semaine[5]+"<br>");

    //EXO 3 - correction allégée
    var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanc"] ;
        semaine.pop();
        document.write(semaine+"<br>"); //pour un retour à la ligne
        semaine.push("dimanche");
        let pos = semaine.indexOf("mar");
        semaine[pos]="mardi";
        document.write("<br>"+semaine[pos]+"<br>"); //pour un retour à la ligne
        //5
        document.write(semaine.length+"<br>");
        //6
        document.write(semaine[5]+"<br>");
        document.write(semaine+"<br>");
*/
//--------------------------------------------------------------------------------------------------------------
/*
//EXO 4 - tableau
var fruits=["banane", "raisin", "pomme"];

for (indice in fruits) {
    document.write(fruits+"<br>"); 
}

var quelFruit=prompt("saisir un nom de fruit");

let pos2 = fruits.indexOf(quelFruit);
    if (pos2==-1) {
        alert("indisponible"); 
    } else {
        alert(fruits[pos2]);
        let removedItem = fruits.splice(pos2, 1);  
    }
    for (indice in fruits) {   
        document.write(fruits[indice]+"<br>"); 
    }
*/
//-------------------------------------------------------------------------------------------------------------
/*
//TP EXO 1 - questions - réponses
var questions=[
    {
        question: 'Est-ce que tu aimes le JavaScript ?',
        reponse : 'Oui'
        },
        {
        question: 'Le JavaScript est une évolution du Java ?',
        reponse : 'Non'
        },
        {
        question: 'Le JavaScript est proche du Java ?',
        reponse : 'Non'
        },
        {
        question: 'Le JavaScript est un langage d objet par prototypage?',
        reponse : 'Oui'
        },
        {
        question: 'Le JavaScript est souvent utilisé coté client ?',
        reponse : 'Oui'
        },
        {
        question: 'Le JavaScript peut être utilisé coté client et serveur?',
        reponse : 'Oui'
        }
];

var note=0; // pour ajout note finale

for (let index = 0; index < questions.length; index++) {
    var demande=prompt(questions[index].question);
    if(demande == null ){       // Gestion de "annuler"
        console.log("Vous avez choisi d'interrompre le test avant la fin.");
        break;
    }
    else if (demande.toLowerCase()==questions[index].reponse.toLowerCase()) {
        console.log("Bonne réponse à la question: "+questions[index].question);
        note++; // pour ajout note finale
    } else {
        console.log("Mauvaise réponse ! La bonne réponse à la question: "+questions[index].question+" était "+ questions[index].reponse);   
    }
}
console.log("Vous avez "+ note+" bonnes réponses sur "+ questions.length); // pour ajout note finale
*/
//--------------------------------------------------------------------------------------------------------------
/*
//TP EXO 2 - moyenne
var etudiant=[["Moussa",14], ["Vanessa",17], ["Jean",8], ["Afpa",5]];
for (let index = 0; index < etudiant.length; index++) {
        if (etudiant[index][1]<10) {
            console.log(etudiant[index][0]+ " n'est pas admis(e).");      
        }
        else
        console.log(etudiant[index][0]+ " est admis(e) avec une moyenne de "+etudiant[index][1]);       
}

    //version for in
    for (let index in etudiant) {
        if ( etudiant[index][1] > 9){ 
            console.log(etudiant[index][0]+" est admis avec une moyenne de "+etudiant[index][1]);
        }
        else{
            console.log(etudiant[index][0]+" n'est pas admis");
        }
    }

    //version for each
    etudiant.forEach(element => {
        if (element[1] > 9) {
            document.write(element[0] + " est admis·e avec une moyenne de " + element[1] +"<br>");
        } else {
            document.write(element[0] + " n'est pas admis·e" +"<br>");
        } 
    });

    //version ternaire
    for (let index in Etudiant) {
        Etudiant[index][1]>9 ? document.write(Etudiant[index][0]+" "+"est admis avec une moyenne de : "+" "+Etudiant[index][1]+"<br>"):document.write(Etudiant[index][0]+" "+"n\'est pas admis avec une moyenne de : "+" "+Etudiant[index][1]+"<br>");
    }
*/   
//-------------------------------------------------------------------------------------------------------------

//TP IMAGES

document.querySelectorAll("#galerie img").forEach(element => {
    element.addEventListener("click", function () {
        document.querySelector("#imageZoomee").src=this.src;
    });
});

