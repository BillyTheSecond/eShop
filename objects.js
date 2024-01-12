//regroupper tous les objets dans ce fichier pour simplifier l'ajout d'autres objets 'product'
// OBJETS 


totalProductList = [
 product1 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "HUAWEI MateBook D14 2020",
    constructeur : "HUAWEI",
    description: "14\" - 512 Go SSD - 8 Go - Intel Core i5 - Windows 10",
    dateDeSortie : "2020",
    screenSize : 14,
    screenDefinition: "FHD (1920x1080)",
    diskType : "SSD",
    storage : "256 - 512 Go",
    ram:"8 Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "AMD Ryzen 5 3500U",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: "Non" ,
    numPad: "Non",
    connections: "1..USB-A 3.0 <br>1..USB-A 2.0<br>1..USB-C<br>1..HDMI<br>1..Port Jack 3,5 mm",
    weight: "1,38 kg",
    frontCamera: "Caméra rétractable 1MP (720p HD)",
    link:"https://consumer.huawei.com/fr/laptops/matebook-d-14-2020/buy/",
    photo:"images/huawei-matebookd14-2020.png",
    price: "699 € (réduction de 150 €)",

},
 product2 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Lenovo IdeaPad 3 17ALC6 (Personnalisé)",
    constructeur : "Lenovo",
    description: "17,3\" - 512 Go SSD - 8 Go - AMD Ryzen 5 5500U - Windows 10",
    dateDeSortie : "2020",
    screenSize : 17.3,
    screenDefinition: "FHD (1920x1080)",
    diskType : "SSD",
    storage : "512 Go",
    ram:"8 Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "AMD Ryzen 5 3500U",
    lecteurEmpreinteDigitale: "Non (customisable)",
    reconnaissanceFaciale: "Non" ,
    numPad: "Oui",
    connections: "1..USB-C 3.2<br>1..USB-A 3.0<br>1..USB-A 2.0<br>1..Port Jack 3,5 mm<br>1..HDMI<br>1..Lecteur de cartes SD",
    weight: "2.2 kg+",
    link:"https://www.lenovo.com/fr/fr/laptops/ideapad/s-series/IdeaPad-3-17ALC6/p/82KVCTO1WWFRFR0/customize?guid=492205e5-aafa-4779-b67d-a9802b2445f7&options_11=&fromEdit=true&transMessageFlag=true#!",
    photo:"images/lenovo_ideapad3.png",
    price: "729 €"
},
 product3 = {
    type: "smartphone",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple iPhone 12",
    constructeur : "Apple",
    description: "6,1\" - 64|128|256 Go - 4 Go - A14 Bionic - iOS 14",
    dateDeSortie : "2020",
    screenSize : 6.1,
    screenDefinition: "2532x1170 pixels",
    diskType : undefined,
    storage : "64 Go - 128 Go - 512 Go",
    ram:"4 Go",
    operatingSystem : "iOS 14",
    processor: "Puce A14 Bionic",
    lecteurEmpreinteDigitale: "Non",
    reconnaissanceFaciale: "Oui, Face ID" ,
    connections: "1..Port Lightning<br>1..Fente nano-SIM",
    link:"https://www.apple.com/fr/shop/buy-iphone/iphone-12",
    weight: "162 g",
    backCamera: "Double appareil photo 12 Mpx : ultra grand‑angle et grand‑angle",
    frontCamera: "Appareil photo 12 Mpx",
    photo:"images/appleIphone12.png",
    price: "Dès 909 €"
},
 product4 = {
    type: "smartphone",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "OnePlus Nord",
    constructeur : "OnePlus",
    description: "6,44\" - 128|256 Go - 8|12 Go - Snapdragon 765G 5G - Android 10",
    dateDeSortie : "2020",
    screenSize : 6.44,
    screenDefinition: "2400x1080 pixels",
    diskType : undefined,
    storage : "128 Go - 256 Go",
    ram:"8 - 12 Go",
    operatingSystem : "OxygenOS basé sur Android 10",
    processor: "Qualcomm Snapdragon 765G 5G",
    lecteurEmpreinteDigitale: "oui",
    reconnaissanceFaciale: "Dévérouillage Facial" ,
    connections: "1..USB-C 2.0<br>1..Fente double nano-SIM",
    link:"https://www.oneplus.com/fr/oneplus-nord?from=nord-specs",
    photo:"images/oneplusNord.png",
    price:"369€|429 € (Prix soldés)"
},
 product5 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple MacBook Air",
    constructeur : "Apple",
    description: "13,3\" - 256|512+ Go SSD - 8+ Go - Apple M1 - macOS Big Sur",
    dateDeSortie : "2020",
    screenSize : 13.3,
    screenDefinition: "2560x1600 pixels avec 227ppp",
    diskType : "SSD",
    storage : "256 - 512 Go (configurable en 1 et 2 To)",
    ram:"8 Go (configurable en 16 Go)",
    operatingSystem : "macOS Big Sur",
    processor: "Puce Apple M1",
    lecteurEmpreinteDigitale: "Oui, Touch ID",
    reconnaissanceFaciale: "Non" ,
    numPad: "Non",
    connections: "2..Ports Thunderbolt (USB 4)<br>1..Port Jack 3,5 mm",
    link:"https://www.apple.com/fr/shop/buy-mac/macbook-air",
    photo:"images/apple-macbookAir2020.png",
    price:"Dès 1129€"
},
 product6 = {
    type: "smartphone",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Samsung Galaxy A52 4G",
    constructeur : "Samsung",
    description: "6,5\" - 128 Go - 6 Go - Kryo 465 Gold & Silver - Android 11",
    dateDeSortie : "2021",
    screenSize : 6.5,
    screenDefinition: "2400x1080 pixels avec 407ppp",
    diskType : undefined,
    storage : "128 Go",
    ram:"6 Go",
    operatingSystem : "Android 11",
    processor: "Kryo 465 Gold & Silver - 2.3 GHz",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: undefined ,
    connections:"1..Port USB-C 2.0<br>1..Prise Jack 3,5 mm",
    link:"https://www.samsung.com/fr/smartphones/galaxy-a/galaxy-a52-5g/",
    photo:"images/samsung-galaxyA52-4G.png",
    price:"349 €"
},
product7 = {
    type: "smartphone",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Google Pixel 4a",
    constructeur : "Google",
    description: "5,81\" - 128 Go - 6 Go - Snapdragon 730 - Android 10 préinstallé",
    dateDeSortie : "2020",
    screenSize : 5.81,
    screenDefinition: "1080x2340 pixels avec 443ppp",
    diskType : undefined,
    storage : "128 Go",
    ram:"6 Go",
    operatingSystem : "Android 10",
    processor: "Qualcomm Snapdragon 730",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: undefined ,
    connections:"1..Port USB-C 3.1<br>1..Prise Jack 3,5 mm",
    link:"https://store.google.com/fr/config/pixel_4a?hl=fr",
    photo:"images/google-pixel-4a.png",
    price:"349 €"
},
product8 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "HUAWEI MateBook X Pro 2021",
    constructeur : "HUAWEI",
    description: "13,9\" - 512 Go+ SSD - 16 Go - Intel Core i7 (11th Gen) - Windows 10",
    dateDeSortie : "2021",
    screenSize : 14,
    screenDefinition: "3000x2000 pixels avec 260ppp",
    diskType : "SSD",
    storage : "512 Go - 1 To",
    ram:"16 Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "Intel Core i7 (11th Gen) | Intel Core i5 (11th Gen)",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: "Non" ,
    numPad: "Non",
    connections: "2..USB Type-C<br>1..USB-A 3.2<br>1..Prise Jack 3,5mm",
    weight: "1,33 kg",
    frontCamera: "Caméra rétractable 1MP (720p HD)",
    link:"https://consumer.huawei.com/fr/laptops/matebook-x-pro-2021/buy/",
    photo:"images/huawei-matebookxpro2021.png",
    price:"À partir de 1499,99€"
},
product9 = {
    type: "smartphone",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple iPhone XR",
    constructeur : "Apple",
    description: "6,1\" - 64 Go | 128 Go - 3 Go - Puce A12 Bionic - iOS 14",
    dateDeSortie : "2018",
    screenSize : 6.1,
    screenDefinition: "1792x828 pixels avec 326ppp",
    diskType : undefined,
    storage : "64 Go - 128 Go",
    ram:"3 Go",
    operatingSystem : "iOS 14",
    processor: "Puce A12 Bionic",
    lecteurEmpreinteDigitale: "Non",
    reconnaissanceFaciale: "Oui, FaceID" ,
    connections: "1..Port Lightning<br>1..Fente nano-SIM",
    link:"https://www.apple.com/fr/shop/buy-iphone/iphone-xr",
    photo:"images/apple-iphonexr.png",
    price:"589€ - 639€"
},
product10 = {
    type: "tablette",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple iPad 8",
    constructeur : "Apple",
    description: "10.2\" - 32 Go|128 Go - 3 Go - Puce A12 Bionic  - iPadOS 14",
    dateDeSortie : "2020",
    screenSize : 10.2,
    screenDefinition: "2160 x 1620 pixels à 264ppp",
    diskType : undefined,
    storage : "32 Go - 128 Go",
    ram:"3 Go",
    operatingSystem : "iPadOS 14",
    processor: "Puce A12 Bionic avec architecture 64 bits",
    lecteurEmpreinteDigitale: "Oui,Touch ID",
    reconnaissanceFaciale: "Non" ,
    connections: "1..Port Lightning<br>1..Prise Jack 3.5mm",
    weight: "490g",
    link:"https://www.apple.com/fr/shop/buy-ipad/ipad-10-2",
    photo:"images/apple-ipad8.png",
    price:"Dès 389€"
},
product11 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple Mac Mini M1",
    constructeur : "Apple",
    description: "Ordinateur de bureau - 256 Go|512 Go - 8 Go - Puce Apple M1  - macOS Big Sur",
    dateDeSortie : "2020",
    screenSize : undefined,
    screenDefinition: undefined,
    diskType : "SSD",
    storage : "256Go|512Go+",
    ram:"8Go+",
    operatingSystem : "macOS Big Sur",
    processor: "Puce Apple M1",
    lecteurEmpreinteDigitale: "Non",
    reconnaissanceFaciale: "Non" ,
    connections: "1..Port Ethernet<br>2..Ports Thunderbolt/USB 4<br>1..Port HDMI 2.0<br>2..Ports USB-A<br>1..Prise Jack 3.5mm",
    weight: "1.2 kg",
    link:"https://www.apple.com/fr/shop/buy-mac/mac-mini",
    photo:"images/apple-macmini.png",
    price: "799€|1029€"
},
product12 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Asus VivoBook 17 S712",
    constructeur : "Asus",
    description: "512 Go - 8 Go - Intel i7  - Windows 10 Famille & Etudiant",
    dateDeSortie : "2020",
    screenSize : 17.3,
    screenDefinition: "1600 x 900 pixels",
    diskType : "SSD",
    storage : "512Go",
    ram:"8Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "Intel Core i7 1.30 GHz",
    lecteurEmpreinteDigitale: "Non",
    reconnaissanceFaciale: "Non" ,
    numPad: "Oui",
    connections: "1..Port HDMI<br>1..Port USB Type-C 3.2<br>1Port USB Type-A 3.2<br>2..Port USB Type-A 2.0<br>1..Prise Jack 3.5mm<br>1..Lecteur de cartes SD",
    weight: "2.3 kg",
    link:"https://www.boulanger.com/ref/1156709",
    photo:"images/asus-vivobook17.png",
    price: "849€ (-15%)",
    note:"Cet ordinateur portable 17 pouces est un des rares de sa catégorie à proposer de bonnes caractéristiques (SSD de 512 Go, 8Go de RAM, intel i7,nombre de ports...). Cependant, la résolution de l'écran est assez faible et l'écran est de basse qualité (angle de vue, ombres...)."
},
product13 = {
    type: "tablette",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Samsung Galaxy tab S6 Lite",
    constructeur : "Samsung",
    description: "64 Go - 4 Go - Android",
    dateDeSortie : "2020",
    screenSize : 10.4,
    screenDefinition: "2000 x 1200 pixels",
    diskType : undefined,
    storage : "64Go",
    ram:"4Go",
    operatingSystem : "Android",
    processor: undefined,
    lecteurEmpreinteDigitale: "Non",
    reconnaissanceFaciale: "Non" ,
    numPad: "Oui",
    connections: "1..Port USB Type-C 2.0<br>1..Prise Jack 3.5mm<br>1..Port Carte MicroSD",
    weight: "465 g",
    frontCamera: "5.0 Mpx",
    backCamera: "8.0 Mpx",
    link:"https://www.samsung.com/fr/tablets/galaxy-tab-s/galaxy-tab-s6-lite-10-4-inch-gray-64gb-wi-fi-sm-p610nzaaxef/buy/",
    photo:"images/samsung-galaxytabs6lite.png",
    price: "399€",
    note:"Avec cette tablette, samsung propose un très bon rapport qualité-prix. Attention cependant au stockage de la tablette. 64 Go est une faible quantité aujourd'hui, si vous prenez des photos, installez des applications régulièrement, vous pouvez être bloqués rapidemment. Lorsque vous recevez la tablette,  seuls 49,2 Go sont réellement disponibles (le reste du stockage est occupé par le système d'exploitation). Ne vous inquiétez pas! vous pourrez rajouter du stockage en achetant une carte MicroSD."
},
product14 = {
    type: "tablette",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "Apple iPad Mini",
    constructeur : "Apple",
    description: "64 Go|256 Go - 4 Go - iPadOS",
    dateDeSortie : "2021",
    screenSize : 8.3,
    screenDefinition: "2266x1488 pixels à 326 ppp",
    diskType : undefined,
    storage : "64 Go | 256 Go",
    ram: undefined,
    operatingSystem : "iPadOS 15",
    processor: "Puce A15 Bionic avec architecture 64 bits",
    lecteurEmpreinteDigitale: "Oui, Touch ID sur le bouton de verrouillage",
    reconnaissanceFaciale: "Non" ,
    numPad: undefined,
    connections: "1..Connecteur USB Type-C<br>1..Support pour carte nano-SIM (uniquement sur les modèles Wi-Fi + Cellular)",
    weight: "293 g",
    frontCamera: "Ultra grand-angle 12 Mpx",
    backCamera: "Grand-angle 12 Mpx",
    link:"https://www.apple.com/fr/shop/buy-ipad/ipad-mini",
    photo:"images/apple-ipadmini.png",
    price: "Dès 559 €",
    note:"Nous vous déconseillons de prendre seulement 64 Go de stockage. Vous serez très vite bloqués et ne pourrez plus prendre de photos ou installer d'applications."
},
product15 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "HUAWEI MateBook 14 2021",
    constructeur : "HUAWEI",
    description: "14\" - 512 Go SSD - 16 Go - Intel Core i7 - Windows 10",
    dateDeSortie : "2021",
    screenSize : 14,
    screenDefinition: "2160x1440, 185 PPI",
    diskType : "SSD",
    storage : "512 Go",
    ram:"16 Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "Intel Core i7",
    graphicCard: "Puce graphique Intel Iris Xe",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: "Non" ,
    numPad: "Non",
    connections: "1..USB-C (transfert de données, chargement  et DisplayPort)<br>2..USB 3.2<br>1..HDMI<br>1..Prise casque et microphone 3,5 mm",
    weight: "1.49 kg",
    frontCamera: "Caméra HD 720p encastrée dans le clavier",
    link:"https://consumer.huawei.com/fr/laptops/matebook-d-14-2020/buy/",
    photo:"images/huawei-matebook-14-2021.png",
    price: "999,99€ (<del>1249,99€</del>)",
    note:"Le <strong>ratio de l'écran</strong> est diffère de la plupart des ordinateur portables. Il est de 3:2, et non pas de 16:9. Cela peut être dérangeant.<br>Une option d'écran tactile peut être ajoutée"

},
product16 = {
    type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "HUAWEI MateBook 14 2020",
    constructeur : "HUAWEI",
    description: "14\" - 512 Go SSD - 16 Go - Intel Core i7 - Windows 10",
    dateDeSortie : "2020",
    screenSize : 14,
    screenDefinition: "2160x1440, 185 PPI",
    diskType : "SSD",
    storage : "512 Go",
    ram:"16 Go",
    operatingSystem : "Windows 10 Famille & Etudiant",
    processor: "Intel Core i7",
    graphicCard: "Puce graphique Intel Iris Xe",
    lecteurEmpreinteDigitale: "Oui",
    reconnaissanceFaciale: "Non" ,
    numPad: "Non",
    connections: "1..USB-C (transfert de données, chargement  et DisplayPort)<br>2..USB 3.2<br>1..HDMI<br>1..Prise casque et microphone 3,5 mm",
    weight: "1.49 kg",
    frontCamera: "Caméra HD 720p encastrée dans le clavier",
    link:"https://consumer.huawei.com/fr/laptops/matebook-d-14-2020/buy/",
    photo:"images/huawei-matebook-14-2021.png",
    price: "999,99€ (<del>1249,99€</del>)",
    note:"Le <strong>ratio de l'écran</strong> est diffère de la plupart des ordinateur portables. Il est de 3:2, et non pas de 16:9. Cela peut être dérangeant.<br>Une option d'écran tactile peut être ajoutée"

},
// product17 = {
//     type: "ordinateur",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
//     nom: "HUAWEI MateBook 14 2020",
//     constructeur : "HUAWEI",
//     description: "14\" - 512 Go SSD - 16 Go - Intel Core i7 - Windows 10",
//     dateDeSortie : "2020",
//     screenSize : 14,
//     screenDefinition: "2160x1440, 185 PPI",
//     diskType : "SSD",
//     storage : "512 Go",
//     ram:"16 Go",
//     operatingSystem : "Windows 10 Famille & Etudiant",
//     processor: "Intel Core i7",
//     graphicCard: "Puce graphique Intel Iris Xe",
//     lecteurEmpreinteDigitale: "Oui",
//     reconnaissanceFaciale: "Non" ,
//     numPad: "Non",
//     connections: "1..USB-C (transfert de données, chargement  et DisplayPort)<br>2..USB 3.2<br>1..HDMI<br>1..Prise casque et microphone 3,5 mm",
//     weight: "1.49 kg",
//     frontCamera: "Caméra HD 720p encastrée dans le clavier",
//     link:"https://consumer.huawei.com/fr/laptops/matebook-d-14-2020/buy/",
//     photo:"images/huawei-matebook-14-2021.png",
//     price: "999,99€ (<del>1249,99€</del>)",
//     note:"Le <strong>ratio de l'écran</strong> est diffère de la plupart des ordinateur portables. Il est de 3:2, et non pas de 16:9. Cela peut être dérangeant.<br>Une option d'écran tactile peut être ajoutée"

// },



]



// const computerList =[product1,product2, product5, product8]
// const smartphoneList = [product3, product4, product6, product7, product9]
// const totalProductList = [product1, product2, product3, product4, product5, product6, product7,product8, product9]





// Systèmes d'exploitation 

const totalOsList= [
os1 = {
    nom: "Windows",
    photo:"images/os-illustrations/windows11.png",

}
,
os2 = {
    nom: "iOS",
    photo:"images/os-illustrations/ios.png",

}
,
os3 = {
    nom: "Android",
    photo:"images/os-illustrations/android.png",

}
,
os4 = {
    nom: "Windows 10 Famille & Etudiant",
    photo:"images/os-illustrations/windows10.png",

}
,
os5 = {
    nom: "iOS 14",
    photo:"images/os-illustrations/ios14.png",

}
,
os6 = {
    nom: "Android 10",
    photo:"images/os-illustrations/android10.png",

}
,
os7 = {
    nom: "Android 11",
    photo:"images/os-illustrations/android11.png",

}
,
os8 = {
    nom: "OxygenOS basé sur Android 10",
    photo:"images/os-illustrations/oxygenos.png",

}
,
os9 = {
    nom: "macOS",
    photo:"images/os-illustrations/macos.png",

}
,
os10 = {
    nom: "macOS Big Sur",
    photo:"images/os-illustrations/macos-bigsur.png",

}
,
os11 = {
    nom: "iPadOS",
    photo: "images/os-illustrations/ipados.png"
}
,
os12 = {
    nom: "iPadOS 14",
    photo: "images/os-illustrations/ipados14.png"
},
os13 = {
    nom: "iPadOS 15",
    photo: "images/os-illustrations/ipados15.png"
},
os14 ={
    nom: "iOS 15",
    photo: "images/os-illustrations/ios15.png"
}
]

// const totalOsList= [os1, os2, os3, os4, os5, os6, os7, os8, os9, os10, os11]







// Marques
const totalConstructorList = [
constructor1 = {
    nom: "Apple",
    photo: "images/constructor-illustrations/apple.png"
},
constructor2 = {
    nom: "HUAWEI",
    photo: "images/constructor-illustrations/huawei.png"
},
constructor3 = {
    nom: "Lenovo",
    photo: "images/constructor-illustrations/lenovo.png"
},
constructor4 = {
    nom: "OnePlus",
    photo: "images/constructor-illustrations/oneplus.png"
},
constructor5 = {
    nom: "Google",
    photo: "images/constructor-illustrations/google.png"
},
constructor6 = {
    nom: "Samsung",
    photo: "images/constructor-illustrations/samsung.png"
},
constructor7 = {
    nom: "Asus",
    photo: "images/constructor-illustrations/asus.png"
}
]

// const totalConstructorList= [constructor1, constructor2, constructor3, constructor4, constructor5, constructor6]



// traduction code-français

const frenchShownSpecs = {
    type: "",   //ATTENTION A BIEN METTRE DES VIRGULES et non des points virgules  !!
    nom: "",
    constructeur : "Marque",
    description: "",
    dateDeSortie : "Date de Sortie",
    screenSize : "Taille d'écran",
    screenDefinition: "Définition de l'écran",
    diskType : "Type de disque",
    storage : "Stockage",
    ram:"Mémoire vive (RAM)",
    operatingSystem : "Système d'exploitation",
    processor: "Processeur",
    graphicCard: "Carte Graphique",
    lecteurEmpreinteDigitale: "Lecteur d'empreintes digitales",
    reconnaissanceFaciale: "Reconnaissance Faciale" ,
    numPad: "Pavé Numérique",
    connections: "Connectiques",
    weight:"Poids",
    frontCamera: "Caméra Frontale",
    backCamera: "Caméra Arrière",
    price:"Prix",

}


const possibleShownSpecsList = ["storage","ram","diskType","screenSize","screenDefinition","processor","graphicCard","lecteurEmpreinteDigitale","reconnaissanceFaciale","connections","numPad","weight","backCamera","frontCamera"]
