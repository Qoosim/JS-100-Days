const hexContainer = document.querySelector('.hex-code');
const generate = document.querySelector('.generate');

const generateRandomHexColor = () => {
  const randomHexColor = Math.floor(Math.random() * 10000000).toString(16)
  document.body.style.backgroundColor = `#${randomHexColor}`;
  hexContainer.innerHTML = `#${randomHexColor}`;
}

generate.addEventListener('click', generateRandomHexColor);

generateRandomHexColor();