// variables générales
var pageUrl = document.location.href; 
if (pageUrl.indexOf("?") == -1) {
    pageName = pageUrl.substring (pageUrl.lastIndexOf( "/" )+1 );
    console.log("Page : " +pageName);
}
var profileMenuStatut = "closed"
var searchFiltersMenuStatut = "shown"





//COOKIES ET CONNEXION

// fonction pour créer un cookie automatiquement
function createCookie(name,value,date) {
    if (date) {
        var date = new Date();
        date.setTime(date.getTime()+(date*24*60*60*1000)); //dans tant de jours
        var expiration = "; expires="+date.toGMTString();
    } else {
        var expiration = "";
    }
    document.cookie = name + "=" + value + expiration + ";path=/";
}




// copié collé d'une fonction pour lire les cookies
function readCookie(nom) {
    var nomEtEgal = nom + '=';
    var cTableau = document.cookie.split(";");
    for (var i=0; i <  cTableau.length; i++) {
        var c = cTableau[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nomEtEgal)==0) {
            return c.substring(nomEtEgal.length, c.length)
            
        }
    }
    return(null);
}

// fonction qui supprime un cookie
function deleteCookie(nom) {
    createCookie(nom, "",-1);
}



function acceptCookies(actionIfOk) {
    if (readCookie("cookies") == "" || readCookie("cookies") == null) {
        if (actionIfOk) {
            alertMessage2("Nous revoilà, nous sommes les cookies !","Veuillez accepter nos cookies pour naviguer sur notre site web",2,"createCookie(\'cookies\',\'allowed\',30);        setTimeout(function() {"+ String(actionIfOk) + "}, 500);" ,"deleteCookie(\'cookies\')")
        } else {
            alertMessage2("Nous revoilà, nous sommes les cookies !","Veuillez accepter nos cookies pour naviguer sur notre site web",2,"createCookie(\'cookies\',\'allowed\',30)","deleteCookie(\'cookies\')")

        }
        return readCookie("cookies")
    } else {
        return readCookie("cookies")

    }
}



if (readCookie("name")!=null && readCookie("name")!="") {
    userName = readCookie("name");
    statut = "authentified";
    console.log("Name cookie detected : \nname = "+userName+"\nstatut = authentified")
} else {
    statut = "unauthentified";
}






function profileName() {
    if (statut == "unauthentified") {
        document.getElementById('profilename').textContent = "se connecter";
    } else if (statut == "authentified") {
        userName = readCookie("userName");
        if (userName.length <= 15) {
            document.getElementById('profilename').textContent = userName;
            
        } else if (userName.length > 15) {
            shortUserName ="";
            for (let i = 0; i <12; i++) {
                shortUserName = shortUserName + userName[i];
            }
            shortUserName = shortUserName + "...";
                console.log("Pseudo Raccourcis : \"" +shortUserName + "\"");
            document.getElementById('profilename').textContent = shortUserName;
        }
      
    } else {
        alert ("Quelque chose n'a pas fonctionné, veuillez nous excuser.");
        console.log("profileName().....error");
    }
    
}



// CONNEXION
function connect(){
    if (readCookie("cookies")=="allowed") {

        if (statut=="unauthentified") {
        var connectionInformations = '<h2 style="padding:5px 0;text-align:left;">Pseudo</h2><input onmouseover="focus();" placeholder="Votre pseudo" onkeyup="isPseudoOk();" id="alert-message-input-pseudo" class="connection-input" ></input><div class="connection-error-message"><p id="connection-error-message-pseudo"style="color:red; text-align:left;font-size: 9pt;font-weight:300"></p></div>'
        connectionInformations = connectionInformations + '<h2 style="padding:5px 0;margin-top:5px;text-align:left;">Prénom</h2><input onmouseover="focus();" placeholder="Votre prénom" onkeyup="isNameOk();" id="alert-message-input-name" class="connection-input" ></input><p class="connection-error-message" id="connection-error-message-name" style="color:red; text-align:left;font-size: 9pt;font-weight:300"></p>';
        connectionInformations = connectionInformations + '<h2 style="padding:5px 0;margin-top:5px;text-align:left;">Nom</h2><input onmouseover="focus();" placeholder="Votre nom" onkeyup="isSurnameOk();" id="alert-message-input-surname" class="connection-input" ></input><p class="connection-error-message" id="connection-error-message-surname" style="color:red; text-align:left;font-size: 9pt;font-weight:300"></p>';
        connectionInformations = connectionInformations + '<h2 style="padding:5px 0;margin-top:5px;text-align:left;">Âge</h2><input onmouseover="focus();" type="number" placeholder="Votre âge" onkeyup="isAgeOk();" id="alert-message-input-age" class="connection-input" ></input><p class="connection-error-message" id="connection-error-message-age" style="color:red; text-align:left;font-size: 9pt;font-weight:300"></p>';
        connectionButtons = '<div style="display:flex;flex-wrap:wrap"><button onclick="closeConnectionMenu();" class="red-button" style="flex:1">Annuler</button><button onclick="validConnection();" style="flex:1;">Valider</button></div>';
        connectionInformations = '<div style="text-align:center;padding:0px 15px 15px 15px;">' + connectionInformations + connectionButtons + '</div>';
        
        document.getElementById("section-connect").innerHTML = '<div id="connection-menu-box" style="background-color: rgba(0, 0, 0, 0.700); position: absolute; height:'+ getPageHeight() +';width: 100%;z-index: 2; top: 0px;"><div id="connection-menu"><div id="alert-title-box" style="padding: 15px"><h2 class="title" style="font-size:18pt;overflow:hidden;">Connexion...</h2></div><div id="alert-description-box" style="padding: 15px; padding-top:0px;"><p style="font-weight: 300;text-align:justify;">Merci de renseigner toutes ces informations.</p></div>' + connectionInformations +'</div></div>'
        }
    } else {
        acceptCookies("connect()")
    }
}


function isPseudoOk(pseudo) {
    if (!pseudo) {
        var pseudo = document.getElementById("alert-message-input-pseudo").value

    }
    console.log(pseudo)
    
    if (pseudo.length == 0) {
        document.getElementById("connection-error-message-pseudo").textContent = "";
        return(false);
    } else if (pseudo.length <= 4) {
        document.getElementById("connection-error-message-pseudo").textContent = "Votre Pseudo est trop court ";
        return(false)
    } else if (pseudo.length >= 5 && pseudo.length <= 15) {
        document.getElementById("connection-error-message-pseudo").textContent = " "
        return(true)
    } else if (pseudo.length > 15) {
        document.getElementById("connection-error-message-pseudo").textContent = "Votre Pseudo est trop long"
        return(false)
    }
}

function isNameOk(name) {
    if (!name) {
        var name = document.getElementById("alert-message-input-name").value

    }
    console.log(name)
    
    if (name.length == 0) {
        document.getElementById("connection-error-message-name").textContent = " ";
        return(false);
    } else if (name.length <= 2) {
        document.getElementById("connection-error-message-name").textContent = "Veuillez rentrer un prénom plus long";
        return(false)
    } else if (name.length >= 3 && name.length <= 30) {
        document.getElementById("connection-error-message-name").textContent = " "
        return(true)
    } else if (name.length > 30) {
        document.getElementById("connection-error-message-name").textContent = "Veuillez rentrer un prénom plus court"
        return(false)
    }
}

function isSurnameOk(surname) {
    if (!surname) {
        var surname = document.getElementById("alert-message-input-surname").value

    }
    console.log(surname)
    
    if (surname.length == 0) {
        document.getElementById("connection-error-message-surname").textContent = "";
        return(false);
    } else if (surname.length <= 2) {
        document.getElementById("connection-error-message-surname").textContent = "Veuillez rentrer un nom plus long";
        return(false)
    } else if (surname.length >= 3 && surname.length <= 30) {
        document.getElementById("connection-error-message-surname").textContent = " "
        return(true)
    } else if (surname.length > 30) {
        document.getElementById("connection-error-message-surname").textContent = "Veuillez rentrer un nom plus court (3 - 30 caractères)"
        return(false)
    }
}

function isAgeOk(age) {
    if (!age) {
        var age = String(document.getElementById("alert-message-input-age").value)

    } else {
        age = String(age)
    }
    console.log(age)
    
    if (age.length == 0) {
        document.getElementById("connection-error-message-age").textContent = "";
        return(false);
    } else if (Number(age) <= 10) {
        document.getElementById("connection-error-message-age").textContent = "Euh.. Vous êtes sacrément jeune pour vous balader sur internet !";
        return(false)
    } else if (Number(age) > 10 && Number(age) <= 115) {
        document.getElementById("connection-error-message-age").textContent = " "
        return(true)
    } else if (Number(age) > 115) {
        document.getElementById("connection-error-message-age").textContent = "Il semble que vous ayez de l'humour ! "
        return(false)
    }
}


function closeConnectionMenu() {
    document.getElementById("connection-menu-box").innerHTML = "";
    document.getElementById("connection-menu-box").style.display = "none";

}


function validConnection() {
    if (isPseudoOk() && isNameOk() && isSurnameOk() && isAgeOk()) {
        var pseudo = document.getElementById("alert-message-input-pseudo").value
        var name = document.getElementById("alert-message-input-name").value
        var surname = document.getElementById("alert-message-input-surname").value
        var age = document.getElementById("alert-message-input-age").value

        createCookie("name",pseudo,365);
        createCookie("userName",name,365);
        createCookie("userSurname",surname,365);
        createCookie("userAge",age,365)
        statut = "authentified";
        console.log("statut...." + statut);
        profileName();
        if ( pageName == "index.html"){
            homeSuggestions();
        }
        closeConnectionMenu();
    } else {
        if (!isPseudoOk()) {
            document.getElementById("connection-error-message-pseudo").textContent = "Pseudo invalide";

        }
        if (!isNameOk()) {
            document.getElementById("connection-error-message-name").textContent = "Prénom invalide";

        }
        if (!isSurnameOk()) {
            document.getElementById("connection-error-message-surname").textContent = "Nom invalide";

        }
        if (!isAgeOk()) {
            document.getElementById("connection-error-message-age").textContent = "Âge invalide";

        }
        
    }
}






function ShowHideProfileButtons(a) {
    if (document.getElementById(a).style.visibility == "visible") {
        // var p = (document.getElementById("profile-menu-box").offsetWidth-10);
        // console.log(p)
        // document.getElementById("profile-menu-box").style.width = p+"px";
        document.getElementById(a).style.visibility = "hidden";
        document.getElementById(a).style.color = "transparent";        
        document.getElementById(a).style.height = "0px";
        
        document.getElementById(a).style.width = "0px";
        document.getElementById(a).style.marginTop = "0px";
        document.getElementById(a).style.marginBottom = "0px";
        // document.getElementById(a).style.position = "absolute";
        // document.getElementById(a).style.backgroundColor = "blue";

        setTimeout(function() {
            // document.getElementById(a).style.display = "none";

        }, 200);
        
        setTimeout(function() {}, 200);



        profileMenuStatut ="closed";
        console.log(a+" is closed")
    } else {
        // document.getElementById(a).style.display = "unset";

        document.getElementById(a).style.color = "unset";        
        document.getElementById(a).style.visibility = "visible";
        document.getElementById(a).style.height = "unset";
        document.getElementById(a).style.marginTop = "5px";
        document.getElementById(a).style.width = "unset";
        document.getElementById(a).style.marginBottom = "5px";

        profileMenuStatut ="opened";
        console.log(a+ " is opened")

    }


    // if (document.getElementById(a).style.display == "inline") {
    //     document.getElementById(a).style.display = "none";
    //     profileMenuStatut ="closed";
    // } else {
    //     document.getElementById(a).style.display = "inline";
    //     profileMenuStatut ="opened";

    // }
}

function profileButtonAction() {
    if (readCookie("cookies") == "" || readCookie("cookies") == undefined) {
        acceptCookies('connect()')
    }
    if (readCookie("cookies") == "allowed") {
        if (statut == "unauthentified") {
            closeAlertMessage();
            connect();
        } else if (statut = "authentified") {
            ShowHideProfileButtons("disconnect-button");
            if (pageName != "compte.html") {
                ShowHideProfileButtons("compte-button");
            }
        }
        profileArrowsDownAndUp();
    }
}
function disconnect() {
    console.log(statut);
    userName= undefined;
    deleteCookie("name");
    deleteCookie("userName");
    deleteCookie("userSurname");
    deleteCookie("userAge");
    deleteCookie("userCountry");
    profileName();
    statut = "unauthentified";

    if (pageName != "compte.html") {
        ShowHideProfileButtons("compte-button");
    }
    ShowHideProfileButtons("disconnect-button");
    // profileInformations();
    
    alertMessage2("Vous avez bien été déconnecté(e) !","Merci pour votre passage sur notre site, cliquez sur 'OK' pour retourner à l'accueil.",1,"document.location.href='index.html'")


}

// function showHideArrowDownAndUp() {
//     if (statut == "authentified") {
//         if (document.getElementById("disconnect-button").style.display == "none") {
//             document.getElementById("fa-caret-down").style.display="inline";
//             document.getElementById("fa-caret-up").style.display="none";

//         } else {
//             document.getElementById("fa-caret-down").style.display="none";
//             document.getElementById("fa-caret-up").style.display="inline";


//         }
//     } else {
//         document.getElementById("fa-caret-down").style.display="none";
//     }
// }
function profileArrowsDownAndUp() {
    if (statut == "authentified") {
        if (profileMenuStatut == "closed") {
            document.getElementById("arrows-down-and-up").innerHTML ="<i style='margin-left:5px' class='fas fa-caret-down' onclick='profileButtonAction()'>";
            return("done")
        } else {
            document.getElementById("arrows-down-and-up").innerHTML ="<i style='margin-left:5px' class='fas fa-caret-up' onclick='profileButtonAction()'>";


        }
    } else {
        document.getElementById("arrows-down-and-up").innerHTML = null;
    }
}





// message d'alerte
function showAlertMessage(message, color) {
    document.getElementById("alert-message-box").style.display = "flex";
    if (color=="green") {
        document.getElementById("alert-message-box").style.backgroundColor = "lightgreen";
        document.getElementById("alert-message-close-button-box").style.backgroundColor = "green";
    } else if (color=="red") {
        document.getElementById("alert-message-box").style.backgroundColor = "orange";
        document.getElementById("alert-message-close-button-box").style.backgroundColor = "red";
    } else {
        document.getElementById("alert-message-box").style.backgroundColor = "lightblue" ;
        document.getElementById("alert-message-close-button-box").style.backgroundColor = "blue" ;

    }
    console.log("ok");
    document.getElementById('alert-message-text').textContent = message;
}
function closeAlertMessage() {
    document.getElementById("alert-message-box").style.display = "none";
    console.log("alert closed");
    document.getElementById('alert-message-text').textContent = undefined;
}
// modifier avec "visibility" pour l'animation ?? tester


function alertMessage2(messageTitle,message, typeOfAlert, actionIfOk, actionIfCancelled) {
    var buttonsHTML = ""
    if (typeOfAlert ==1) {
        if (actionIfOk) {
            buttonsHTML = '<div id="alert-button-box" style=" text-align:center;width:100%;display:flex"><button style="flex:1" onclick="closeAlertMessage2();'+ actionIfOk +'" >OK</button></div>'
        } else {
            buttonsHTML = '<div id="alert-button-box" style=" text-align:center;width:100%;display:flex"><button style="flex:1" onclick="closeAlertMessage2();console.log(\'hello\')" >OK</button></div>'
        }
    } else if (typeOfAlert == 2) {
        if (actionIfOk && !actionIfCancelled) {
            buttonsHTML = '<div id="alert-button-box" style=\" text-align:center;width:100%;display:flex\"><button style=\"flex:1; background-color:lightgray;\" onclick=\"\" >Annuler</button><button style=\"flex:1\" onclick=\"closeAlertMessage2();'+ actionIfOk +'\" >Valider</button></div>'
            console.log(actionIfOk)
            console.log(buttonsHTML)
            
        } else if (actionIfOk && actionIfCancelled) {
            buttonsHTML = '<div id="alert-button-box" style=" text-align:center;width:100%;display:flex"><button class="red-button"  style="flex:1;" onclick="closeAlertMessage2();'+ actionIfCancelled +'" >Annuler</button><button style="flex:1" onclick="closeAlertMessage2();'+ actionIfOk +'" >Valider</button></div>'

        } else {
        buttonsHTML = '<div id="alert-button-box" style=" text-align:center;width:100%;display:flex"><button class="red-button" style="flex:1;" onclick="closeAlertMessage2()" >Annuler</button><button style="flex:1" onclick="closeAlertMessage2()" >Valider</button></div>'
        }
// a ajouter : create cookie si accpete les cookies. sinon demander à chaque fois.+pour se connecter
    } else if (typeOfAlert == 3) {
        buttonsHTML = '<div style="text-align:center"><input id="alert-message-input" style="width:90%;border-radius:10px;height:25px; border:none;background-color:whitesmoke;outline:none;padding:5px"></input></div>'
        buttonsHTML = buttonsHTML + '<div id="alert-button-box" style=" text-align:center;width:100%;display:flex"><button class="red-button" style="flex:1;" onclick="closeAlertMessage2()" >Annuler</button><button style="flex:1" onclick="closeAlertMessage2()" >Valider</button></div>'
        
    }
    document.getElementById('section-alert-message-2').innerHTML = '<div id="alert-2" style="background-color: rgba(0, 0, 0, 0.700); position: absolute; height:'+ getPageHeight() +';width: 100%;z-index: 2; top: 0px;"><div id="alert-message-box-2"><div id="alert-title-box" style="padding: 15px"><h2 class="title" style="font-size:18pt;overflow:hidden;">'+ messageTitle +'</h2></div><div id="alert-description-box" style="padding: 15px; padding-top:0px;"><p style="font-weight: 300;text-align:justify;">'+ message +'</p></div>'+ buttonsHTML +'</div></div>';

}
function closeAlertMessage2() {
    document.getElementById("alert-2").style.transitionDuration = "0.2s"
    document.getElementById("alert-message-box-2").style.transitionDuration = "0.2s"

    document.getElementById("alert-button-box").style.color = "transparent"
    document.getElementById("alert-button-box").style.backgroundColor = "transparent"
    document.getElementById("alert-title-box").style.visibility = "hidden"
    document.getElementById("alert-description-box").style.visibility = "hidden"
    document.getElementById("alert-2").style.backgroundColor = "transparent"
    setTimeout(function() {
    document.getElementById("alert-2").style.backgroundColor = "0px"
    setTimeout(function() {
        document.getElementById("alert-2").style.display = "none"
    
        }, 100);
    }, 100);
    



    // document.getElementById("alert-2").style.height = "0px"
    
    
    // document.getElementById("alert-2").style.display = "none"
    // document.getElementById("alert-2").style.visibility = "hidden"
    // document.getElementById("alert-2").style.display = "none"
}
function getPageHeight() {
    return(document.body.clientHeight+"px")
}





// PAGE PROFIL

function profileInformations() {
    i = 1;
    if (readCookie("name")!="null" && readCookie("name")!="" && readCookie("name")!=null) {
        document.getElementById("information-box"+i).style.display = "flex";
        document.getElementById("profile-info"+i+"-name").textContent = "Pseudo";
        document.getElementById("profile-info"+i+"-value").textContent = capitalize(readCookie("name"));
        i++;
        console.log("prenom n'est pas null")
    }
    if (readCookie("userName")!="null" && readCookie("userName")!="" && readCookie("userName")!=null) {
        console.log("userName n'est paas null");
        console.log(readCookie("userName"));

        document.getElementById("information-box"+i).style.display = "flex";
        document.getElementById("profile-info"+i+"-name").textContent = "Prénom";
        document.getElementById("profile-info"+i+"-value").textContent = capitalize(readCookie("userName"));
        i++;

    }
    if (readCookie("userSurname")!="null" && readCookie("userSurname")!=""  && readCookie("userSurname")!=null) {
        document.getElementById("information-box"+i).style.display = "flex";

        document.getElementById("profile-info"+i+"-name").textContent = "Nom de famille";
        document.getElementById("profile-info"+i+"-value").textContent = capitalize(readCookie("userSurname"));
        i++;
    }
    if (readCookie("userAge")!="null" && readCookie("userAge")!=""  && readCookie("userAge")!=null) {
        document.getElementById("information-box"+i).style.display = "flex";

        document.getElementById("profile-info"+i+"-name").textContent = "Âge";
        document.getElementById("profile-info"+i+"-value").textContent = readCookie("userAge");
        i++;
    }
    if (readCookie("userCountry")!="null" && readCookie("userCountry")!=""  && readCookie("userCountry")!=null) {
        document.getElementById("information-box"+i).style.display = "flex";

        document.getElementById("profile-info"+i+"-name").textContent = "Pays";
        document.getElementById("profile-info"+i+"-value").textContent = capitalize(readCookie("userCountry"));
        i++;
    } 
    // if (statut=="unauthentified") {
    //     document.getElementById("information-grey-box").style.display = "none";

    // }
    

}

function modifyProfileInformation() {
    var userAnswer = prompt("Quel est votre prénom ?");
    if (userAnswer !="" && userAnswer != undefined) {
        userName = userAnswer;
        createCookie("userName",userName,365);
    } else {
        deleteCookie("userName");
    }
    var userAnswer = prompt("Quel est votre Nom de famille");
    if (userAnswer !="" && userAnswer != undefined) {
        userSurname = userAnswer;
        createCookie("userSurname",userSurname,365);
    } else {
        deleteCookie("userSurname");
    }
    var userAnswer = prompt("Quel âge avez-vous ?");
    if (userAnswer !="" && userAnswer != undefined) {
        userAge = userAnswer;
        createCookie("userAge",userAge,365);
    } else {
        deleteCookie("userAge");
    }
    var userAnswer = prompt("Dns quel pays vivez-vous ?");

    if (userAnswer !="" && userAnswer != undefined) {
        userCountry = userAnswer;
        createCookie("userCountry",userCountry,365);
    } else {
        deleteCookie("userCountry");
    }
    alert("Et voilà, vous avez répondu à toutes les questions.");
    if (pageName == "compte.html") {
        location.reload();

    }

}












// PAGE DE SUGGESTIONS

// function suggestions() {
//     if (readCookie("userAge")!="null" && readCookie("userAge")!=""  && readCookie("userAge")!=null && readCookie("userAge")!=undefined) {
//         if (readCookie("userAge") < 13) {
//             document.getElementById("section-suggestions").style.display ="none";
//         }
//         if (readCookie("userAge") > 13) {
//             document.getElementById("section-suggestions").style.display ="none";
//         }else {
//             document.getElementById("section-suggestions").style.display ="none";

//         }



//     } else {

//     }
// }




// AFFICHAGE DE LA PAGE D'ACCUEIL (TRI PAR CATEGORIES)

function HomePageSuggestions() {
// classe tous les produits par type et date sur la page d'accueil.
    var numberOfProductTypes = searchAvailableSpecs("type").length; //combien y a t il de types de produits ?
    console.log("Il y a " + numberOfProductTypes + " type(s) de produits")
    var allProductTypes = searchAvailableSpecs("type"); //quels sont ils ?
    for (var i = 0 ; i <= (numberOfProductTypes-1); i++) { //boucle qui se répète 1 fois par type de produit
        console.log("Looking for "+ allProductTypes[i] + "s")
        var productList = searchEngine("type", allProductTypes[i])[1]
        productList.sort(function(a,b) { //trie les objets par date de sortie décroissante
            const dateDeSortieA = Number(a.dateDeSortie);
            const dateDeSortieB = Number(b.dateDeSortie);
            return dateDeSortieB-dateDeSortieA;
        })
            var suggestionBoxes = "";
        for (var a = 0; a <= (productList.length-1) && a < 6; a++) {
            suggestionBoxes = suggestionBoxes + "<div class=' flex-box'><a href='"+ getSearchClicLink("name",productList[a].nom) +"' title='"+ productList[a].nom + "' class='link-with-no-style link-with-no-hover-style'><div class='suggestion-box' onclick='location.href=\"" + productList[a].link + "\"'><img src= '"+ productList[a].photo + "' alt='" + productList[a].nom + "' class='flex-box-image'><p class='flex-box-title'>" + productList[a].nom +"</p><p class='flex-box-description'>" + productList[a].description +"</p><div class='product-price'><p>" + productList[a].price + "</p></div></div></a></div>"
        }
        var sectionTitleIllustration = ""
        if (allProductTypes[i] == "ordinateur") {
            sectionTitleIllustration = '<i class="fa fa-laptop"></i>';
        } else if (allProductTypes[i] == "smartphone") {
            sectionTitleIllustration = '<i class="fa fa-mobile"></i>';
        } else if (allProductTypes[i] == "tablette") {
            sectionTitleIllustration = '<i class="fa fa-tablet"></i>';
        }
        document.write('<section class="section-'+ allProductTypes[i] +' section-margin"><h2 class="section-title">'+ sectionTitleIllustration + ' ' + capitalize(allProductTypes[i]) + 's</h2><div  class="flex-boxes suggestion-boxes">'+ suggestionBoxes + '</div></section>');

    }

    




}


















// MOETURS DE RECHERCHE

// moteur de recherche polyvlent pour simplifier le code
function searchEngine(searchType, searchTerm) {
    // console.log(searchType,searchTerm)
    var resultList = [];
    var resultObjectList = [];
    if (String(searchTerm).replaceAll(" ", "") != "" && searchTerm != undefined) {
        for (var i = 0; i < totalProductList.length; i++) {
            var minTotalProductList = String(totalProductList[i][searchType]).toLowerCase(); //met tout en minuscuiles pour avoir tous les resultats (et pas de probèmes avec la casse). Ensuite, les résultats comprennent bien les majuscules.
            if (minTotalProductList.indexOf(String(searchTerm).toLowerCase()) != -1) {
                resultObjectList.push(totalProductList[i]);
                resultList.push(totalProductList[i][searchType]);
                
            }
        }
    }
    resultList = Array.from(new Set(resultList));
    return [resultList, resultObjectList];
}






// MAJUSCULE A CHAQUE DEBUT DE MOT
function capitalize(sentence) {
    var words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return(String(words).replaceAll(","," "))
}











 
// const objectNumber = 1;

function getTextProductBox(productName) { 
    var codeHTML= "<div class=' flex-box'><a href='"+ getSearchClicLink("name",productName.nom) +"' title='"+ productName.nom + "' class='link-with-no-style link-with-no-hover-style'><div class='suggestion-box' onclick='location.href=\"" + productName.link + "\"'><img src= '"+ productName.photo + "' alt='" + productName.nom + "' class='flex-box-image'><p class='flex-box-title'>" + productName.nom +"</p><p class='flex-box-description'>" + productName.description +"</p><div class='product-price'><p>" + productName.price + "</p></div></div></a></div>";
    // document.write(codeHTML);
    return codeHTML
}



// 
//     console.log("-------------------");
// for (var key in product1) {
//     console.log(key + " = " + product1[key])
// }

function suggestion() {
    if (readCookie("userAge") < 13 && readCookie("userAge") != ""){
        document.getElementById("section-suggestions").style.display="none";

    } else if (13 < readCookie("userAge") < 45 && readCookie("userAge") != ""){


    }
} 






// PAGE RECHERCHE
function sendSuggestions(){
    for (i=0; i<6; i++) {
        document.getElementById('suggestion'+i).innerHTML = "";

    }
        document.getElementById('suggestion'+i).style.marginBottom="unset";

    if (document.getElementById("input").value != "" && document.getElementById("input").value != undefined && document.getElementById("input").value != " ") {
        var saisie = document.getElementById("input").value;
        console.log("suggestion received :" +saisie )
        var osResults = searchEngine("operatingSystem",saisie)[0];
        var osObjectsResults = searchEngine("operatingSystem",saisie)[1];
        // console.log(osObjectsResults)
        var nameResults = searchEngine("nom",saisie)[0];
        var nameObjectsResults = searchEngine("nom",saisie)[1];
        var constructorResults = searchEngine("constructeur",saisie)[0];
        // console.log(osResults, nameResults, constructorResults)
        // console.log(osResults.length)


        if (nameResults != undefined ) {
            if (searchFiltersMenuStatut == "shown") {
                showHideSearchFilters();
            }
            for (let i =0; i < nameResults.length && i< 2; i++) {
                if (nameObjectsResults[i].type=="ordinateur") {
                    var icon = "<i class='fas fa-laptop suggestion-icon'></i>";
                } else if (nameObjectsResults[i].type=="smartphone") {
                    var icon = "<i class='fas fa-mobile suggestion-icon'></i>";
                } else if (nameObjectsResults[i].type=="tablette") {
                    var icon = "<i class='fas fa-tablet suggestion-icon'></i>";
                } else {
                    icon= ""
                }
                document.getElementById('suggestion'+i).innerHTML = "<div class='separation-grey-line'></div></div><div class='flex search-suggestion-box'onclick=\"searchClic('name','"+ nameResults[i] + "')\"><div class='suggestion-icon-box'>"+icon+"</div><div class='suggestion-text'><p class='suggestion-title'>"+ nameResults[i] +"</p><p class='suggestion-description'>Trouvé dans Appareils</p></div>";
            }
            
        // } else {
        //     for (let i=0; i<3; i++) {
        //     }
        }
        if (osResults != undefined) {
            for (let i = 2; i < ((osResults.length) + 2) && i < 4; i++) {
                document.getElementById('suggestion'+i).innerHTML = "<div class='separation-grey-line'></div><div class='flex search-suggestion-box'onclick=\"searchClic('operatingSystem','"+ osResults[i-2] + "')\"><div class='suggestion-icon-box'><i class='fas fa-cog suggestion-icon'></i></div><div class='suggestion-text'><p class='suggestion-title'>"+ osResults[i-2] +"</p><p class='suggestion-description'>Trouvé dans Systèmes d'exploitation</p></div></div>";

            }
        }
        if (constructorResults != undefined) {
            for (let i = 4; i < ((constructorResults.length) + 4) && i < 6; i++) {
                document.getElementById('suggestion'+i).innerHTML = "<div class='separation-grey-line'></div><div class='flex search-suggestion-box'onclick=\"searchClic('constructor','"+ constructorResults[i-4] + "')\"><div class='suggestion-icon-box'><i class='fas fa-copyright suggestion-icon'></i></div><div class='suggestion-text'><p class='suggestion-title'>"+ constructorResults[i-4] +"</p><p class='suggestion-description'>Trouvé dans Marques</p></div></div>";

            }
        }
        if (nameResults != "" || osResults != "" || constructorResults != "") {
            console.log("spacer !! spacer !!!")
            document.getElementById('suggestion'+i).style.marginBottom="10px";

        }

    }

}





// recherche l'image d'illustration d'un OS
function getOsIllustration(osName) {
    var resultOsIllustration
    for (var i = 0; i < totalOsList.length; i++) {
        if (osName == totalOsList[i].nom) {
            resultOsIllustration = totalOsList[i].photo
        }
    }
    return(resultOsIllustration)
}
function getConstructorIllustration(constructorName) {
    var resultConstructorIllustration
    for (var i = 0; i < totalConstructorList.length; i++) {
        if (constructorName == totalConstructorList[i].nom) {
            resultConstructorIllustration = totalConstructorList[i].photo
        }
    }
    return(resultConstructorIllustration)
}




// ......................
function showHideSearchFilters() {
    if (searchFiltersMenuStatut == "hidden") {
        document.getElementById("input").value = "";
        hideSuggestions()
        document.getElementById("filters-box").style.display = "inline"
        // result();
        console.log('it"s supposed to have showed the filter box')
        searchFiltersMenuStatut = "shown"
    } else if (searchFiltersMenuStatut == "shown" && pageName == "recherche.html") {
        document.getElementById("filters-box").style.display = "none";
        searchFiltersMenuStatut = "hidden"

    }
}

function hideSuggestions() {
    for (var i =0; i<7; i++) {
        document.getElementById('suggestion'+i).innerHTML ="";
        document.getElementById('suggestion'+i).style.marginBottom="unset";


    }
}