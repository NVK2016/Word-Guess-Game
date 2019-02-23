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

        document.getElementById("noOfGuessRem").textContent = 12; //Reset lives to 12 

        collectLettersTyped = [] ; 
        document.getElementById("lettersAlreadyGuess").textContent = collectLettersTyped ; 

        document.getElementById("wins-text").textContent = wins;   
    }
console.log("Remaining letter" + remainingLetters); 
console.log("remainingLives: "+ remainingLives);

//SETTING VALUES 
//--------------------------------------

//DISPLAY UNDERSCORE FOR THE CURRENT WORD 

document.getElementById("underScore-text").textContent = generateUnderScore(); 
document.getElementById("noOfGuessRem").textContent = remainingLives; 


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("Letter Exists: "+ randomChoice.indexOf(userGuess) );

    //Decrement the Lives as soon as the user unputs value don't count repative letters 
    if(randomChoice.indexOf(userGuess) === -1){
        remainingLives--; 
    } else {
        remainingLives--;
    }
    
    //Verify the players guess with the randome generated choice 
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
                }
                //decerese the count gcvj
                remainingLetters--;
            }
           
        } else {

            
            //Only add the letter to the list if not typed earlier i.e. display unique letters
            if (collectLettersTyped.indexOf(userGuess) <= -1 ){ 
                collectLettersTyped.push(userGuess); 
                
            }
        }
    }
    console.log("Remaining letters:" + remainingLetters); 
    console.log("remainingLives: "+ remainingLives);

    //Win count 
    if ( remainingLetters == 0 ){
        //Upodate the win count 
        wins += 1; 
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
    if ( remainingLives == 0 ) {
        //restart game 
        resetGame(); 
    }
    
}
