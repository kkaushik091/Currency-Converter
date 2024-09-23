const calendar = document.getElementById("calendarTime");
const from = document.getElementById("fromCurrency");
const to = document.getElementById("toCurrency");
const button = document.getElementById("switch");
const time = document.getElementById("calendarTime");
const input = document.getElementById("amount");
const output = document.getElementById("result");

function updateTime() {
  const now = moment().format("MMMM Do YYYY, h:mm:ss A");
  time.textContent = now;
}

setInterval(updateTime, 1000);

function final() {
  const fromAmount = from.value;
  const toAmount = to.value;
  const enterAmount = input.value;

  if (enterAmount) {
    const newAmount = (enterAmount * toAmount) / fromAmount;
    output.textContent = newAmount.toFixed(2);
  } else {
    output.textContent = "0";
  }
}

from.addEventListener("change", final);
to.addEventListener("change", final);
input.addEventListener("input", final);

button.addEventListener("click", function () {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  final();
});
