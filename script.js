'use strict';
const secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestscore = 0;
let h;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess > secret) {
      document.querySelector('.message').textContent = 'Number too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secret) {
      document.querySelector('.message').textContent = 'Number too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess === secret) {
      document.querySelector('.message').textContent = 'Correct Number!';
      if (score > highestscore) {
        highestscore = score;
        document.querySelector('.highscore').textContent = highestscore;
      }
      //changing background color
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    document.querySelector('.message').textContent = 'You loose the game!';
    document.querySelector('.score').textContent = 0;
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   score = 20;
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.highscore').textContent = highestscore;
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   } else if (guess > secret) {
//     document.querySelector('.message').textContent = 'Number too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < secret) {
//     document.querySelector('.message').textContent = 'Number too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess === secret) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     if (score > highestscore) {
//       document.querySelector('.highscore').textContent = score;
//       highestscore = score;
//       //changing background color
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  // Resetting the game state
  score = 20;
  document.querySelector('.score').textContent = score;
  const newSecret = Math.trunc(Math.random() * 20) + 1;
  secret = newSecret;

  // Resetting the UI elements
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
