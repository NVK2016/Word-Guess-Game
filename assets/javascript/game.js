// Game logic 

// VARIABLES 
// -----------------------------------------

    //Create a list of words "
    var hangmanList = ["Skyfall", "Rocky", "Clueless", "Jaws", "Taken", "Gladiator","Bridesmaids", "Titanic","Inception"]; 

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomChoice = hangmanList[Math.floor(Math.random() * hangmanList.length)];

    //DISPLAYS _ _ _ for the random word geenrated 
    var displayUnderScore = []; 

    //Takes the length of the random word generated 
    var remainingLetters = randomChoice.length;

    //No of chances a player has to guess the word 
    var remainingLives = 12; 

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
    function resetGame() {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        randomChoice = hangmanList[Math.floor(Math.random() * hangmanList.length)];

        document.getElementById("underScore-text").textContent = generateUnderScore(); 
        // console.log("resetGame displayUnderScore "+ displayUnderScore ); 

        remainingLives = 12; //Reset lives to 12 
        document.getElementById("noOfGuessRem").textContent = remainingLives; 

        collectLettersTyped = [] ; 
        document.getElementById("lettersAlreadyGuess").textContent = collectLettersTyped ; 

        document.getElementById("wins-text").textContent = wins;   

        //Reset the letter count for the random word generated 
        remainingLetters = randomChoice.length; 
        console.log("ResetGame: "+ remainingLetters + "Lives" + remainingLives);
    }

    //Check for speical key value and return true if found 
    function keyStrokeValues(keyValue){

        switch (keyValue){
        case 8: //backspace
        case 9: //tab
        case 13: //enter
        case 16: //shift
        case 17: //ctrl
        case 18: //alt
        case 19: // pause/break
        case 20: // caps lock 
        case 27: // escape
        case 32: // space key 
        case 33: // page up 
        case 34: // page down
        case 35: // end                 
        case 36: // home                
        case 37: // left arrow  
        case 38: // up arrow  
        case 39: // right arrow 
        case 40: // down arrow 
        case 45:// insert 
        case 46:// delete
        case 91:// meta key 
            alert("PLEASE enter a valid letter choice!")
            return true; 
        default: 
            return false; 
        }
    }

//SETTING VALUES 
//--------------------------------------

//DISPLAY UNDERSCORE FOR THE CURRENT WORD 

document.getElementById("underScore-text").textContent = generateUnderScore(); 
document.getElementById("noOfGuessRem").textContent = remainingLives; 


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

     //Check that user doesn't click special keys while guessing letters 
    if (!keyStrokeValues(event.keyCode)) {  

        //Verify the players guess matched with letters within the randome generated choice 
        for (var j = 0; j < randomChoice.length; j++) {

            //Player guess equals to random guess 
            if (randomChoice[j].toLowerCase() === userGuess.toLowerCase()) {
                //show the letter instead of the underscore
                displayUnderScore[j] = userGuess;

                //Letter exsits then add it to the array 
                if (displayUnderScore.indexOf(userGuess) > -1 ){ 

                    //Only add the letter to the list if not typed earlier i.e. display unique letters 
                    if (collectLettersTyped.indexOf(userGuess) <= -1 ){ 
                        collectLettersTyped.push(userGuess); 
                        remainingLives--;
                    }
                    //decerese the count gcvj
                    remainingLetters--;
                }
                
            } 
            else {

                //Only add the letter to the list if not typed earlier i.e. display unique letters
                if (collectLettersTyped.indexOf(userGuess) <= -1 ){ 
                    collectLettersTyped.push(userGuess); 
                    remainingLives--;
                }
            }
        }
    } 
    console.log("Movie name: "+ randomChoice); 
    console.log("Remaining letter: " + remainingLetters); 
    console.log("remainingLives: "+ remainingLives);
    //Win count all the players answer matched the random words 
    if ( remainingLetters == 0 ){
        //Upodate the win count 
        wins += 1; 
        console.log("Player Won!!!"); 
        document.getElementById("winLossGif").setAttribute("src", "assets/images/win.gif");
        //restart the game 
        resetGame() ;
    } else {
        
        //SETTING VALUES 
        //--------------------------------------
        if ( displayUnderScore != null ) { 
            document.getElementById("underScore-text").textContent = displayUnderScore.join(" ");  
        }
        document.getElementById("noOfGuessRem").textContent = remainingLives; 
        document.getElementById("wins-text").textContent = wins;  
        if ( collectLettersTyped != null ) { 
            document.getElementById("lettersAlreadyGuess").textContent = collectLettersTyped ;
        } 

    }
    //Runs out of chances 
    if ( remainingLives <= 0 ) {
        //restart game 
        console.log("you lost :( better luck next time !!")
        document.getElementById("winLossGif").setAttribute("src", "assets/images/loss.gif");
        resetGame(); 
    }
   
}
