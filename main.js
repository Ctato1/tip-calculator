const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const changeTip = document.getElementById("tip");
const changeTotal = document.getElementById("total");
const button = document.getElementById("reset");

const errors = document.querySelector(".num_error .error-1");

bill.addEventListener("input", (e) => {
  calculate(+e.target.value);
});

let flag = false;
custom.addEventListener("input", (e) => {
  flag = true;
  calculate(+e.target.value);
});

tips.forEach((item) => {
  item.addEventListener("click", (e) => {
    flag = true;
    let text = e.target.textContent;
    result = +text.replace("%", "");
    calculate(result);
  });
});

people.addEventListener("input", (e) => {
  calculate(+e.target.value);
});

function calculate(num) {
  if (!flag) return;

  if (+people.value === 0) {
    errors.classList.add("active");
  } else {
    errors.classList.remove("active");
  }

  let tip = ((+bill.value / 100) * num) / +people.value;
  let total = +bill.value / +people.value + tip;

  changeTip.textContent = "$" + tip.toFixed(2);
  changeTotal.textContent = "$" + total.toFixed(2);
}
button.addEventListener("click", () => {
  location.reload();
});
