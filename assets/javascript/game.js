// Game logic 

//Create a list of words "
var hangmanList = ["Hello", "Someone like you", "millions years ago", "skyfall"]; 

// Randomly chooses a choice from the options array. This is the Computer's guess.
var randomChoice = hangmanList[Math.floor(Math.random() * hangmanList.length)];
console.log(randomChoice); 

var displayUnderScore = []; 

//Create underscores based on word generated 
function generateUnderScore(){

    for(var i =0; i < randomChoice.length ; i++){
        displayUnderScore.push("_");
    }
    return displayUnderScore; 
}

var remainingLetters = randomChoice.length;
var wins = 0; 
var answerGuessed = []; //Holds the letters already guessed by the player 

console.log("Remaining letter" + remainingLetters); 

document.getElementById("underScore-text").innerHTML = generateUnderScore(); 

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
 
        
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log('userGuess ' + userGuess);
    console.log(event.keyCode);

    //Verify the players guess with the randome generated choice 
    for (var j = 0; j < randomChoice.length; j++) {

        //Player guess equals to randome guess 
        if (randomChoice[j].toLowerCase() === userGuess.toLowerCase()) {
            //show the letter instead of the underscore
            displayUnderScore[j] = userGuess;

            answerGuessed.push(userGuess); 
            //decerese the count 
            remainingLetters--;
        }
    }

    //Win count 
    if ( remainingLetters === 0 ){
        wins += 1; 
    } else {
        //Looses 
    }

    //Show the answer 
    console.log(displayUnderScore.join());

    document.getElementById("underScore-text").innerHTML = displayUnderScore.join(); 
    document.getElementById("noOfGuessRem").innerHTML = remainingLetters; 
    document.getElementById("noOfGuessRem").innerHTML = remainingLetters; 
    document.getElementById("lettersAlreadyGuess").innerHTML = answerGuessed; 
    
}
