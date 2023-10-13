'use strict';

//Declare variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelector('.show-modal');

//Open function
const funcOpenModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close function
const funcCloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open Modal
btnShowModal.addEventListener('click', funcOpenModal);

//Close modal
btnCloseModal.addEventListener('click', funcCloseModal);
overlay.addEventListener('click', funcCloseModal);
//Close modal by key event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    funcCloseModal();
  }
});

// Element Selector
const continueBtn = document.querySelector('.start');
const checkBtn = document.querySelector('.check');
const card = document.querySelectorAll('.card');
const playerCard = document.querySelectorAll('.playercard');
const botCard = document.querySelectorAll('.botcard');
const text = document.querySelector('.text');
const botScoreDisplay = document.querySelector('.bot');
const playerScoreDisplay = document.querySelector('.player');

// Variables
let currentScore = 0;
let botScore = 0;
let playerScore = 0;
let secretNumbers = [];

// Button visible function
checkBtn.style.display = 'none';
continueBtn.style.display = 'none';

// Won
const won = function () {
  playerCard[0].removeEventListener('click', playerCard0);
  playerCard[1].removeEventListener('click', playerCard1);
  playerCard[2].removeEventListener('click', playerCard2);
  document.querySelector('.playerdeck').classList.add('playerwinner');

  text.textContent = 'You won the Round';
  if (playerScore < 100) {
    playerScore += currentScore;
    playerScoreDisplay.textContent = playerScore;
  } else {
  }
  continueBtn.style.display = 'block';
  checkBtn.style.display = 'none';
};

// Lost
const lost = function () {
  playerCard[0].removeEventListener('click', playerCard0);
  playerCard[1].removeEventListener('click', playerCard1);
  playerCard[2].removeEventListener('click', playerCard2);
  document.querySelector('.botdeck').classList.add('playerwinner');

  text.textContent = 'You lost the Round';
  if (botScore < 100) {
    botScore += currentScore;
    botScoreDisplay.textContent = botScore;
  } else {
  }
  continueBtn.style.display = 'block';
  checkBtn.style.display = 'none';
};

// Condition
const condition = function () {
  if (currentScore === 8) {
    won();
  } else if (currentScore > 8) {
    lost();
  }
};

// Card 1
function playerCard0() {
  secretNumbers[0] = Math.trunc(Math.random() * 3) + 1;
  currentScore += secretNumbers[0];
  text.textContent = currentScore;
  playerCard[0].textContent = secretNumbers[0];
  playerCard[0].classList.remove('card');
  playerCard[0].classList.add('card1');
  checkBtn.style.display = 'block';
  condition();
  playerCard[0].removeEventListener('click', playerCard0);
}
playerCard[0].addEventListener('click', playerCard0);

// Card 2
function playerCard1() {
  secretNumbers[1] = Math.trunc(Math.random() * 5) + 1;
  currentScore += secretNumbers[1];
  text.textContent = currentScore;
  playerCard[1].textContent = secretNumbers[1];
  playerCard[1].classList.remove('card');
  playerCard[1].classList.add('card1');
  checkBtn.style.display = 'block';
  condition();
  playerCard[1].removeEventListener('click', playerCard1);
}
playerCard[1].addEventListener('click', playerCard1);

// Card 3
function playerCard2() {
  secretNumbers[2] = Math.trunc(Math.random() * 7) + 1;
  currentScore += secretNumbers[2];
  text.textContent = currentScore;
  playerCard[2].textContent = secretNumbers[2];
  playerCard[2].classList.remove('card');
  playerCard[2].classList.add('card1');
  checkBtn.style.display = 'block';
  condition();
  playerCard[2].removeEventListener('click', playerCard2);
}
playerCard[2].addEventListener('click', playerCard2);

// Start Button
continueBtn.addEventListener('click', () => {
  if (botScore >= 100) {
    overlay.style.display = 'block';
    document.querySelector('.lost').classList.remove('hidden')
  } else if (playerScore >= 100) {
    overlay.style.display = 'block';
    document.querySelector('.win').classList.remove('hidden')
  }
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('card1');
    card[i].classList.add('card');
    card[i].textContent = undefined;
  }
  currentScore = 0;
  continueBtn.style.display = 'none';
  text.textContent = 'Start to Pick Card/s';
  playerCard[0].addEventListener('click', playerCard0);
  playerCard[1].addEventListener('click', playerCard1);
  playerCard[2].addEventListener('click', playerCard2);
  document.querySelector('.playerdeck').classList.remove('playerwinner');
  document.querySelector('.botdeck').classList.remove('playerwinner');
});

// Check Button
checkBtn.addEventListener('click', function () {
  // Set bot points
  let secretNumbers2 = [
    Math.trunc(Math.random() * 3) + 1,
    Math.trunc(Math.random() * 5) + 1,
    Math.trunc(Math.random() * 7) + 1,
  ];
  let secretNumbers34 = secretNumbers2[0] + secretNumbers2[1];
  let secretNumbers345 =
    secretNumbers2[0] + secretNumbers2[1] + secretNumbers2[2];

  // Display bot cards
  const displayBot = function (i, display) {
    botCard[i].classList.remove('card');
    botCard[i].classList.add('card1');
    botCard[i].textContent = display;
  };
  // Conditions 2
  if (
    secretNumbers34 === 8 ||
    secretNumbers34 === currentScore ||
    secretNumbers34 > currentScore
  ) {
    displayBot(0, secretNumbers2[0]);
    displayBot(1, secretNumbers2[1]);
    lost();
  } else if (secretNumbers34 < currentScore) {
    if (
      currentScore === secretNumbers345 ||
      secretNumbers345 === 8 ||
      (secretNumbers345 > currentScore && secretNumbers345 < 8)
    ) {
      displayBot(0, secretNumbers2[0]);
      displayBot(1, secretNumbers2[1]);
      displayBot(2, secretNumbers2[2]);
      lost();
    } else if (currentScore > secretNumbers345 || secretNumbers345 > 8) {
      displayBot(0, secretNumbers2[0]);
      displayBot(1, secretNumbers2[1]);
      displayBot(2, secretNumbers2[2]);
      won();
    }
  }

  continueBtn.style.display = 'block';
  checkBtn.style.display = 'none';
});
