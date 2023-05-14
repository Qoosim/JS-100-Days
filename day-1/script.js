const count = document.querySelector('.count');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const resetCount = document.querySelector('.reset');


subtract.addEventListener('click', () => {
  count.innerHTML--;
  setColor();
})

add.addEventListener('click', () => {
  count.innerHTML++;
  setColor();
})

resetCount.addEventListener('click', () => {
  count.innerHTML = 0;
  setColor();
})

function setColor () {
  if (count.innerHTML > 0) {
    count.style.color = 'green'
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}