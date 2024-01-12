var pageUrl = document.location.href; 
var searchTerm
var searchType
if (pageUrl.indexOf('recherche.html') != -1) {

    if (pageUrl.indexOf("?") != -1) {
        pageName = pageUrl.substring (pageUrl.lastIndexOf( "/" )+1, pageUrl.lastIndexOf("?"));
        console.log("Page : " +pageName);
    
        if (pageUrl.lastIndexOf("?") != -1) {
            searchType = pageUrl.substring(pageUrl.lastIndexOf("?")+1, pageUrl.lastIndexOf("="));
            console.log("Type de recherche : " + searchType)
            searchTerm = pageUrl.substring(pageUrl.lastIndexOf("=")+1);
            searchTerm = translateURLToNormalText(searchTerm);
            // searchTerm = searchTerm.replaceAll("%20", " ");
            // searchTerm = searchTerm.replaceAll("%C3%A9", "é");
            // searchTerm = searchTerm.replaceAll("%C3%A8", "è") ;       
            // searchTerm = searchTerm.replaceAll("%C3%A0", "à");
            // searchTerm = searchTerm.replaceAll("%C3%B1", "ñ");
            // searchTerm = searchTerm.replaceAll("%C3%A7", "ç");
            // searchTerm = searchTerm.replaceAll("%C3%B9", "ù");
            console.log("Terme recherché : " + searchTerm)
            // searchOsEngine(searchTerm);
            document.getElementById("og:title").content = "Rercherchez '"+ searchTerm +"' dans l'eShop";
            console.log(document.getElementById("og:title").content)
        }


    }
}









// fonction qui retranscrit le texte fourni en texte norml (url --> espaces, apostrophes...)
function translateURLToNormalText(urlText) {
    urlText = urlText.replaceAll("%20", " ");
    urlText = urlText.replaceAll("%C3%A9", "é");
    urlText = urlText.replaceAll("%C3%A8", "è") ;       
    urlText = urlText.replaceAll("%C3%A0", "à");
    urlText = urlText.replaceAll("%C3%B1", "ñ");
    urlText = urlText.replaceAll("%C3%A7", "ç");
    urlText = urlText.replaceAll("%C3%B9", "ù");
    return urlText
}


// lors de l'affchage d'un résultat, mettra la barre de recherche en haut dans le bandeau blanc



function showSearchBarTop() {
    if ((searchTerm != "" && searchTerm != " " && searchTerm != undefined) || (pageName == "index.html" || pageName == "")) {
        document.getElementById("search-box-top-placement").innerHTML= '<div id="search-box-top" class="search-box-top"><div class="search-bar-box"><div class="search-bar-input"><form action="javascript: searchButton()" autocomplete="off"><input type="text" class="input top-input" id="input" name="input" value="" placeholder="Tapez pour rechercher" onkeyup="sendSuggestions()" onmouseover="focus()" onload="focus()"></form></div><div class="search-bar-search-button"><!-- <input type="button" value=""> --><i type="submit" aria-valuemax="Envoyer" name="input" onclick="searchButton()" class="fas fa-search search-button"></i></div></div><div class="search-bar-suggestions"><div id="suggestion0" class="suggestion"></div><div id="suggestion1" class="suggestion"></div><div id="suggestion2" class="suggestion"></div><div id="suggestion3" class="suggestion"></div><div id="suggestion4" class="suggestion"></div><div id="suggestion5" class="suggestion"></div><div id="suggestion6" class="suggestion"></div><div id="suggestion7" class="suggestion"></div></div></div>'
        if (pageName == "recherche.html") {
            document.getElementById("search-box").style.display = "none"
        // document.getElementById("body-recherche").style.background = "white";
        }
    }

}

function showPreviewResults() {
    if (searchTerm != "" && searchTerm != " " && searchTerm != undefined) {
        console.log("showPreviewResults")
        if (searchType=="allTypes"){
            if (searchEngine("nom",searchTerm)[0].length == 1 && searchEngine("operatingSystem",searchTerm)[0].length==0 && searchEngine("constructeur",searchTerm)[0].length==0) {
                console.log("Il y a 1 résultat dans Name : "+searchEngine("nom",searchTerm)[0]);
                console.log(searchEngine("nom",searchTerm)[1][0])
                searchClic("name",searchEngine("nom",searchTerm)[1][0].nom);
            }else if (searchEngine("nom",searchTerm)[0].length == 0 && searchEngine("operatingSystem",searchTerm)[0].length== 1 && searchEngine("constructeur",searchTerm)[0].length==0) {
                console.log("Il y a 1 résultat dans OS : "+searchEngine("operatingSystem",searchTerm)[0]);
                console.log(searchEngine("operatingSystem",searchTerm)[1][0])
                searchClic("operatingSystem",searchEngine("operatingSystem",searchTerm)[1][0].operatingSystem);
            }else if (searchEngine("nom",searchTerm)[0].length == 0 && searchEngine("operatingSystem",searchTerm)[0].length== 0 && searchEngine("constructeur",searchTerm)[0].length== 1) {
                console.log("Il y a 1 résultat dans Marques : "+searchEngine("constructeur",searchTerm)[0]);
                console.log(searchEngine("constructeur",searchTerm)[1][0])
                searchClic("constructor",searchEngine("constructeur",searchTerm)[1][0].constructor);
            }

        }
    }
}



// TOUS LES FICHIERS JAVASCRIPT SONT LIES !!!!




// AFFICHAGE DES RESULTATS
// SI CLIC : Résultat connu et précis
function result() {
    console.log("\n------------result()")
    if (searchType == "name" || searchType=="operatingSystem" || searchType=="constructor") {
        if (searchType=="name") {
            document.getElementById("results").innerHTML = ""; //temporaire
            // page qui détaille le produit en question
            var selectedProductDetails = new Object(searchEngine("nom",searchTerm)[1][0])
            console.log(selectedProductDetails)
            // fonction resultSpecsArray()
            var mainSpecs = "<p class='result-description-text'>"+ htmlBold(capitalize(selectedProductDetails.type))+"<br>"
            var mainSpecsList =["constructeur","dateDeSortie","operatingSystem","screenSize","price"]
            for (var i = 0; i< mainSpecsList.length; i++){
                if (selectedProductDetails[mainSpecsList[i]] && selectedProductDetails[mainSpecsList[i]] != ""){
                    mainSpecs = mainSpecs + frenchShownSpecs[mainSpecsList[i]] +" : " + htmlBold(selectedProductDetails[mainSpecsList[i]])+"<br>";
                }
                
            }
            mainSpecs = mainSpecs + "</p>"
            
            

            document.getElementById("search-results-placement").innerHTML= "<div id='search-results-box'><div class='result-title-box'><div class='result-title-text-box'><p class='result-title-text'>" + selectedProductDetails.nom + "</p></div><div class='result-title-button-box'><p class='result-title-button' onclick='location.href=\""+selectedProductDetails.link+"\"'>Acheter</p></div></div> <div class='result-description-box'><div class='result-description-image-box'><img class='result-description-image' src='"+selectedProductDetails.photo+"' alt='" + selectedProductDetails.nom + "'></div><div class='result-description-text-box'>" + mainSpecs + "</div></div>" + resultNoteText(selectedProductDetails) + "<div class='result-product-specs-box'><h1 id='product-specs' class='result-title-text' style='margin-bottom:10px;'>Fiche technique</h1>"+ resultSpecsArray(selectedProductDetails) +"</div></div>";
            document.getElementById("og:title").content = "eShop | "+ capitalize(selectedProductDetails.type) + " "+ selectedProductDetails.nom ;
            document.getElementById("og:image").content = selectedProductDetails.photo ;
            var newTitle = "eShop | " + selectedProductDetails.nom
            document.title = newTitle
            console.log(document.getElementById("og:title").content)


        }
        else if (searchType=="operatingSystem") {
            document.getElementById("results").innerHTML = ""; //temporaire
            //page qui liste tous les produits dotés de l'OS recherché
            var selectedOsProductsDetails = searchEngine("operatingSystem",searchTerm)[1]
            console.log(selectedOsProductsDetails)
            
            console.log(selectedOsProductsDetails.length)
            var osResultsHtmlBoxes =""
            for (var i =0; i < selectedOsProductsDetails.length; i++) {
                console.log("i= "+i)
                osResultsHtmlBoxes = osResultsHtmlBoxes+"<div class='result-os-box' onclick='javascript : searchClic(\"name\",\"" + selectedOsProductsDetails[i].nom + "\")'><img src='"+ selectedOsProductsDetails[i].photo +"' alt='"+ selectedOsProductsDetails[i].nom+ "' class='result-os-box-image'><p class='flex-box-title'>"+ selectedOsProductsDetails[i].nom+"</p><p class='flex-box-description'>"+ selectedOsProductsDetails[i].description +"</p></div>"
            }
            document.getElementById("search-results-placement").innerHTML= "<div id='search-results-box'><div class='result-title-text-box' style='display:flex; align-items:center; '><div><img src='"+ getOsIllustration(searchTerm) +"' alt='' style='height:80pt;border-radius:15px;'></div><div style='flex:1;'><p class='result-title-text' style='text-align:center;'>&nbsp;&nbsp;&nbsp;Appareils dotés de "+ searchTerm + " (OS)</p></div></div><div class='result-os-boxes'>"+ osResultsHtmlBoxes+"</div></div>"
            document.getElementById("og:title").content = "eShop | Appareils dotés de " + searchTerm ;
            console.log(document.getElementById("og:title").content);
            var newTitle = "eShop | " + searchTerm
            document.title = newTitle

            //page qui liste tous les produits avec l'OS précisé en searchTerm
        }
        else if (searchType=="constructor") {
            //page qui liste tous les produits de la marque recherchée (searchTerm)
            document.getElementById("results").innerHTML = ""; //temporaire
            //page qui liste tous les produits dotés de l'OS recherché
            var selectedConstructorProductsDetails = searchEngine("constructeur",searchTerm)[1]
            console.log(selectedConstructorProductsDetails)
            console.log(selectedConstructorProductsDetails)
            
            console.log(selectedConstructorProductsDetails.length)
            var ConstructorResultsHtmlBoxes =""
            for (var i =0; i < selectedConstructorProductsDetails.length; i++) {
                console.log("i= "+i)
                ConstructorResultsHtmlBoxes = ConstructorResultsHtmlBoxes+"<div class='result-os-box' onclick='javascript : searchClic(\"name\",\"" + selectedConstructorProductsDetails[i].nom + "\")'><img src='"+ selectedConstructorProductsDetails[i].photo +"' alt='" + selectedConstructorProductsDetails[i].nom + "' class='result-os-box-image'><p class='flex-box-title'>"+ selectedConstructorProductsDetails[i].nom+"</p><p class='flex-box-description'>"+ selectedConstructorProductsDetails[i].description +"</p></div>"
                console.log(ConstructorResultsHtmlBoxes)
            }
            document.getElementById("search-results-placement").innerHTML= "<div id='search-results-box'><div class='result-title-text-box'><p class='result-title-text'>Marque : "+ searchEngine("constructeur",searchTerm)[0] + "</p></div><div class='result-os-boxes'>"+ ConstructorResultsHtmlBoxes + "</div></div>"
            document.getElementById("og:title").content = "eShop | Résultats pour " + searchTerm ;
            console.log(document.getElementById("og:title").content);
            var newTitle = "eShop | " + searchTerm
            document.title = newTitle
        }
        else {
            console.log("error in result()")
        }

    } else if (searchType == "allTypes") {
        //suggestions
        document.getElementById("results").innerHTML = ""; //vide toutes les autres boites
        if (searchEngine("nom",searchTerm)[0].length != 0 || searchEngine("operatingSystem",searchTerm)[0].length != 0 || searchEngine("constructeur",searchTerm)[0].length != 0) {
            console.log("allTypes research")
            var nameResults = searchEngine("nom",searchTerm)
            var osResults = searchEngine("operatingSystem",searchTerm)
            var constructorResults = searchEngine("constructeur",searchTerm)
            // console.log(nameResults)
            // console.log(osResults)
            // console.log(constructorResults)
            if (nameResults[0].length !=0) {
                console.log("Il y a des résultats dans NAME");
                var productBoxes =""
                for (var i =0; i < nameResults[0].length; i++) {
                    // console.log("i= "+i)
                    productBoxes = productBoxes+"<div class='result-os-box' onclick='javascript : searchClic(\"name\",\"" + nameResults[1][i].nom + "\")'><img src='"+ nameResults[1][i].photo +"' alt='Photo illustrative de " + nameResults[1][i].nom + "' class='result-os-box-image'><p class='flex-box-title'>"+ nameResults[1][i].nom +"</p><p class='flex-box-description'>"+ nameResults[1][i].description +"</p></div>"
                    // console.log(productBoxes)
                }
                var nameHTMLresults = "<div class='result-title-box'><p class='result-title-text'>Produits</p></div><div class='result-os-boxes'>"+ productBoxes + "</div>";

            } else {
                var nameHTMLresults ="";
            }
            if (osResults[0].length !=0) {
                console.log("Il y a des résultats dans OS");
                var productBoxes =""
                for (var i =0; i < osResults[0].length; i++) {
                    console.log("i= "+i)
                    console.log(osResults[1][i])
                    if (getOsIllustration(osResults[0][i])!= undefined && getOsIllustration(osResults[0][i])!= "" ) {
                        var osIllustration = "<img src='"+ getOsIllustration(osResults[0][i]) +"' alt='Logo de "+ osResults[0][i] + "' class='result-os-box-image' style='max-width: 100px; border-radius: 22px;'>"
                    } else {
                        var osIllustration = "<i alt='Illustration du Système d'Exploitation' class='result-os-box-image fas fa-cog' style='font-size:40px;'></i>"
                    }
                    productBoxes = productBoxes+"<div class='result-os-box' onclick='javascript : searchClic(\"operatingSystem\",\"" + osResults[0][i] + "\")'>"+ osIllustration +"<p class='flex-box-title'>"+ osResults[0][i] +"</p></div>"
                    // console.log(productBoxes)
                }
                var osHTMLresults = "<div class='result-title-box'><p class='result-title-text'>Systèmes d'Exploitation</p></div><div class='result-os-boxes'>"+ productBoxes + "</div>";

            } else {
                var osHTMLresults ="";
            }
            
            if (constructorResults[0].length !=0) {
                console.log("Il y a des résultats dans CONSTRUCTOR")
                var constructorBoxes =""
                for (var i =0; i < constructorResults[0].length; i++) {
                    console.log("i= "+i)
                    console.log(constructorResults[0][i])
                    if (getConstructorIllustration(constructorResults[0][i])!= undefined && getConstructorIllustration(constructorResults[0][i])!= "" ) {
                        var constructorIllustration = "<img src='"+ getConstructorIllustration(constructorResults[0][i]) +"' alt='Logo de " + constructorResults[0][i] + "' class='result-os-box-image' style='max-width: 100px;'>"
                    } else {
                        var constructorIllustration = "<i alt='Illustration de la marque' class='result-os-box-image far fa-copyright' style='font-size:100px; margin:15px;'></i>"
                    }
                    constructorBoxes = constructorBoxes+"<div class='result-os-box' onclick='javascript : searchClic(\"constructor\",\"" + constructorResults[0][i] + "\")'>"+ constructorIllustration +"<p class='flex-box-title'>"+ constructorResults[0][i] +"</p></div>"
                    // console.log(productBoxes)
                }
                var constructorHTMLresults = "<div class='result-title-box'><p class='result-title-text'>Marques</p></div><div class='result-os-boxes'>"+ constructorBoxes + "</div>";

            } else {
                var constructorHTMLresults ="";
            }
            document.getElementById("search-results-placement").innerHTML= "<div id='search-results-box'>" + nameHTMLresults + osHTMLresults + constructorHTMLresults +"</div>";
        } else {
            noResultsPage(searchTerm);

        }
        showPreviewResults()
    } else if (searchType == "filter") {
        var filters = translateFilterUrlToArray(searchTerm);
        console.log("La recherche est filtrée, les filtres sont : ");
        console.log(filters);
        // console.log(filters.length)
        var resultObjectsList = [];
        if (numberOfFiltersApplied() >= 1) {
            var resultObjectsList1 = [];
            for (var i = 0; i < searchEngine(filters[0], filters[1])[1].length; i++) {
                resultObjectsList1.push(searchEngine(filters[0], filters[1])[1][i]); 
            }
            
            resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList1)
            console.log(resultObjectsList)
            if (numberOfFiltersApplied() >= 2 && resultObjectsList1.length != 0) { //s'il y a 2 filtres ou plus
                var resultObjectsList2 = [];
                for (var i = 0; i < searchEngine(filters[2], filters[3])[1].length; i++) {
                    resultObjectsList2.push(searchEngine(filters[2], filters[3])[1][i]); 
                }
                resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList2)
                console.log(resultObjectsList)
                
                if (numberOfFiltersApplied() >= 3 && resultObjectsList1.length != 0) { //s'il y a 3 filtres ou plus
                    var resultObjectsList3 = [];
                    for (var i = 0; i < searchEngine(filters[4], filters[5])[1].length; i++) {
                        resultObjectsList3.push(searchEngine(filters[4], filters[5])[1][i]); 
                    }
                    resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList3)
                    console.log(resultObjectsList)
    
                    if (numberOfFiltersApplied() >= 4 && resultObjectsList1.length != 0) { //s'il y a 3 filtres ou plus
                        var resultObjectsList4 = [];
                        for (var i = 0; i < searchEngine(filters[6], filters[7])[1].length; i++) {
                            resultObjectsList4.push(searchEngine(filters[6], filters[7])[1][i]); 
                        }
                        resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList4)
                        console.log(resultObjectsList)
        
                        // document.getElementById("search-results-placement").innerHTML= "<div id='search-results-box'>" + nameHTMLresults + osHTMLresults + constructorHTMLresults +"</div>"; //changer l'intérieur à l'aide d'une boucle for pour chaque objet + si possible, mettre une fonction qui fait ca pour ne pas réécrire tout à chaque fois
                    } if (resultObjectsList.length >=1) {
                        var resultBoxes = "";
                        for (var i =0; i < resultObjectsList.length; i++) {
                            resultBoxes = resultBoxes + "<div class='result-os-box'><a href='"+ getSearchClicLink("name",resultObjectsList[i].nom) +"' title='"+ resultObjectsList[i].nom + "' class='link-with-no-style link-with-no-hover-style'><div class='suggestion-box' onclick='location.href=\"" + resultObjectsList[i].link + "\"'><img src= '"+ resultObjectsList[i].photo + "' alt='" + resultObjectsList[i].nom + "' class='flex-box-image'><p class='flex-box-title'>" + resultObjectsList[i].nom +"</p><p class='flex-box-description'>" + resultObjectsList[i].description +"</p><div class='product-price'><p>" + resultObjectsList[i].price + "</p></div></div></a></div>"
                        }
                        var selectedFilters = "";
                        for (var i=1;i < filters.length;i= i+2) {
                            console.log(i);
                            selectedFilters = selectedFilters + "<div style='margin:10px;margin-left:5px;margin-right:5px;background-color:whitesmoke;padding:10px;border-radius:12px;'><p>"+ capitalize(filters[i])+"</p></div>";
                        }
                        selectedFilters = selectedFilters + "<div id='modif-filters-button' onclick='document.location.href = \"recherche.html\"' style='margin:10px;margin-left:15px;margin-right:5px;padding:10px;border-radius:12px;cursor:pointer;'><p>Modifier les filtres</p></div>";
                        selectedFiltersBox = "<div style='width:100%;display:inline-flex;flex-wrap:wrap;justify-content:center;'>"+ selectedFilters + "</div>"
                        document.getElementById("search-results-placement").innerHTML= selectedFiltersBox + "<div id='search-results-box'><div class='result-title-box'><p class='result-title-text'>Résultats de la Recherche filtrée (" + resultObjectsList.length + ")</p></div><div class='result-os-boxes'>"+ resultBoxes + "</div></div>";
                        } else {
                        noResultsPage("Recherche Filtrée");
                    }
                } else if (resultObjectsList.length >=1) {
                    var resultBoxes = "";
                    for (var i =0; i < resultObjectsList.length; i++) {
                        resultBoxes = resultBoxes + "<div class='result-os-box'><a href='"+ getSearchClicLink("name",resultObjectsList[i].nom) +"' title='"+ resultObjectsList[i].nom + "' class='link-with-no-style link-with-no-hover-style'><div class='suggestion-box' onclick='location.href=\"" + resultObjectsList[i].link + "\"'><img src= '"+ resultObjectsList[i].photo + "' alt='" + resultObjectsList[i].nom + "' class='flex-box-image'><p class='flex-box-title'>" + resultObjectsList[i].nom +"</p><p class='flex-box-description'>" + resultObjectsList[i].description +"</p><div class='product-price'><p>" + resultObjectsList[i].price + "</p></div></div></a></div>"

                    }
                    var selectedFilters = "";
                    for (var i=1;i < filters.length;i= i+2) {
                        console.log(i);
                        selectedFilters = selectedFilters + "<div style='margin:10px;margin-left:5px;margin-right:5px;background-color:whitesmoke;padding:10px;border-radius:12px;'><p>"+ capitalize(filters[i])+"</p></div>";
                    }
                    selectedFilters = selectedFilters + "<div id='modif-filters-button' onclick='document.location.href = \"recherche.html\"' style='margin:10px;margin-left:15px;margin-right:5px;padding:10px;border-radius:12px;cursor:pointer;'><p>Modifier les filtres</p></div>";
                    selectedFiltersBox = "<div style='width:100%;display:inline-flex;flex-wrap:wrap;justify-content:center;'>"+ selectedFilters + "</div>"
                    document.getElementById("search-results-placement").innerHTML= selectedFiltersBox + "<div id='search-results-box'><div class='result-title-box'><p class='result-title-text'>Résultats de la Recherche filtrée (" + resultObjectsList.length + ")</p></div><div class='result-os-boxes'>"+ resultBoxes + "</div></div>";
                } else {
                    noResultsPage("Recherche Filtrée");
                }

            } else if (resultObjectsList.length >= 1) {
                var resultBoxes = "";
                for (var i =0; i < resultObjectsList.length; i++) {
                    resultBoxes = resultBoxes + "<div class='result-os-box'><a href='"+ getSearchClicLink("name",resultObjectsList[i].nom) +"' title='"+ resultObjectsList[i].nom + "' class='link-with-no-style link-with-no-hover-style'><div class='suggestion-box' onclick='location.href=\"" + resultObjectsList[i].link + "\"'><img src= '"+ resultObjectsList[i].photo + "' alt='" + resultObjectsList[i].nom + "' class='flex-box-image'><p class='flex-box-title'>" + resultObjectsList[i].nom +"</p><p class='flex-box-description'>" + resultObjectsList[i].description +"</p><div class='product-price'><p>" + resultObjectsList[i].price + "</p></div></div></a></div>"
                }
                var selectedFilters = "";
                for (var i=1;i < filters.length;i= i+2) {
                    console.log(i);
                    selectedFilters = selectedFilters + "<div style='margin:10px;margin-left:5px;margin-right:5px;background-color:whitesmoke;padding:10px;border-radius:12px;'><p>"+ capitalize(filters[i])+"</p></div>";
                }
                selectedFilters = selectedFilters + "<div id='modif-filters-button' onclick='document.location.href = \"recherche.html\"' style='margin:10px;margin-left:10px;margin-right:5px;padding:10px;border-radius:12px;cursor:pointer;'><p>Modifier les filtres</p></div>";
                selectedFiltersBox = "<div style='width:100%;display:inline-flex;flex-wrap:wrap;justify-content:center;'>"+ selectedFilters + "</div>"
                document.getElementById("search-results-placement").innerHTML= selectedFiltersBox + "<div id='search-results-box'><div class='result-title-box'><p class='result-title-text'>Résultats de la Recherche filtrée (" + resultObjectsList.length + ")</p></div><div class='result-os-boxes'>"+ resultBoxes + "</div></div>";
        } else {
                noResultsPage("Recherche Filtrée");
            }


        } else {
            errorPage("dans la recherche filtrée")
            
        }

    }
    // Ajouter bulles en haut affichant les filtres . Si possible : avec croix pour les supprimer.....OK, sans les croix
    
    
    
    else if (pageUrl.indexOf("recherche.html?")!= -1) {
        errorPage("dans la recherche")
        // document.getElementById("search-results-placement").innerHTML= "<div id='search-result-box'><p style='align-items:center; text-align:center;font-size:100px; margin:30px 0px;color: red;'><i class=\"fas fa-exclamation-circle\" ></i></p><p style=\"text-align:center; margin:20px 10px; font-family: 'Roboto'; font-weight: 400; font-size:13pt\"> Une erreur s'est produite lors de la recherche. Veuillez réessayer ultérieurement.</p></div>";
        // document.getElementById("og:title").content = "eShop | Une erreur s'est produite dans la recherche."
        // console.log(document.getElementById("og:title").content);

    } else {
        console.log("Something went wrong during the execution of result() but we do not know what");

    }
}


function resultSpecsArray(selectedProductDetails){
// var possibleShownSpecsList = ["storage","ram","diskType","screenSize","screenDefinition","processor","lecteurEmpreinteDigitale","reconnaissanceFaciale","connections","numPad","weight"]
var HTMLSpecsLine = ""
for (var i=0; i<possibleShownSpecsList.length; i++) {
    if (selectedProductDetails[possibleShownSpecsList[i]]) {
        if (possibleShownSpecsList[i] =="screenSize") {
            HTMLSpecsLine = HTMLSpecsLine + "<tr><td>"+ frenchShownSpecs[possibleShownSpecsList[i]] +"</td><td>"+ htmlBold(selectedProductDetails[possibleShownSpecsList[i]]+"\"")+ "</td></tr>"

        } else {
            HTMLSpecsLine = HTMLSpecsLine + "<tr><td>"+ frenchShownSpecs[possibleShownSpecsList[i]] +"</td><td>"+ htmlBold(selectedProductDetails[possibleShownSpecsList[i]])+ "</td></tr>"
        }
    }
}
console.log(HTMLSpecsLine)

    var HTMLArray = "<table class='result-product-specs-table'>"+ HTMLSpecsLine +"</table>"
    return HTMLArray
}
// if (product1.nom) {
//     console.log("hello nomnom")
// } else 
// console.log("nomnom hello")
console.log ('----------------------------')
console.log()
function resultNoteText(productObject) {
    var noteBox = "";
    if (productObject.note) {
            noteBox = "<div class='product-note-box' style='margin-bottom:30px'><h1 id='notre-avis' class='result-title-text' style='margin-bottom:10px;'>Notre avis</h1><p style='line-height:2;font-weight:400;text-align:justify;font-size:12pt;'>" + productObject.note + "</p></div>"

    }
    return noteBox
}






function numberOfFiltredResults() {
    //renvoie le nombre de résuktats associés aux filtres sélectionnés (avant la recherhe)
    // creer un "url"
    var value1 = document.getElementById("productTypeFilterSelector").value; //on va chercher les valeurs de sélecteurs
    var value2 = document.getElementById("screenSizeFilterSelector").value;
    var value3 = document.getElementById("osFilterSelector").value;
    var value4 = document.getElementById("constructorFilterSelector").value;
    var searchTermFiltred = ""; //on récrée le "searchTerm" qui serait dans l'url si l'on avait cliqué sur le bouton de reherche
    if (value1 != ""){
        searchTermFiltred = "type:" + value1 + ";"
    } if (value2 != ""){
        searchTermFiltred = searchTermFiltred + "screenSize:" + String(value2) + ";"

    } if (value3 != ""){
        searchTermFiltred = searchTermFiltred + "operatingSystem:" + value3 + ";"

    } if (value4 != ""){
        searchTermFiltred = searchTermFiltred + "constructeur:" + value4 + ";"
    }
    if (searchTermFiltred != "" && searchTermFiltred != undefined && numberOfSelectedFilters() >= 1) { 
        searchTermFiltred = searchTermFiltred.substring(0,searchTermFiltred.lastIndexOf(";"));
    }





    filters = translateFilterUrlToArray(searchTermFiltred); //on décompose cet url comme pour voir les résultats
    var resultObjectsList = [];
    if (numberOfSelectedFilters() >= 1) { //s'il y a 1 filtre ou plus   //on reforme la liste des résultats filtrés sans les afficher
        var resultObjectsList1 = [];
        for (var i = 0; i < searchEngine(filters[0], filters[1])[1].length; i++) {
            resultObjectsList1.push(searchEngine(filters[0], filters[1])[1][i]); 
        }
        resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList1)
        if (numberOfSelectedFilters() >= 2 && resultObjectsList1.length != 0) { //s'il y a 2 filtres ou plus
            var resultObjectsList2 = [];
            for (var i = 0; i < searchEngine(filters[2], filters[3])[1].length; i++) {
                resultObjectsList2.push(searchEngine(filters[2], filters[3])[1][i]); 
            }
            resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList2)
            
            if (numberOfSelectedFilters() >= 3 && resultObjectsList1.length != 0) { //s'il y a 3 filtres ou plus
                var resultObjectsList3 = [];
                for (var i = 0; i < searchEngine(filters[4], filters[5])[1].length; i++) {
                    resultObjectsList3.push(searchEngine(filters[4], filters[5])[1][i]); 
                }
                resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList3)
                // console.log(resultObjectsList)

                if (numberOfSelectedFilters() >= 4 && resultObjectsList1.length != 0) { //s'il y a 4 filtres ou plus
                    var resultObjectsList4 = [];
                    for (var i = 0; i < searchEngine(filters[6], filters[7])[1].length; i++) {
                        resultObjectsList4.push(searchEngine(filters[6], filters[7])[1][i]); 
                    }
                    resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList4)
                    // console.log(resultObjectsList)
                } 
            }
        }
    }
    return(resultObjectsList.length) //on renvoie la longueur de la liste des résultats (= le nombre de résultats)
}





















// Pages Pré-tapées pour les résultats de recherhe.
function noResultsPage(searchTerm) {
    document.getElementById("search-results-placement").innerHTML= "<div id='search-result-box'><p style='align-items:center; text-align:center;font-size:100px; margin:30px 0px;color: orange;'><i class=\"far fa-times-circle\" ></i></p><p style=\"text-align:center; margin:20px 10px; font-family: 'Roboto'; font-weight: 400; font-size:13pt;\"><i class=\"fas fa-exclamation-circle\" style='color:orange;'></i> Nous n'avons rien trouvé pour \"" + searchTerm + "\".<br><br> Réessayez avec d'autres termes de recherche.</p></div>";
    document.getElementById("og:title").content = "eShop | Aucun résultat pour " + searchTerm ;
    console.log(document.getElementById("og:title").content);
    console.log("noResults()___affichage de la page")

}
function errorPage(errorLocation) {
    document.getElementById("search-results-placement").innerHTML= "<div id='search-result-box'><p style='align-items:center; text-align:center;font-size:100px; margin:30px 0px;color: red;'><i class=\"fas fa-exclamation-circle\" ></i></p><p style=\"text-align:center; margin:20px 10px; font-family: 'Roboto'; font-weight: 400; font-size:13pt\"> Une erreur s'est produite "+ errorLocation + ". Veuillez réessayer ultérieurement.</p></div>";
    document.getElementById("og:title").content = "eShop | Une erreur s'est produite " + errorLocation + "."
    console.log(document.getElementById("og:title").content);

}







// ....................





function searchAvailableSpecs(searchedSpec) {
    searchedSpecResultsList = []
    for (var i = 0; i < totalProductList.length; i++) {
        // console.log(i)
        // console.log(totalProductList[i][searchedSpec])
        searchedSpecResultsList.push(totalProductList[i][searchedSpec])
    }
    if (searchedSpecResultsList != []) {
    searchedSpecResultsList = Array.from(new Set(searchedSpecResultsList));
    return(searchedSpecResultsList)
    }        

    // console.log(searchedSpecResultsList)

}








// FILTRES





function printFiltersAllSpecs(searchType,searchedGroupName,afterText) {
    // FONCTION QUI MESAUVE ET RESOUD MON TOUT PREMIER PROBLEME !! <COMPTE TOUTE SEULE LES OS... TOUTES LES CARACTERISTIQUES !!!
    var AllSpecsFinalList = [];
    for (var i = 0; i < totalProductList.length; i++){
        if (totalProductList[i][searchType]){
            AllSpecsFinalList.push(totalProductList[i][searchType])

        }

    }
        AllSpecsFinalList.sort(function(a,b){return a-b;})     //J'ai trouvé cette ligne de code sur internet. Elle permet de classer les résultats dans l'ordre croissant (pour les nombres)
    AllSpecsFinalList = Array.from(new Set(AllSpecsFinalList));  //supprime les doublons du tableau
    for (var i = 0; i < AllSpecsFinalList.length; i++){
        document.write("<option value='"+AllSpecsFinalList[i]+"'>" + AllSpecsFinalList[i] + afterText+ "</option>")

    }

}


// bouton de filtre qui créé l'URL
function submitFilterButton(){

    value1 = document.getElementById("productTypeFilterSelector").value; //va chercher les valeurs de sélecteurs
    value2 = document.getElementById("screenSizeFilterSelector").value;
    value3 = document.getElementById("osFilterSelector").value;
    value4 = document.getElementById("constructorFilterSelector").value;
    var url = "";
    var numberOfFiltersApplied = 0;
    if (value1 != ""){
        url = "type:" + value1 + ";"
        numberOfFiltersApplied = numberOfFiltersApplied +1;
    } if (value2 != ""){
        url = url+ "screenSize:" + String(value2) + ";"
        numberOfFiltersApplied = numberOfFiltersApplied +1;
    } if (value3 != ""){
        url = url + "operatingSystem:" + value3 + ";"
        numberOfFiltersApplied = numberOfFiltersApplied +1;
    } if (value4 != ""){
        url = url + "constructeur:" + value4 + ";"
        numberOfFiltersApplied = numberOfFiltersApplied +1;
    }
    if (url != "" && url != undefined && numberOfFiltersApplied >= 1) { 
        url = url.substring(0,url.lastIndexOf(";"));
        document.location.href = "recherche.html?filter="+ url
        
    } else {
        console.log("error filter (nombre de filtres : "+ numberOfFiltersApplied + ")")
    }
    // Créer la suite de la fonction : si 1 seul filtre, rediriger vers LA paeg sui correspond. si 0 filtres, griser le bouton
}
function submitFilterButtonText() {
    if (numberOfSelectedFilters() >= 1) {
        console.log(numberOfSelectedFilters())
        document.getElementById("filter-button").innerHTML = "Filtrer la recherche ("+ numberOfFiltredResults() + ")"
        console.log("button - filtrer la recherche")
    } else {
        console.log(numberOfSelectedFilters())
        document.getElementById("filter-button").innerHTML = "Sélectionnez au moins 1 filtre pour lancer la recherche."

        console.log("error - 1 filtre requis")

    }
}

function numberOfFiltersApplied() {
    // renvoie le nombre de filtres appliqués à la recherche
    return(translateFilterUrlToArray(searchTerm).length/2)
}

function numberOfSelectedFilters() {
    var value1 = document.getElementById("productTypeFilterSelector").value; //va chercher les valeurs de sélecteurs
    var value2 = document.getElementById("screenSizeFilterSelector").value;
    var value3 = document.getElementById("osFilterSelector").value;
    var value4 = document.getElementById("constructorFilterSelector").value;
    var counter = 0;
    if (value1 != "") {
        counter++
    }
    if (value2 != "") {
        counter++
    }
    if (value3 != "") {
        counter++
    }
    if (value4 != "") {
        counter++
    }
    return(counter)
}




// REFORMULATION DE LA RECHERCHE FILTREE
function translateFilterUrlToArray(searchTerm) {
    if (searchType == "filter" || 1==1) {
        searchTermArray = searchTerm.split(";"); //sépare l'url à chaque ";"
        searchTermArray2 = [];
        for (var i = 0; i< searchTermArray.length; i++) {
            searchTermArray2.push(searchTermArray[i].split(":")[0]) //sépare les nom des attributs de leurs valeurs et les classe dans un objet
            searchTermArray2.push(searchTermArray[i].split(":")[1])        
        }
        return(searchTermArray2) //résultats de la recherche filtrée traduits de l'URL et regroupés dans un objet
    }
}



























// Quand recherche = submitted
function searchButton() {
    var saisie = document.getElementById("input").value;
    if (saisie != "" && saisie != undefined && saisie.replaceAll(" ","") != "") {
        document.location.href = "recherche.html?allTypes="+saisie
    } else {
        document.location.href = "recherche.html"

    }
}







function searchClic(searchType, searchedItem) {
    document.location.href= ("recherche.html?" + searchType + "=" + searchedItem);
}

function getSearchClicLink(searchType, searchedItem) {
//renvoie l'url qui correspond à la recherche et son type.
    return("recherche.html?" + searchType + "=" + searchedItem);
}


// focus sur le champ de texte dès l'ouverture de la page
function focus(elementId) {
    document.getElementById(elementId).focus()
}







// Mise en forme du texte
function htmlBold(text) {
    return("<b>"+text+"</b>")
}



// PETITES FONCTIONS PRATIQUES

// fonction qui ne renvoir que les éléments contenus dans les 2 tableaux
function getCommonElements(array1, array2) {
    var commonResults = [];
    for (var i= 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            commonResults.push(array1[i])
        }
    }
    return(commonResults)
}

function showHideSearchButton() {
    if (searchTerm == undefined) {
        document.getElementById("search-top-button").style.display = "none"
        document.getElementById("filters-button-box").style.display = "unset"
        return(document.getElementById("search-top-button").style.display)

    } else {
        document.getElementById("filters-button-box").style.display = "none"
        return(document.getElementById("search-top-button").style.display)

    }
}






// suggestion
function homeSuggestions() {
    if (readCookie("cookies")== "allowed"){
        if (statut == "authentified") {
            if (readCookie("userAge") > 0 && readCookie("userAge") <= 115) {
                var userAge = readCookie("userAge");
                var suggestionObjectList = []
                if (userAge <=13) {
                    errorHomeSuggestions("Vous avez moins de 13 ans, nous ne sommes pas autorisés à utiliser vos données pour vous proposer des produits")

                } else if (userAge > 13 && userAge <=25) {
                    // ++ de téléphones..+ pc windows car - cher. - de budget
                    suggestionObjectList.push(getFiltredResults("type:smartphone;operatingSystem:iOS")[randomNumber(0,(getFiltredResults("type:smartphone;operatingSystem:iOS").length))])
                    suggestionObjectList.push(getFiltredResults("type:smartphone;operatingSystem:Android")[randomNumber(0,(getFiltredResults("type:smartphone;operatingSystem:Android").length))])
                    suggestionObjectList.push(getFiltredResults("type:ordinateur;operatingSystem:Windows;screenSize:14")[randomNumber(0,(getFiltredResults("type:ordinateur;operatingSystem:Windows;screenSize:14").length))])
                    suggestionObjectList.push(getFiltredResults("type:tablette")[randomNumber(0,(getFiltredResults("type:tablette").length))])



                    
                } else if (userAge > 25 && userAge <= 40) {
                    suggestionObjectList.push(getFiltredResults("type:smartphone")[randomNumber(0,(getFiltredResults("type:smartphone").length))])

                    var computerList = getFiltredResults("type:ordinateur")
                    var computerNumber = randomNumber(0,(computerList.length))
                    suggestionObjectList.push(getFiltredResults("type:ordinateur")[computerNumber])
                    var newComputerNumber = randomNumber(0,(computerList.length))
                    while ( newComputerNumber == computerNumber) {
                        newComputerNumber = randomNumber(0,(computerList.length))
                    }
                    suggestionObjectList.push(getFiltredResults("type:ordinateur")[newComputerNumber])
                    suggestionObjectList.push(getFiltredResults("type:tablette")[randomNumber(0,(getFiltredResults("type:tablette").length))])





                } else if (userAge > 40 ) {

                    var computerList = getFiltredResults("type:ordinateur;screenSize:17")
                    var computerNumber = randomNumber(0,(computerList.length))
                    suggestionObjectList.push(getFiltredResults("type:ordinateur;screenSize:17")[computerNumber])
                    if (computerList.length > 1) {
                            var newComputerNumber = randomNumber(0,(computerList.length))
                        while ( newComputerNumber == computerNumber) {
                            newComputerNumber = randomNumber(0,(computerList.length))
                        }
                        suggestionObjectList.push(getFiltredResults("type:ordinateur;screenSize:17")[newComputerNumber])
                    }
                    

                    suggestionObjectList.push(getFiltredResults("type:ordinateur;screenSize:undefined")[randomNumber(0,(getFiltredResults("type:ordinateur;screenSize:undefined").length))])
                    suggestionObjectList.push(getFiltredResults("type:ordinateur;operatingSystem:macOS;screenSize:.")[randomNumber(0,(getFiltredResults("type:ordinateur;operatingSystem:macOS;screenSize:.").length))]) //screensize . permet de chercher les Macbook ayany une taille d'écran (avec un point et non les Mac Mini par exemple)
                    suggestionObjectList.push(getFiltredResults("type:smartphone")[randomNumber(0,(getFiltredResults("type:smartphone").length))])





                } else {
                    errorHomeSuggestions("Une erreur s'est produite de notre côté.. Nous en sommes désolés et faisons tout notre possible pour résoudre le problème.")
                }

                if (suggestionObjectList.length >=1) {
                    var HTMLTextBoxes = ""
                    for (var i = 0; i < suggestionObjectList.length; i++) {
                        HTMLTextBoxes = HTMLTextBoxes + getTextProductBox(suggestionObjectList[i]);
                    }
                    document.getElementById("section-suggestions").innerHTML = '<h2 class="section-title"><i class="fas fa-lightbulb"></i> Suggestions</h2><div  class="flex-boxes suggestion-boxes">' + HTMLTextBoxes + '</div>'
                    // console.log(HTMLTextBoxes,suggestionObjectList)
                    
                }





            } else {
                errorHomeSuggestions("Une erreur s'est produite. Reconnectez-vous et tentez de ressaisir votre âge.","Se déconnecter","disconnect()")
            }
        } else {
            errorHomeSuggestions("Vous n'êtes pas connecté(e) à votre compte...","Se connecter","connect()")
        } 
    } else {
        errorHomeSuggestions("Vous n'avez pas accepté les cookies","Accepter les cookies","acceptCookies('homeSuggestions()')")
    }
}


function errorHomeSuggestions(reason,nameOfButton2,actionOfButton2) {
    if (nameOfButton2 && actionOfButton2) {
        document.getElementById("section-suggestions").innerHTML = '<h2 class="section-title"><i class="fas fa-lightbulb"></i> Suggestions</h2><div class="suggestion-error-menu"><div style="flex:1;text-align:justify;min-width:300px;"><p>Nous n\'avons pas pu afficher vos suggestions<br>'+ reason +'</p></div><div style="display:flex;flex:1"><div style="flex:1;text-align:center;display:flex;min-width:150px;align-items:center"><button style="flex:1" onclick="' + actionOfButton2 + '">' + nameOfButton2 + '</button></div><div style="flex:1;text-align:center;display:flex;min-width:50px;align-items:center"><button class="red-button" style="flex:1" onclick="getElementById(\'section-suggestions\').innerHTML = \'\'">Annuler</button></div></div></div>';

    } else {
        document.getElementById("section-suggestions").innerHTML = '<h2 class="section-title"><i class="fas fa-lightbulb"></i> Suggestions</h2><div class="suggestion-error-menu"><div style="flex:5;text-align:justify;"><p>Nous n\'avons pas pu afficher vos suggestions<br>'+ reason +'</p></div><div style="flex:1;text-align:center;display:flex;min-width:50px;align-items:center"><button class="red-button" style="flex:1;min-width:50px;" onclick="getElementById(\'section-suggestions\').innerHTML = \'\'">Ok</button></div></div>';
    }
}



function getFiltredResults(filterslikeURLfilters) {
    // filtres sous forme d'url : 
    var filters = translateFilterUrlToArray(filterslikeURLfilters);
    // console.log("Les filtres associés à la fonction getFiltredResults(...)sont : ");
    // console.log(filters);
    var resultObjectsList = [];
    var numberOfFilters = filters.length/2
    console.log(numberOfFilters)
    if (numberOfFilters >= 1) {
        var resultObjectsList1 = [];
        for (var i = 0; i < searchEngine(filters[0], filters[1])[1].length; i++) {
            resultObjectsList1.push(searchEngine(filters[0], filters[1])[1][i]); 
        }

        resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList1)
        // console.log(resultObjectsList)
        if (numberOfFilters >= 2 && resultObjectsList1.length != 0) { //s'il y a 2 filtres ou plus
            var resultObjectsList2 = [];
            for (var i = 0; i < searchEngine(filters[2], filters[3])[1].length; i++) {
                resultObjectsList2.push(searchEngine(filters[2], filters[3])[1][i]); 
            }
            resultObjectsList = getCommonElements(resultObjectsList1,resultObjectsList2)
            // console.log(resultObjectsList)
            
            if (numberOfFilters >= 3 && resultObjectsList1.length != 0) { //s'il y a 3 filtres ou plus
                var resultObjectsList3 = [];
                for (var i = 0; i < searchEngine(filters[4], filters[5])[1].length; i++) {
                    resultObjectsList3.push(searchEngine(filters[4], filters[5])[1][i]); 
                }
                resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList3)
                // console.log(resultObjectsList)

                if (numberOfFilters >= 4 && resultObjectsList1.length != 0) { //s'il y a 4 filtres ou plus (pas plus de 4.)
                    var resultObjectsList4 = [];
                    for (var i = 0; i < searchEngine(filters[6], filters[7])[1].length; i++) {
                        resultObjectsList4.push(searchEngine(filters[6], filters[7])[1][i]); 
                    }
                    resultObjectsList = getCommonElements(resultObjectsList,resultObjectsList4)
                    // console.log(resultObjectsList)
    
                } if (resultObjectsList.length >=1) {
                    return(sortProductsArrayByDate(resultObjectsList));

                    } else {

                    }
            } else if (resultObjectsList.length >=1) {
                return(sortProductsArrayByDate(resultObjectsList));

            }


        } else if (resultObjectsList.length >=1) {
            return(sortProductsArrayByDate(resultObjectsList));

        }
    }
}


function sortProductsArrayByDate(productArray) {
    productArray.sort(function(a,b) { //trie les objets par date de sortie décroissante
        const dateDeSortieA = Number(a.dateDeSortie);
        const dateDeSortieB = Number(b.dateDeSortie);
        return dateDeSortieB-dateDeSortieA;
    })
    return(productArray);
}


function randomNumber(min, max) {
    number = Math.floor(Math.random() *(max - min)) + min;
    console.log("min = "+min +"\nmax= "+max)
    console.log("random number = "+number)
    return(number)
}