const hexContainer = document.querySelector('.hex-code');
const generate = document.querySelector('.generate');

// const generateRandomHexColor = () => {
//   const randomHexColor = Math.floor(Math.random() * 16777215).toString(16)
//   document.body.style.backgroundColor = `#${randomHexColor}`;
//   hexContainer.innerHTML = `#${randomHexColor}`;
// }

const randomHexColor = () => {
  const randomHexColorNumber = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randomHexColorNumber}`;
  hexContainer.innerHTML = `#${randomHexColorNumber}`;
}

generate.addEventListener('click', randomHexColor);

randomHexColor();