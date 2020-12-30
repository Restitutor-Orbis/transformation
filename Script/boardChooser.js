function boardPicker() {
    var platforms = getPlatforms();
    var boards = []; //for checking if board already is used

    //creates the first board
    var platform1 = generateRandomPlatform(platforms);
    var board1 = generateRandomBoard(platform1);
    boards.push(board1);

    //creates the second board
    var platforms = getPlatforms();
    var platform2 = generateRandomPlatform(platforms);
    var board2 = generateRandomBoard(platform2);
    while(boards.includes(board2)) { //makes sure the board hasn't already been used
        board2 = generateRandomBoard(platform2);
    }
    boards.push(board2);

    //creates the third board
    var platforms = getPlatforms();
    var platform3 = generateRandomPlatform(platforms);
    var board3 = generateRandomBoard(platform3);
    while(boards.includes(board3)) { 
        board3 = generateRandomBoard(platform3);
    }
    boards.push(board3);

    //creates the fourth board
    var platforms = getPlatforms();
    var platform4 = generateRandomPlatform(platforms);
    var board4 = generateRandomBoard(platform4);
    while(boards.includes(board4)) {
        board4 = generateRandomBoard(platform4);
    } 

    //adds all boards to the UI
    updateBoardDisplay(board1, platform1, "board1");
    updateBoardDisplay(board2, platform2, "board2");
    updateBoardDisplay(board3, platform3, "board3");
    updateBoardDisplay(board4, platform4, "board4");
 }
 
 function getPlatforms() {
     var platforms = ["reddit", "chan"];
 
     return platforms;
 }

function generateRandomPlatform(platforms) {
    var platform = getPlatforms(); //generates array of platforms

    var choosenPlatform = Math.floor((Math.random() * platforms.length));    

    return platforms[choosenPlatform];
}

 function generateRandomBoard(platform) {
    var board = pickBoard(platform); //randomly picks a board
    return board;

 }
 
 function pickAuthor(platforms) {
 
     var choosenBoard = Math.floor((Math.random() * platforms.length));    
 
     return platforms[choosenBoard];
 }
 
 function pickBoard(platform) {
     let boards = new Map();

     switch(platform) {
        case("reddit"):
            boards.set("1",
            "cyberpunkgame");
            boards.set("2",
            "lowsodiumcyberpunk");
            boards.set("3",
            "roughromanmemes");
            boards.set("4",
            "drama");
            boards.set("5",
            "forsen");
            boards.set("6",
            "desktops");
            boards.set("7",
            "startpages");
            boards.set("8",
            "LoveForScaplers");
            boards.set("9",
            "LoveForLandlords");
            boards.set("10",
            "ArchitectualRevival");
            boards.set("11",
            "IdiotsInCars");
            boards.set("12",
            "VaporwaveAesthetics");
            boards.set("13",
            "4chan");
            boards.set("14",
            "greentexts");
            boards.set("15",
            "bookscirclejerk");
            boards.set("15",
            "ancientrome");
            boards.set("15",
            "paranormal");
            boards.set("15",
            "powermetal");
            boards.set("16",
            "melodicdeathmetal");
            boards.set("17",
            "worldjerking");
            boards.set("18",
            "stupidpol");
            boards.set("19",
            "spqrposting");
            boards.set("20",
            "metal");
            break;
        case("chan"):
            boards.set("1",
            "/wg/");
            boards.set("2",
            "/wsg/");
            boards.set("3",
            "/g/");
            boards.set("4",
            "/his/");
            boards.set("5",
            "/ck/");
            boards.set("6",
            "/vg/");
            boards.set("7",
            "/v/");
            boards.set("8",
            "/vst/");
            boards.set("9",
            "/mu/");
            boards.set("9",
            "/x/");
            boards.set("9",
            "/sci/");
            boards.set("9",
            "/lit/");
            boards.set("9",
            "/po/");
            boards.set("9",
            "/tv/");
            break;
     }

     var choosenBoard = Math.floor((Math.random() * boards.size) + 1);    

     choosenBoard += ""; //convert to string

     return boards.get(choosenBoard);

 }

 function updateBoardDisplay(boardName, platform, boardID) {
    var preamble;

    switch(platform) {
        case("chan"):
            preamble = "https://boards.4chan.org";
            break;
        case("reddit"):
            preamble = "https://old.reddit.com/r/";
            break;
    }

    var boardURL = preamble + boardName;

     document.getElementById(boardID).href = boardURL;
     document.getElementById(boardID).innerHTML = boardName;
 }