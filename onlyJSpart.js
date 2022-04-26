console.log("Hello World");

'computer selection'
function computerPlay(){
  let ranNum = Math.floor(Math.random() * 3);
  switch (ranNum) {
      case 0:
        return "Rock";
        break;
      case 1:
        return "Paper";
        break;
      case 2:
        return "Scissors";
        break;
  }
}

function playRound(playerSelection, computerSelection) {
  
  if(computerSelection.toLowerCase() === playerSelection.toLowerCase())
  {
    result = "Tie";
  }
  
  if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'paper')
  {
    result = "Player Wins!";
  }
  
  if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors')
  {
    result = "Computer Wins!";
  }
  
  if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors')
  {
    result = "Player Wins!";
  }
  
  if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper')
  {
    result = "Computer Wins!";
  }
  
  if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock')
  {
    result = "Player Wins!";
  }
  
  if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock')
  {
    result = "Computer Wins!";
  }
  
  'alert(result);'
  return result;
}

/*const playerSelection = window.prompt("Enter your option (Rock, Paper, Scissors): ",computerPlay());
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/


var countComputer = 0
var countPlayer = 0 
const validWords = ["Rock", "Paper","Scissors"];

for (i = 0;i < 5;i++) 
{

  const playerSelection = window.prompt("Enter your option (Rock, Paper, Scissors): ",computerPlay());
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  
  switch (result) {
    case 'Tie':
      i--;
      break;
    case 'Computer Wins!':
      countComputer++;
      break;
    case 'Player Wins!':
      countPlayer++;
      break;
  }

}

/*alert("Player won: " + countPlayer);
alert("Computer won: " + countComputer);*/


if (Number(countPlayer) > Number(countComputer)) 
{
  alert("Player Wins this match with: " + countPlayer + ' Rounds');
  'return countPlayer;'
}
  else 
  {
  alert("Computer Wins this match with: " + countComputer + ' Rounds');
  'return countComputer;' 
  }
