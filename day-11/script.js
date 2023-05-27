const input = document.querySelector('textarea');
const btn = document.querySelector('.btn');
const limit = document.querySelector('.limit');
const max = 100;

const updateLimit = () => {
  limit.textContent = max;
  input.addEventListener('input', () => {
    let inputLength = input.value.length;
    limit.textContent = max - inputLength
    if (inputLength > max) {
      btn.disabled = true;
      limit.style.color = 'red';
    } else {
      btn.disabled = false;
      limit.style.color = 'black';
    }
  })
}

updateLimit();

// Twitter button click event //
btn.addEventListener('click', (e) => {
  e.preventDefault();
  tweet();
})

function tweet() {
  const tweetInput = "https://twitter.com/intent/tweet?text=";
  window.open(`${tweetInput}${input.value}`);
}
