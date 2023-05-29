const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');


const copyText = (e) => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 999999);
  document.execCommand('copy');

  btn.innerText = 'copied!!!';
  setTimeout(() => {
    btn.innerText = 'copy'
  }, 3000)
}

btn.addEventListener('click', copyText);

