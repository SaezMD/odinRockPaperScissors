console.log("Hello World");

function playRound(playerSelection, computerSelection) {
  




  
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));



'computer selection'
function computerplay(){
  let ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum)
  switch (ranNum) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
  }
}
console.log(computerplay())

var computerchoice = computerplay()

console.log(computerchoice)

alert("Computer: " + computerchoice)

'player selection'
var playerplay = window.prompt("Enter your option (Rock, Paper, Scissors): ");
'alert("You selected " + playerplay);'

'game'

if(computerchoice.toLowerCase() === playerplay.toLowerCase())
{
  result = "Tie";
}

if(computerchoice.toLowerCase() === 'rock' && playerplay.toLowerCase() === 'paper')
{
  result = "Player Wins!";
}

if(computerchoice.toLowerCase() === 'rock' && playerplay.toLowerCase() === 'scissors')
{
  result = "Computer Wins!";
}

if(computerchoice.toLowerCase() === 'paper' && playerplay.toLowerCase() === 'scissors')
{
  result = "Player Wins!";
}

if(computerchoice.toLowerCase() === 'scissors' && playerplay.toLowerCase() === 'paper')
{
  result = "Computer Wins!";
}

if(computerchoice.toLowerCase() === 'scissors' && playerplay.toLowerCase() === 'rock')
{
  result = "Player Wins!";
}

if(computerchoice.toLowerCase() === 'paper' && playerplay.toLowerCase() === 'rock')
{
  result = "Computer Wins!";
}

alert(result);





