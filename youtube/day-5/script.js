const btn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

function palindrome(e) {
  e.preventDefault();

  const word = document.querySelector('.input-text').value;
  if (!word) return;
  const len = word.length;
  // madam
  const start = word.substring(0, Math.floor(len / 2));
  const end = word.substring(len - Math.floor(len / 2));
  
  const flip = [...end].reverse().join('');
  
  if (start === flip) {
    result.innerHTML = `${word} is a palindrome`;
    timeOut();
  } else {
    result.innerHTML = `${word} is NOT  a palindrome`;
    timeOut();
  }
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-text').focus();
}

function timeOut() {
  setTimeout(() => {
    result.innerHTML = '';
  }, 3000)
}