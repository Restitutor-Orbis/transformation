//HOW TO EDIT IMAGES
// 1. Add your images to a folder under Images. You can have more than one.
// 1. Currently the scripts chooses a folder at random.
// 1. Change the folders you use in "getFolders()"
// 2. Change the artists you have in "getArtists()"
// 3. Change the images for each artist in "pickImage(artist)".
// 3. These are all hardcoded, so make sure you get the file-name and -type correct 

function artPicker() {
    var folders = getFolders(); //generates array of folders
    var folder = pickFolder(folders); //randomly picks a folder
    var artists = getArtists(); //generates array of artists
    var artist = pickArtist(artists); //randomly picks an artist
 
    //band = "Aephanemer";
 
    var image = pickImage(artist); //randomly picks an image from the given arist
 
    updateImageDisplay(image, folder) //updates UI elements
 }

function getFolders() {
    var folders = ["Albums"];
    return folders;
}

function pickFolder(folders) {
    var choosenFolder = Math.floor((Math.random() * folders.length)); 

    return folders[choosenFolder];
}

 function getArtists() {
     var bands = ["Aephanemer", "Afsky", "Alcest",
     "Arch Enemy", "Battle Beast", "Hinayana", "Myrkur",
     "Visions of Atlantis", "Wuthering Heights", "Æther Realm"];

     return bands;
 }

function pickArtist(artists) {   
    var choosenArtist = Math.floor((Math.random() * artists.length)); 

    return artists[choosenArtist];
}


function pickImage(artist) {
    images = new Map();

    switch(artist) {
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

function updateImageDisplay(image, folder) {
    document.getElementById("imageDisplayer").style.backgroundImage = "url('./Images/" + folder + "/" + image + "')";
}

