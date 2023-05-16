const btn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

function palindrome() {
  const word = document.querySelector('.input-text').value;
  if (!word) return;

  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2));
  let end = word.substring(len - Math.floor(len / 2));

  // let flip = end.split("").reverse().join("");

  let flip = [...end].reverse().join("");
  if (start === flip) {
    result.innerHTML = `${word} is a palindrome`;
    timeOut();
  } else {
    result.innerHTML = `${word} is NOT a palindrome`;
    timeOut();
  }

}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  palindrome()
  document.querySelector('.input-text').value = '';
  document.querySelector('.input-text').focus();
});

function timeOut() {
  setTimeout(() => {
    result.innerHTML = '';
  }, 3000)
}
