const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {

  if (e.target.classList.contains('subtract')) {
    count.innerText--;
    setColor();
  }
  if (e.target.classList.contains('add')) {
    count.innerText++;
    setColor();
  }
  if (e.target.classList.contains('reset')) {
    count.innerText = 0;
    setColor();
  }
})

function setColor () {
  if (count.innerText > 0) {
    count.style.color = 'yellow'
  } else if (count.innerText < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}
