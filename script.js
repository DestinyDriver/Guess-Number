'use strict';

// console.log(document.querySelector('.message').textContent);
// .value
// .eventlistner
// !guess
// Math.random)Math.trunc
//.style                cause inline css which has more prirority

const number = Math.trunc(Math.random() * 20);
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  var guess_no = Number(document.querySelector('.guess').value);

  if (guess_no <= 0 || guess_no > 20) {
    document.querySelector('.message').textContent = '🚫Invalid Number!';
  } else {
    if (Number(document.querySelector('.score').textContent) > 0) {
      if (guess_no === number) {
        document.querySelector('.message').textContent = '🥳Correct Number';
        if (
          Number(document.querySelector('.highscore').textContent) <
          Number(document.querySelector('.score').textContent)
        )
          document.querySelector('.highscore').textContent =
            document.querySelector('.score').textContent;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = '30rem';
      } else {
        document.querySelector('.score').textContent =
          Number(document.querySelector('.score').textContent) - 1;
        if (guess_no > number) {
          document.querySelector('.message').textContent = '🚀Too High';
        } else {
          document.querySelector('.message').textContent = '👇Too Low';
        }
      }
    } else {
      document.querySelector('.message').textContent =
        '🎮Game-Over Try-Again!!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
