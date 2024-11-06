const play = document.getElementById('play-button');
const initialScreen = document.getElementById('initial-screen');
const gameScreen = document.getElementById('game-screen');
const rockLogo = document.getElementById('rock');
const paperLogo = document.getElementById('paper');
const scissorsLogo = document.getElementById('scissors');
const selectedLogo = document.getElementById('selectedLogo');
const computerLogo = document.getElementById('computerLogo');
const computerChoices = [
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/rock-hand.png?raw=true',
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/paper-hand.png?raw=true',
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/scissors-hand.png?raw=true',
];
const scoresElement = document.getElementById('scores');
const gameOverMessage = document.querySelector('.gameOverMessage');
const playAgainButton = document.querySelector('.playAgainButton');

let playerScore = 0;
let computerScore = 0;

play.onclick = () => {
  initialScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  playerScore = 0;
  computerScore = 0;
};

function determineWinner(playerChoice, computerChoice) {
  if (
    (playerChoice === 'rock-hand.png' &&
      computerChoice === 'scissors-hand.png') ||
    (playerChoice === 'paper-hand.png' && computerChoice === 'rock-hand.png') ||
    (playerChoice === 'scissors-hand.png' &&
      computerChoice === 'paper-hand.png')
  ) {
    return 'player';
  } else if (playerChoice !== computerChoice) {
    return 'computer';
  }
  return 'tie';
}

function updateScores() {
  scoresElement.textContent = `${playerScore} - ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
    rockLogo.style.visibility = 'hidden';
    paperLogo.style.visibility = 'hidden';
    scissorsLogo.style.visibility = 'hidden';
    gameOverMessage.textContent = winner;
    playAgainButton.style.display = 'block';

    playAgainButton.onclick = () => location.reload();
  }
}

function playGame(playerChoice) {
  selectedLogo.src = computerChoices[playerChoice];
  const computerChoice = Math.floor(Math.random() * computerChoices.length);
  computerLogo.src = computerChoices[computerChoice];
  selectedLogo.style.display = 'block';
  computerLogo.style.display = 'block';

  const result = determineWinner(
    selectedLogo.src.split('?')[0].split('/').pop(),
    computerLogo.src.split('?')[0].split('/').pop()
  );

  if (result === 'player') playerScore++;
  else if (result === 'computer') computerScore++;

  updateScores();
}

rockLogo.addEventListener('click', () => playGame(0));
paperLogo.addEventListener('click', () => playGame(1));
scissorsLogo.addEventListener('click', () => playGame(2));
