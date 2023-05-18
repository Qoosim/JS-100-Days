const word = document.querySelector('.input-text')
const checkBtn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

checkBtn.addEventListener('click', checkVowels);

function checkVowels(e) {
  e.preventDefault();

  let countVowels = 0;
  let wordVal = word.value.toLowerCase();
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u,])/)) {
      countVowels++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${countVowels} vowels.`;
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-text').focus();
  timeOut();
}

function timeOut() {
  setTimeout(() => {
    result.innerHTML = '';
  }, 3000)
}
