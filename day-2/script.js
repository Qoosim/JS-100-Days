const count = document.querySelector('.count');
const generate = document.querySelector('.generate');

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1
  count.innerHTML = randomNumber;
}

generate.addEventListener('click', generateRandomNumber);