const hexValue = document.querySelector('.hex-code');
const btn = document.querySelector('.generate');

const generateHexCode = () => {
  const hexColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${hexColor}`
  hexValue.innerHTML = `#${hexColor}`;
}

btn.addEventListener('click', generateHexCode);

generateHexCode();