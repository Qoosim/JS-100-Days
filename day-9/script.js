const btn = document.querySelector('.btn'),
  bill = document.querySelector('.bill'),
  rate = document.querySelector('.rate'),
  error = document.querySelector('.error'),
  tip = document.querySelector('.tip'),
  total = document.querySelector('.total');


const hideMessage = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calculateTip = (e) => {
  e.preventDefault();

  if (bill.value === "" || rate.value === "") {
    error.style.display = "block";
    hideMessage();
  } else if (isNaN(bill.value)) {
    error.innerText = "Please enter a number";
    error.style.display = "block";
    hideMessage();
  } else {
    let tipAmt = bill.value * rate.value;
    tipAmt = Math.ceil(tipAmt);
    tip.innerText = `Tip: $${tipAmt}`;

    let totalBill = +bill.value + tipAmt;
    total.innerText = `Total Bill: $${totalBill}`;
  }
}


btn.addEventListener('click', calculateTip);
