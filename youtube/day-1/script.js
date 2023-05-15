const count = document.querySelector('.count');
const btn = document.querySelector('.buttons');

btn.addEventListener('click', (e) => {
  if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor();
  }
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    setColor();
  }
})

function setColor () {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}

