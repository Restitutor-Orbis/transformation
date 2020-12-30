function search(event) {
    var x = event.key;
    if (x == "Enter") {
        event.preventDefault()
        let text = document.getElementById("searchbar").value; //laver en string med forespørgslen
		
		//this allows you to customize the search with commands
        /*

        let firstSymbol = text.substring(0,1);  //saves the first symbol
        let containSpace = Boolean(text.includes(" ")); //checks if the query holds a space
        let commandEnd; //declares commandEnd

        if(firstSymbol == "-") {
            if(containSpace) {
            	commandEnd = text.indexOf(" "); //finds the index of the function's end
            } else {
            	commandEnd = text.length;
            }

            let commandName = text.substring(1,commandEnd); //saves the name of the function
            let queryScope = text.length; //finds the index of the query's end
            let query = text.substring(commandEnd + 1,queryScope); //saves the query

            switch(commandName) {
            	case("yt"):
            		url = "https://www.youtube.com/search?q=" + query;
            		break;
            	case("sub"):
            		url = "https://old.reddit.com/r/" + query;
            		break;
            	case("tw"):
            		url = "https://www.twitch.tv/" + query;
            		break;
            	case("twvid"):
            		url = "https://www.twitch.tv/" + query + "/videos";
            		break;
            	case("twitchvideo"):
            		url = "https://www.twitch.tv/" + query + "/videos";
            		break;
            	case("hjem"):
            		url = "index.html";
            		break;
            	case("mail"):
            		url = "https://mail.google.com/mail/u/0/#inbox";
            		break;
            	case("post"):
            		url = "https://mail.google.com/mail/u/0/#inbox";
            		break;
            	default:
					url = "index.html";
					break;
            }

        } else { */
			//default search
			//You can change the search engine you prefer here
         	url = 'https://www.google.com/search?q=' + text;
        /*}*/

    window.open(url, '_self');

    }
}
