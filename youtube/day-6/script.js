const word = document.querySelector('.input-text');
const btn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

btn.addEventListener('click', checkVowels);

function checkVowels(e) {
  e.preventDefault();

  const wordValue = word.value.toLowerCase();
  if (!wordValue) return;
  let vowelCount = 0;
  for (let i = 0; i < wordValue.length; i++) {
    if (wordValue[i].match(/[a,e,i,o,u]/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `${wordValue} has ${vowelCount} vowels`;
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-text').focus();
  setTimeout(timeOut, 3000);
}

function timeOut() {
  result.innerHTML = '';
}
