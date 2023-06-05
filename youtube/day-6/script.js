const btn = document.querySelector('.text-btn');
const coupon = document.querySelector('.coupon');

btn.addEventListener('click', textCopy);

function textCopy(event) {
  event.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 9999999999);
  coupon.execCommand('copy');
  btn.innerText = 'Copied!';

  setTimeout(() => {
    btn.innerText = 'Copy'
  }, 3000);
}