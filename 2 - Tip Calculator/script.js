const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");

const button = document.querySelector("button");

const totalFiled = document.querySelector(".amount");

button.addEventListener("click", () => {
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);

  const totalBill = (billValue * tipValue) / 100 + billValue;
  totalFiled.innerHTML = totalBill;
});
