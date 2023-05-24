const btn = document.querySelector('.btn'),
  bill = document.querySelector('.bill'),
  rate = document.querySelector('.rate'),
  error = document.querySelector('.error'),
  tip = document.querySelector('.tip'),
  total = document.querySelector('.total');


const hideResult = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calculateTip = (e) => {
  e.preventDefault();

  if (bill.value === "" || rate.value === "") {
    error.style.display = "block";
    hideResult();
  } else if (isNaN(bill.value)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideResult();
  } else {
    let tipAmt = bill.value * rate.value;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: $${tipAmt}`;

    let totalBill = +bill.value + tipAmt;
    total.innerHTML = `Total Bill: $${totalBill}`;
  }
}


btn.addEventListener('click', calculateTip);
