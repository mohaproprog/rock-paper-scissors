let chooses = ["rock","paper","scissors"];
let computerChooses = chooses[Math.floor(Math.random()*3)];
let resultDisplay = document.getElementById("result");
let playerDisplay = document.getElementById("player");
let computerDisplay = document.getElementById("computer");
let resultGame = "";
let playerWon = document.getElementById("playerWon");
let computerWon = document.getElementById("computerWon");
let wonGame = 0;
let wonGame2 = 0;



function playgame(userChooses){
    if(userChooses == computerChooses){
        resultGame = "it's tie";
    }
    else if (userChooses == "rock" & computerChooses == "scissors"
         || userChooses == "paper" & computerChooses == "rock" 
        || userChooses == "scissors" & computerChooses == "paper"){
            resultGame = "You Win"
            wonGame += 1;
            playerWon.innerText = `player: ${wonGame}`

            

        }
        else{
            resultGame ="You Loss"
             wonGame2 += 1;
            computerWon.innerText = `compuer: ${wonGame2}`
            
        }
        playerDisplay.innerText = `player: ${userChooses}`
        computerDisplay.innerText = `computer: ${computerChooses}`
        resultDisplay.innerText =`result: ${resultGame}`;

}
