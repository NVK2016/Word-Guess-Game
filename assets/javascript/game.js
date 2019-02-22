// Game logic 

// VARIABLES 
// -----------------------------------------

    //Create a list of words "
    var hangmanList = ["Hello", "Someone like you", "millions years ago", "skyfall"]; 

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomChoice = hangmanList[Math.floor(Math.random() * hangmanList.length)];
    console.log("Random generated Word: " + randomChoice); 

    //DISPLAYS _ _ _ for the random word geenrated 
    var displayUnderScore = []; 
    //Takes the length of the random word generated 
    var remainingLetters = randomChoice.length;

    var wins = 0; 
    //Holds the letters already guessed by the player
    var collectLettersTyped = [];  

// FUNCTIONS  
// -----------------------------------------

    //Create underscores based on word generated 
    function generateUnderScore() {
        //reset array value 
        displayUnderScore = []; 

        for(var i =0; i < randomChoice.length ; i++){
            displayUnderScore.push("_");
        }
        return displayUnderScore.join(" "); //Removes the comma and replaces it with space  
    }

    //Resetting all values 
    function newGame() {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        randomChoice = hangmanList[Math.floor(Math.random() * hangmanList.length)];

        document.getElementById("underScore-text").innerHTML = generateUnderScore(); 

        console.log("NewGame displayUnderScore "+ displayUnderScore ); 

        remainingLetters = randomChoice.length;
        document.getElementById("noOfGuessRem").innerHTML = remainingLetters; 

        collectLettersTyped = [] ; 
        document.getElementById("lettersAlreadyGuess").innerHTML = collectLettersTyped ; 

        document.getElementById("wins-text").innerHTML = wins;   

    }
// console.log("Remaining letter" + remainingLetters); 

//SETTING VALUES 
//--------------------------------------

//DISPLAY UNDERSCORE FOR THE CURRENT WORD 
document.getElementById("underScore-text").innerHTML = generateUnderScore(); 



// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

   
    // Determines which key was pressed.
    var userGuess = event.key;

    // console.log(event.keyCode);

    //Verify the players guess with the randome generated choice 
    for (var j = 0; j < randomChoice.length; j++) {

        //Player guess equals to random guess 
        if (randomChoice[j].toLowerCase() === userGuess.toLowerCase()) {
            //show the letter instead of the underscore
            displayUnderScore[j] = userGuess;

            // console.log("Present: "+ displayUnderScore.indexOf(userGuess))
            // console.log("present in random word " + randomChoice[j].indexOf(userGuess) + " userguess "+ userGuess);

            //Letter exsits then add it to the array 
            if (displayUnderScore.indexOf(userGuess) > -1 ){ 

                //Only add the letter to the list if not typed earlier i.e. display unique letters 
                if (collectLettersTyped.indexOf(userGuess) <= -1 ){ 
                    collectLettersTyped.push(userGuess); 
                }
                //decerese the count 
                remainingLetters--;
            }

           
        } else {

            // console.log("Not present in random word " + randomChoice[j].indexOf(userGuess) + " userguess "+ userGuess);

            //Only add the letter to the list if not typed earlier i.e. display unique letters
            if (collectLettersTyped.indexOf(userGuess) <= -1 ){ 
                collectLettersTyped.push(userGuess); 

            }
        }
    }

    //Win count 
    if ( remainingLetters == 0 ){
        //Upodate the win count 
        wins += 1; 
        //restart the game 
        newGame() ;
    } else {

        //SETTING VALUES 
        //--------------------------------------
        if ( displayUnderScore != null ) { 
            document.getElementById("underScore-text").innerHTML = displayUnderScore;  
        }
        document.getElementById("noOfGuessRem").innerHTML = remainingLetters; 
        document.getElementById("wins-text").innerHTML = wins;  
        if ( collectLettersTyped != null ) { 
            document.getElementById("lettersAlreadyGuess").innerHTML = collectLettersTyped ;
        } 

    }
    
}
