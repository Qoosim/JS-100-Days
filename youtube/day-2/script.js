const number = document.querySelector('.count');
const btn = document.querySelector('.generate');

const generateRandom = () => {
  const randomNumber =  Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
}

btn.addEventListener('click', generateRandom);

generateRandom();

