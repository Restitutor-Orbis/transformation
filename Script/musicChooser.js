function musicPicker() {
    var bands = getBands(); //generates array of bands
    
    var band = pickBand(bands); //randomly picks a band

    console.log(band);
 
    //band = "Aephanemer";
 
    var image = pickImage(band); //randomly picks an image from the given band

    console.log(image);
 
    updateImageDisplay(image) //updates UI elements
 }

 function getBands() {
     var bands = ["Aephanemer", "Afsky", "Alcest",
     "Arch Enemy", "Battle Beast", "Hinayana", "Myrkur",
     "Visions of Atlantis", "Wuthering Heights", "Æther Realm"];

     return bands;
 }

function pickBand(bands) {   
    var choosenBand = Math.floor((Math.random() * bands.length)); 

    return bands[choosenBand];
}


function pickImage(band) {
    images = new Map();

    switch(band) {
        case("Aephanemer"):
            images.set("1",
            "aephanemer_prokopton.jpg");
            break;
        case("Afsky"):
            images.set("1",
            "afsky_oftedød.jpg");
            break;
        case("Alcest"):
            images.set("1",
            "alcest_spiritual.jpg");
            break;
        case("Arch Enemy"):
            images.set("1",
            "archenemy_willpower.jpg");
            break;
        case("Battle Beast"):
            images.set("1",
            "battlebeast_pain.jpg");
            images.set("2",
            "battlebeast_unholy.jpg");
            break;
        case("Hinayana"):
            images.set("1",
            "hinayana_cosmic.jpg");
            break;
        case("Myrkur"):
            images.set("1",
            "myrkur_folkesange.jpg");
            images.set("2",
            "myrkur_m.jpg");
            break;
        case("Visions of Atlantis"):
            images.set("1",
            "visionsatlantis_wanderers.jpg");
            break;
        case("Wuthering Heights"):
            images.set("1",
            "wuthering_farfrom.jpg");
            images.set("2",
            "wuthering_shadow.jpg");
            images.set("3",
            "wuthering_salt.jpg");
            break;
        case("Æther Realm"):
            images.set("1",
            "æther_redneckvikings.jpg");
            images.set("2",
            "æther_tarot_old.jpg");
            images.set("3",
            "æther_tarot_new.jpg");
            break;
    }

    var choosenImage = Math.floor((Math.random() * images.size) + 1);    

    choosenImage += ""; //convert to string

    return images.get(choosenImage);
}

function updateImageDisplay(image) {
    document.getElementById("imageDisplayer").style.backgroundImage = "url('./Images/Albums/" + image + "')";
}

