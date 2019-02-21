// Game logic 

//Create a list of words "
var hangmanList = ["apple", "peach"]; 

// Randomly chooses a choice from the options array. This is the Computer's guess.
var currentWord = hangmanList[Math.floor(Math.random() * hangmanList.length)];
console.log(currentWord); 