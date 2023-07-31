const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");

const divButton = document.querySelector("#divide");
const timesButton = document.querySelector("#times");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");

let result = document.querySelector("#result");
let operand = document.querySelector("#operand");
let num1Output = 0;
let num2Output = 0;

inputNum1.addEventListener("change", function (event) {
  num1Output = event.target.value;
});

inputNum2.addEventListener("change", function (event) {
  num2Output = event.target.value;
});

divButton.addEventListener("click", function () {
  calcResult("divide");
});

timesButton.addEventListener("click", function () {
  calcResult("times");
});

minusButton.addEventListener("click", function () {
  calcResult("minus");
});

plusButton.addEventListener("click", function () {
  calcResult("plus");
});

function calcResult(operator) {
  let res = "= ?";
  if (operator == "divide") {
    if (num2Output == 0) {
      alert("You cannot divide by zero. Please provide another value.");
    } else {
      res = "= " + (Number(num1Output) / Number(num2Output)).toString();
      operand.innerHTML = "&divide";
      result.innerHTML = res;
    }
  } else if (operator == "times") {
    res = "= " + (Number(num1Output) * Number(num2Output)).toString();
    operand.innerHTML = "&times;";
    result.innerHTML = res;
  } else if (operator == "minus") {
    res = "= " + (Number(num1Output) - Number(num2Output)).toString();
    operand.innerHTML = "&minus;";
    result.innerHTML = res;
  } else if (operator == "plus") {
    res = "= " + (Number(num1Output) + Number(num2Output)).toString();
    operand.innerHTML = "&plus;";
    result.innerHTML = res;
  }
}
