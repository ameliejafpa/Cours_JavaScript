
/*
//LES COMMANDES
    // console.log() : Créer un message dans la console
    console.log("hello");

    // alert() : Ouvre une fenetre pop-up d'alerte, ok pour la fermer
    alert("je suis alert");

    // confirm() : ouvre une fenetre pop-up de confirmation (ok / annuler) -> renvoie un booléen (true/false)
    confirm("ça va bien?");

    // prompt : demande à l'utilisateur d'entrer une donnée
    prompt("saisir prénom");

    // pour garder les données saisies dans prompt, définir une variable = prompt
    age=prompt("saisir âge");
    console.log(age); //ici va apparaître dans la console

    //les calculs peuvent se faire n'importe où
    console.log(5*3); //ici va apparaître dans la console
*/
//-------------------------------------------------------------------------------------------------------------

/*
//LES VARIABLES 
    //le type de valeur n'a pas à être spécifié.
    //indiquer var devant la variable (best practice)
    var chiffre;
    console.log(chiffre);
    chiffre =10;
    console.log(chiffre);

    //La portée des variables
        var x = 4; // la variable est globale
        
        function locale(){
            var x=7;    //la variable est locale dans la fonction locale
            return x;
        }

        console.log("x locale : " + locale() + ", x globale : " + x );

    //Les constantes -> mot clef const
        const Y=12;
        console.log(Y);
        Y=21;
        console.log(Y); // console renvoie une erreur car Y est une constante

    //Concatener
        chaineA = "Bonjour";
        chaineB = " tout le monde";
        chaine1 = chaineA+chaineB;
        console.log(chaine1);

        chaine2 = chaineA.concat(chaineB);
        console.log(chaine2);
*/
//------------------------------------------------------------------------------------------------------------

/*
// IF
    var nombre = prompt("quel age?");
    if (nombre>=18){
        console.log("Vous etes majeur");
    }
    else{
        console.log("Vous etes mineur");
    }

//SWITCH ---- /!\ chaque case ne peut prendre qu'une valeur
    (variable) {
        case valeur 1:
            intructions;
            break;
        case valeur n:
            intructions;
            break;
        default:
            instructions;
    }
    var couleur = prompt("couleur?")
    switch (couleur){
        case "jaune":
            alert("jaune");
            break;
        case "rouge":
            alert("rouge");
            break;
        default:
            alert("n'est pas dans la liste");
    }

//TERNAIRE
    process = condition? "OK" : "FAILED";
    équivaut au if
    if (condition=true){
        "ok";
    }
    else{
        "failed";
    }
*/
//------------------------------------------------------------------------------------------------------------

/*
//LES BOUCLES

    // Boucle while
        var index=0;
        while (index<3) {
            index++; //incrémentation
            console.log("j'aime le JS");
        }
    
    //Boucle for

    // Boucle do while
        var index=5;
        do {
            index--; // décrémentation
            console.log("j'aime toujours le JS");
        } while (index>0);
*/
//-------------------------------------------------------------------------------------------------------------

/*
//Document.write permet d'écrire directement dans la page
    document.write("document.write : salut");
*/
//-------------------------------------------------------------------------------------------------------------

/*
//LES TABLEAUX  /!\ commence toujours par indice 0
    var fruits= ["bananes", "oranges", "pommes","poires"];
    console.log(fruits[2]);
    console.log(fruits.length); //uiliser .LENGTH pour prendre tout le tableaux (dans une boucle par exemple)

    //tableaux multi dimensionnel
        var etudiant=[
            ["moussa", 9],
            ["homer", 11],
            ["jean", 17],
            ["robert", 14],
        ]
        console.log(etudiant [1][0]); // premier [] pour la colonne, deuxieme [] pour la ligne

        //prendre toutes les données du tzbleau multidim
            for (let index = 0; index < etudiant.length; index++) {
                console.log (etudiant[index]);
                for (let j = 0; j < etudiant[index].length; j++) {
                    console.log (etudiant[index][j]);       
                }    
            }
        //idem mais en forEach => plus pratique que for pour les tableaux
            etudiant.forEach(element => {  //element est un nom générique, pon peut lui donner le nom qu'on veut, idem pour el
                console.log(element);
                element.forEach(el => {
                    console.log(el);
                });
            });
    
    // FOR IN => pour parcourir un tableau sans passer par length
        var tab=[5,8,10,15,19];
        for (indice in tab) {
            console.log(indice);
            console.log(tab [indice]);
        }
*/
//-------------------------------------------------------------------------------------------------------------
/*
//LES OBJETS PREDEFINIS
        var txt="hello World";
        console.log(txt.length+"\n");
        console.log(txt.toUpperCase());
        console.log(Math.PI);
        console.log(Math.round(Math.PI));
*/
//-------------------------------------------------------------------------------------------------------------
/*
//LES FONCTIONS
    // tant que je n'appelle pas la fonction elle ne sera jamais exécutée

//fonctions predéfinies :    
var maVariable = 15;
console.log(typeof(maVariable)); 
console.log(isNaN(maVariable)); //savoir si ce n'est pas un nombre

//fonction sans parametre
    //déclaration de la fonction
    function afpa() {
        alert("bientot la pause");
    }
    //appel de la fonction
    afpa();

//fonction avec paramètre (ici nom), on peut mettre plusieurs parametres
function cda(name) {
    var reponse= "bonjour "+name;
    return reponse;
}
console.log(cda("Amélie"));

//fonction avec parametre infini
function addition(...params) {
    return params;
}
console.log(addition(5));
console.log(addition(5,25));
console.log(addition(5,25,55));

    //cette fois ci pour vraiment faire une addition
    function somme(...params) {
        var resultat=0;
        params.forEach(element => {
            resultat += element;
        });
        return resultat;
    }
    console.log(somme(5,25,55));

//fonction anonyme
var a=function() {
    console.log("je suis la fonction anonyme");
}
a();
console.log(typeof(a)); // la variable a est devenue une fonction

    //autre façon d'écrire une fonction anonyme où elle s'auto-appelle
    (function() {
        console.log("je suis une autre fonction anonyme");
    })(); // l'auto appel est ici ()
*/
//----------------------------------------------------------------------------
/*
//LES CLOSURES -> pour proteger le code

    //fonction pas sécurisée, la variable i pourra etre modifiée dans le code html
    var i=0;
    function compteur() {
            console.log("je suis cliqué " + i + " fois");
            return i++; 
    }

    //on crée une fonction anonyme pour que i ne puisse pas être modifiée
    function compteur2() {
        var i=0;
        return function() {
            console.log("je suis cliqué " + i + " fois");
            return i++;
        };  
    }
    var securite=compteur2();
*/
//------------------------------------------------------------------------------
/*
//MOT CLE : LET
    if(4<5){
        let nombre=5;
        var nombre=5;
        console.log(nombre);
    }
    console.log(nombre);
*/
//---------------------------------------------------------------------------------

//LE DOM - DOCUMENT OBJET MODEL
/*
    //getElementById() / ClassName / TagName
    console.log(
        document.getElementById("cda") //chercher par rapport à l'id
    );
    console.log(
        document.getElementsByClassName("afpa") //chercher par rapport à la classe - les met toujours dans un tableau
    );
    console.log(
        document.getElementsByTagName("p") //chercher par rapport au type - les met toujours dans un tableau
    );
    console.log(
        document.getElementById("cda").innerHTML //avoir uniquement le contenu (ici le texte sans l'indication de la balise div id "cda")
    );

        // +court => querySelector / querySelectorAll
        console.log(
            document.querySelector("#cda")
        );
        console.log(
            document.querySelector(".afpa")
        );
        console.log(
            document.querySelector("p")
        );
        console.log(
            document.querySelectorAll(".afpa")
        );
    
    //ajouter / enlever une classe
    document.querySelector("#cda2").classList.add("nouvelle");
    console.log(
        document.querySelector(".nouvelle")
    );

    //Ajouter du style => style.
    document.querySelector("p").style.background="yellow";
*/
//Fonction sur un formulaire
/*
function verif() {
    event.preventDefault();
    console.log("je suis le form"); //je vérifie si la fonction est appliquée
    
    if (document.getElementById("nom").value == "") {
        alert("merci de completer votre nom");
    }
    console.log(document.getElementById("nom").value);
}
*/
//------------------------------------------------------------------------
/*
//LES EXPRESSIONS REGULIERES (REGEX)
    //renvoie true ou false
    //fonction du résultat 
    function regex(reg, id) {
        if (!reg.test(document.getElementById(id).value)) {
            alert("mauvaise saisie du "+id);
            //document.getElementById(id).style.background="red";
            return false;
        }
        else{
            console.log(id+" correct");
            //document.getElementById(id).style.backgroundColor ="green";
            return true;
        }
    }
    function verif(event) {
        event.preventDefault();
        //verif nom et prénom
        var regextexte =/^([\D]{2,50})+$/;
        regex(regextexte, "nom");
        regex(regextexte, "prenom");
        //vérif tel
        var regextel = /^([\d]{10})+$/;
        regex(regextel, "tel");
        //verif email
    var regexemail= /^([\w\-/\./])+([\@/]{1})+([\w\-/\./])+([\./{1}])+([\D]{2,3})$/;
    regex(regexemail, "email");
    }
*/
//-----------------------------------------------------------------
/*
//FONCTION ADD EVENT LISTENER (evenement, fonction à déclencher) -> écouter ce qui est saisi
    // keyup / mouseover
    document.querySelector("#nom").addEventListener("keyup",function () {
        console.log(document.querySelector("#nom").value);
    })

    function bg() {
        document.querySelector("#nom").style.backgroundColor="beige";
    }
    document.querySelector("#nom").addEventListener("mouseover",bg);
    //enlever l'event listener -> probleme : le retire aussitôt -> on l'utilisera avec un timer
    //document.querySelector("#nom").removeEventListener("mouseover",bg);

    document.querySelector("#email").addEventListener("keyup", function() {
    var regexemail2= /^([\w\-/\./])+([\@/]{1})+([\w\-/\./])+([\./{1}])+([\D]{2,3})$/;
        if (!regexemail2.test(document.querySelector("#email").value)) {
            console.log("email incomplet ou incorrect");
            document.querySelector("#email").style.background="red";
            return false;
        } else {
            console.log("email correct");
            document.querySelector("#email").style.backgroundColor ="green";
            return true;
        }
    })

    document.querySelector("#tel").addEventListener("keyup", function() {
        var numTel=(document.querySelector("#tel").value);
        if (isNaN(numTel)) {
            console.log("n° de tel doit être composé de chiffres");
            document.querySelector("#tel").style.background="red";
        } 
        else {
            document.querySelector("#tel").style.backgroundColor ="green";
        }
    })
*/
//---------------------------------------------------------------------

//THIS -> cibler un élément/objet courant
function change() {
    this.style.backgroundColor="blue";    
}
document.querySelectorAll("input").forEach(element => {
    element.addEventListener("mouseover", change);
});

//---------------------------------------------------------------------

//OBJET: EVENT
function showme(event) {
    event.preventDefault();
    var coordonneeX= event.clientX; //client X = position de la souris sur axe X (horizontal)
    var coordonneeY= event.clientY;
    document.getElementById("contenu").innerHTML="coordonneeX: " + coordonneeX + ", coordonneeY: " + coordonneeY ;
}
document.querySelector("body").addEventListener("mouseover", showme);

//--------------------------------------------------------------------

//objet window
function openWindow() {
    window.open("file:///U:/75013-46-06/javaScript/exo.html", "popup", "toolbar=width=500,height=500");
}

//----------------------------------------------------------------------
