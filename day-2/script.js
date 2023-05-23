const number = document.querySelector('.random-number');
const generate = document.querySelector('.generate');

generate.addEventListener('click', randomNumber);

function randomNumber() {
  const randNumber = Math.floor(Math.random() * 10) + 1;
  number.innerHTML = randNumber;
}

randomNumber();
