// HOW TO EDIT QUOTES
// The script first chooses a random author and then a random quote from this author.
// I don't know how to make it automatically fetch the information, so it is hardcoded
// 1. Change the array of authors to your liking in "getAuthor()"
// 2. Edit the quotes in "pickQuote". This is the boring, manual work :D
// 3. You can add as many authors and quotes as you'd like. I don't know when/if performance starts to drop significantly.

function quotePicker() {
   var authors = getAuthors(); //generates array of authors
   
   var author = pickAuthor(authors); //randomly picks an author

   //author = "Albert Camus";

   var quote = pickQuote(author); //randomly picks a quote

   updateDisplay(author,quote) //updates UI elements
}

function getAuthors() {
    var authors = ["Napoleon Bonaparte", "Augustus Caesar",
    "Julius Caesar", "Marcus Aurelius", "Seneca", "Winston Churchill",
    "Christopher Columbus", "Albert Camus"];

    return authors;
}

function pickAuthor(authors) {

    var choosen = Math.floor((Math.random() * authors.length));    

    return authors[choosen];
}

function pickQuote(author) {   

    let quotes = null;
    quotes = new Map();

    //quotes.set("2",
            //"");  

    switch(author) {
        case("Napoleon Bonaparte"):
            quotes.set("1",
            "Show me a family of readers, and I will show you the people who move the world.");
            quotes.set("2",
            "History is a set of lies agreed upon.");
            quotes.set("3",
            "Imagination governs the world.");
            quotes.set("4",
            "Nothing is more difficult, and therefore more precious, than to be able to decide.");
            quotes.set("5",
            "A leader is a dealer in hope.");
            quotes.set("6",
            "The only victories which leave no regret are those which are gained over ignorance.");
            quotes.set("7",
            "Men are Moved by two levers only: fear and self interest.");
            quotes.set("8",
            "The best way to keep one's word is not to give it.");
            quotes.set("9",
            "He who fears being conquered is sure of defeat.");
            quotes.set("10",
            "In politics, stupidity is not a handicap.");
            quotes.set("11",
            "Men are more easily governed through their vices than through their virtues.");
            quotes.set("12",
            "Music is what tell us that the human race is greater than we realize.");
            quotes.set("13",
            "Four hostile newspapers are more to be feared than a thousand bayonets..");
            quotes.set("14",
            "Glory is fleeting, but obscurity is forever.");
            quotes.set("15",
            "If we could read the past histories of all our enemies we would disregard all hostility for them.");
            quotes.set("16",
            "A throne is only a bench covered with velvet.");
            break;
        case("Augustus Caesar"):
            quotes.set("1",
            "You cheer my heart, who build as if Rome would be eternal.");
            quotes.set("2",
            "We write our names in the sand: and then the waves roll in and wash them away.");
            quotes.set("3",
            "Only that which is well done is quickly done");
            break;
        case("Julius Caesar"):
            quotes.set("1",
            "As a rule, men worry more about what they can't see than about what they can.");           
            quotes.set("2",
            "Veni, Vedi, Veci");
            quotes.set("3",
            "In war, events of importance are the result of trivial causes");
            quotes.set("4",
            "The die is cast");
            quotes.set("5",
            "What we wish, we readily believe, and what we ourselves think, we imagine others think also.");
            break;
        case("Marcus Aurelius"):
            quotes.set("1",
            "It is not death that a man should fear, but he should fear never beginning to live.");    
            quotes.set("2",
            "Dwell on the beauty of life. Watch the stars, and see yourself running with them.");
            quotes.set("3",
            "You have power over your mind - not outside events. Realize this, and you will find strength.");
            quotes.set("4",
            "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.");
            quotes.set("5",
            "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love");
            quotes.set("6",
            "Our life is what our thoughts make it.");
            quotes.set("7",
            "If it is not right do not do it; if it is not true do not say it.");
            quotes.set("8",
            "Very little is needed to make a happy life; it is all within yourself in your way of thinking.");
            quotes.set("9",
            "Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?");
            quotes.set("10",
            "The best revenge is not to be like your enemy.");
            quotes.set("11",
            "Reject your sense of injury and the injury itself disappears.");
            quotes.set("12",
            "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.");
            quotes.set("13",
            "How much more grievous are the consequences of anger than the causes of it.");
            quotes.set("14",
            "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.");
            quotes.set("15",
            "How much time he gains who does not look to see what his neighbour says or does or thinks, but only at what he does himself, to make it just and holy.");
            quotes.set("16",
            "You are a little soul carrying about a corpse, as Epictetus used to say.");
            quotes.set("17",
            "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.");
            quotes.set("18",
            "For it is in your power to retire into yourself whenever you choose.");
            quotes.set("19",
            "Remember that very little is needed to make a happy life.");
            quotes.set("20",
            "Nothing happens to anybody which he is not fitted by nature to bear.");
            quotes.set("21",
            "Don't go on discussing what a good person should be. Just be one.");
            quotes.set("22",
            "Receive without conceit, release without struggle.");
            quotes.set("23",
            "Life is neither good or evil, but only a place for good and evil.");
            quotes.set("24",
            "Whatever anyone does or says, I must be emerald and keep my colour");
            quotes.set("25",
            "If any man despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.");
            quotes.set("26",
            "Do what you will. Even if you tear yourself apart, most people will continue doing the same things.");
            quotes.set("27",
            "Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs?");
            quotes.set("28",
            "Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.");
            quotes.set("29",
            "A person's worth is measured by the worth of what he values.");
            quotes.set("30",
            "The memory of everything is very soon overwhelmed in time.");
            quotes.set("31",
            "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.");
            quotes.set("32",
            "Confine yourself to the present.");
            quotes.set("33",
            "Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it.");
            quotes.set("34",
            "I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.");
            quotes.set("35",
            "How ridiculous and unrealistic is the man who is astonished at anything that happens in life.");
            quotes.set("36",
            "Death smiles at us all; all we can do is smile back.");
            quotes.set("37",
            "No man is happy who does not think himself so.");
            quotes.set("38",
            "Live out your life in truth and justice, tolerant of those who are neither true nor just.");
            break;
        case("Seneca"):
            quotes.set("1",
            "All cruelty springs from weakness.");    
            quotes.set("2",
            "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.");
            quotes.set("3",
            "There is no easy way from the earth to the stars");
            quotes.set("4",
            "Difficulties strengthen the mind, as labor does the body.");
            quotes.set("5",
            "We suffer more often in imagination than in reality.");
            quotes.set("6",
            "You act like mortals in all that you fear, and like immortals in all that you desire");
            quotes.set("7",
            "Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older.");
            quotes.set("8",
            "As is a tale, so is life: not how long it is, but how good it is, is what matters.");
            quotes.set("9",
            "If a man knows not to which port he sails, no wind is favorable.");
            quotes.set("10",
            "It is not the man who has too little, but the man who craves more, that is poor.");
            quotes.set("11",
            "What need is there to weep over parts of life? The whole of it calls for tears.");
            quotes.set("12",
            "No man was ever wise by chance.");
            quotes.set("13",
            "Associate with people who are likely to improve you.");
            quotes.set("14",
            "I shall never be ashamed of citing a bad author if the line is good.");
            quotes.set("15",
            "Only time can heal what reason cannot.");
            quotes.set("16",
            "Most powerful is he who has himself in his own power.");
            quotes.set("17",
            "Ignorance is the cause of fear.");
            quotes.set("18",
            "Wealth is the slave of a wise man. The master of a fool.");
            quotes.set("19",
            "If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich.");
            quotes.set("20",
            "People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.");
            quotes.set("21",
            "Fate leads the willing and drags along the reluctant.");
            quotes.set("22",
            "Leisure without books is death, and burial of a man alive.");
            quotes.set("23",
            "Often a very old man has no other proof of his long life than his age.");
            quotes.set("24",
            "A gift consists not in what is done or given, but in the intention of the giver or doer.");
            quotes.set("25",
            "Life is long if you know how to use it.");
            quotes.set("26",
            "Nothing is more honorable than a grateful heart.");
            quotes.set("27",
            "To wish to be well is a part of becoming well.");
            quotes.set("28",
            "While we wait for life, life passes");
            quotes.set("29",
            "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.");
            quotes.set("30",
            "Regard a friend as loyal, and you will make him loyal.");
            quotes.set("31",
            "It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.");
            quotes.set("32",
            "He who has injured thee was either stronger or weaker than you. If weaker, spare him; if stronger, spare yourself.");
            quotes.set("33",
            "You should live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.");
            quotes.set("34",
            "It is more civilized to make fun of life than to bewail it.");
            quotes.set("35",
            "To win true freeedom you must be a slave to philosophy.");
            quotes.set("36",
            "Whatever can happen at any time can happen today.");
            quotes.set("37",
            "The best ideas are common property.");
            quotes.set("38",
            "Of this one thing make sure against your dying day - that your faults die before you do.");
            quotes.set("39",
            "No man is crushed by misfortune unless he has first been deceived by prosperity.");
            break;
        case("Winston Churchill"):
            quotes.set("1",
            "The greatest lesson in life is to know that even fools are right sometimes.");
            quotes.set("2",
            "We make a living by what we get. We make a life by what we give.");  
            quotes.set("3",
            "Don't interrupt me while I'm interrupting.");  
            quotes.set("4",
            "He has all the virtues I dislike and none of the vices I admire.");  
            quotes.set("5",
            "An appeaser is one who feeds a crocodile, hoping it will eat him last.");  
            quotes.set("6",
            "If you are going through hell, keep going");  
            quotes.set("7",
            "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing had happened."); 
            quotes.set("8",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.");  
            quotes.set("9",
            "A fanatic is one who can't change his mind and won't change the subject.");  
            break;
        case("Christopher Columbus"):
            quotes.set("1",
            "Following the light of the sun, we left the Old World.");    
            quotes.set("2",
            "Life has more imagination than we carry in our dreams.");   
            quotes.set("3",
            "You can never cross the ocean unless you have the courage to lose sight of the shore.");  
            quotes.set("4",
            "It is easy to discover what another has discovered before");   
            break;
        case("Albert Camus"):
            quotes.set("1",
            "Truth, like light, blinds. Falsehood, on the contrary, is a beautiful twilight that enhances every object.");    
            quotes.set("2",
            "Every revolutionary ends up either by becoming an oppressor or a heretic.");
            quotes.set("3",
            "The only real progress lies in learning to be wrong all alone.");
            quotes.set("4",
            "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.");
            quotes.set("5",
            "A man without ethics is a wild beast loosed upon this world.");
            quotes.set("6",
            "Those who lack the courage will always find a philosophy to justify it.");
            quotes.set("7",
            "There is the good and the bad, the great and the low, the just and the unjust. I swear to you that all that will never change.");
            quotes.set("8",
            "He who despairs of the human condition is a coward, but he who has hope for it is a fool.");
            quotes.set("9",
            "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.");
            quotes.set("10",
            "Absolute virtue is impossible and the republic of forgiveness leads, with implacable logic, to the republic of the guillotine.");
            quotes.set("11",
            "By definition, a government has no conscience. Sometimes it has a policy, but nothing more.");
            quotes.set("12",
            "Man is an idea, and a precious small idea once he turns his back on love.");
            quotes.set("13",
            "Seeking what is true is not seeking what is desirable.");
            quotes.set("14",
            "What is called a reason for living is also an excellent reason for dying.");
            quotes.set("15",
            "I know simply that the sky will last longer than I.");
            quotes.set("16",
            "A man devoid of hope and conscious of being so has ceased to belong to the future.");
            quotes.set("17",
            "The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.");
            quotes.set("18",
            "A man is more a man through the things he keeps to himself than through those he says.");
            quotes.set("19",
            "Existence is illusory and it is eternal.");
            quotes.set("20",
            "Like great works, deep feelings always mean more than they are conscious of saying.");
            break;
    }

    var choosen = Math.floor((Math.random() * quotes.size) + 1);    

    choosen += ""; //convert to string

    return quotes.get(choosen);
}

function updateDisplay(author, quote) {
    document.getElementById("quoteAuthor").innerHTML = author;
    document.getElementById("quoteText").innerHTML = quote;
}