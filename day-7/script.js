const word = document.querySelector('.input-text')
const checkBtn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

checkBtn.addEventListener('click', checkVowels);

function checkVowels(event) {
  event.preventDefault();
  let countVowel = 0;
  const wordVal = word.value.toLowerCase();
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      countVowel++;
    }
  }
  result.innerText = `${word.value.toUpperCase()} has ${countVowel} vowels.`;
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-text').focus();
  timeOut();
}

function timeOut() {
  setTimeout(() => {
    result.innerText = '';
  }, 3000)
}

