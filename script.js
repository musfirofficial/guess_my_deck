'use strict';

// let computerScore = 10;
// let playerScore = 10;

//Help Button
const modal = document.querySelector('.help');
const openModal = document.querySelector('.help_open');
const closeModal = document.querySelector('.help_close');

openModal.addEventListener('click', () => {
  modal.showModal();
});
closeModal.addEventListener('click', () => {
  modal.close();
});

//Start Button
document.querySelector('.continue').addEventListener('click', function () {
  //Score Display Function
  // const scoreDisplay = () => {
  //   document.querySelector('.computer_score').textContent = computerScore;
  //   document.querySelector('.player_score').textContent = playerScore;
  // };

  //Text Display
  document.querySelector('.hitbtn').style.display = 'none';
  document.querySelector('.continue').textContent = 'Continue';
  document.querySelector('.statstext2').textContent = 'Pick Card/s';
  document.querySelector('.players_card1').textContent = 'UPTO 3';
  document.querySelector('.players_card2').textContent = 'UPTO 5';
  document.querySelector('.players_card3').textContent = 'UPTO 7';
  document.querySelector('.computers_card1').textContent = '?';
  document.querySelector('.computers_card2').textContent = '?';
  document.querySelector('.computers_card3').textContent = '?';

  let playerPoints = 0;

  const secretNumbers = [
    Math.trunc(Math.random() * 3) + 1,
    Math.trunc(Math.random() * 5) + 1,
    Math.trunc(Math.random() * 7) + 1,
    Math.trunc(Math.random() * 3) + 1,
    Math.trunc(Math.random() * 5) + 1,
    Math.trunc(Math.random() * 7) + 1,
  ];

  //Variables
  const secretNumbers345 =
    secretNumbers[3] + secretNumbers[4] + secretNumbers[5];

  const secretNumbers34 = secretNumbers[3] + secretNumbers[4];

  //Condition for score

  // const scoreCondition = function () {
  //   if (playerPoints === 8) {
  //     computerScore--;
  //     playerScore++;
  //   } else if (playerPoints > 8) {
  //     computerScore++;
  //     playerScore--;
  //   }
  //   scoreDisplay();
  // };

  //condition for restrict to pick cards

  const cardCondition = function (card, Func) {
    if (playerPoints === 8) {
      document.querySelector('.hitbtn').style.display = 'none';
      document.querySelector(card).removeEventListener('click', Func);
      document.querySelector('.statstext2').textContent =
        'You won the round, Click continue';
    } else if (playerPoints > 8) {
      document.querySelector('.hitbtn').style.display = 'none';
      document.querySelector(card).removeEventListener('click', Func);
      document.querySelector('.statstext2').textContent =
        'You lost the round, click continue';
    } else {
      document.querySelector('.statstext2').textContent = 'click check';
    }
  };

  //Card 1---------------------------------------------------------
  //Function
  const card1 = () => {
    document.querySelector('.players_card1').textContent = secretNumbers[0];
    playerPoints += secretNumbers[0];
    document.querySelector('.statstext').textContent = playerPoints;
    document.querySelector('.hitbtn').style.display = 'block';
    //score condition
    // scoreCondition();
    //Condition Function
    cardCondition('.players_card2', card2);
    cardCondition('.players_card3', card3);
    //------------------------
    document
      .querySelector('.players_card1')
      .removeEventListener('click', card1);
  };
  //Call Function
  document.querySelector('.players_card1').addEventListener('click', card1);

  //Card 2-------------------------------------------------------
  //Function
  const card2 = () => {
    document.querySelector('.players_card2').textContent = secretNumbers[1];
    playerPoints += secretNumbers[1];
    document.querySelector('.statstext').textContent = playerPoints;
    document.querySelector('.hitbtn').style.display = 'block';
    //score condition
    // scoreCondition();
    //Condition Function
    cardCondition('.players_card1', card1);
    cardCondition('.players_card3', card3);
    //-----------------------------------------
    document
      .querySelector('.players_card2')
      .removeEventListener('click', card2);
  };
  //Call Function
  document.querySelector('.players_card2').addEventListener('click', card2);

  //Card 3---------------------------------------------------------
  //Function
  const card3 = () => {
    document.querySelector('.players_card3').textContent = secretNumbers[2];
    playerPoints += secretNumbers[2];
    document.querySelector('.statstext').textContent = playerPoints;
    document.querySelector('.hitbtn').style.display = 'block';
    //score condition
    // scoreCondition();
    //Condition Function
    cardCondition('.players_card2', card2);
    cardCondition('.players_card1', card1);
    //-----------------------------------------
    document
      .querySelector('.players_card3')
      .removeEventListener('click', card3);
  };
  //Call Function
  document.querySelector('.players_card3').addEventListener('click', card3);

  //----------------------------------------------------------------

  //Text display on card function

  const displayFunc = function (display1, display2, display3) {
    document.querySelector('.computers_card1').textContent = display1;
    document.querySelector('.computers_card2').textContent = display2;
    document.querySelector('.computers_card3').textContent = display3;
  };

  //Win Function
  const winFunc = function () {
    document.querySelector('.statstext2').textContent =
      'You Won the round, click continue';
    // playerScore++;
    // computerScore--;
    document.querySelector('.hitbtn').style.display = 'none';
    // scoreDisplay();
  };

  //Lost function
  const lostFunc = function () {
    document.querySelector('.statstext2').textContent =
      'You lost the round, click continue';
    // playerScore--;
    // computerScore++;
    document.querySelector('.hitbtn').style.display = 'none';
    // scoreDisplay();
  };
  //Check button

  document.querySelector('.hitbtn').addEventListener('click', function () {
    if (
      secretNumbers34 === 8 ||
      secretNumbers34 > playerPoints ||
      secretNumbers34 === playerPoints
    ) {
      displayFunc(secretNumbers[3], secretNumbers[4], '?');
      lostFunc();
    } else if (secretNumbers34 < playerPoints) {
      if (playerPoints === secretNumbers345) {
        document.querySelector('.statstext2').textContent = 'Round Draw';
        displayFunc(secretNumbers[3], secretNumbers[4], secretNumbers[5]);
        document.querySelector('.hitbtn').style.display = 'none';
      } else if (playerPoints > secretNumbers345 && playerPoints < 8) {
        displayFunc(secretNumbers[3], secretNumbers[4], secretNumbers[5]);
        winFunc();
      } else if (secretNumbers345 === 8) {
        displayFunc(secretNumbers[3], secretNumbers[4], secretNumbers[5]);
        lostFunc();
      } else if (secretNumbers345 > playerPoints && secretNumbers345 < 8) {
        displayFunc(secretNumbers[3], secretNumbers[4], secretNumbers[5]);
        lostFunc();
      } else if (secretNumbers345 > 8) {
        displayFunc(secretNumbers[3], secretNumbers[4], secretNumbers[5]);
        winFunc();
      }
    }
  });

  //last
  playerPoints = playerPoints * 0;
  document.querySelector('.statstext').textContent = playerPoints;

  //cheat
  console.log('-----1st 2 cards-------------all 3 cards------------');
  console.log(secretNumbers34);
  console.log(secretNumbers345);
});
