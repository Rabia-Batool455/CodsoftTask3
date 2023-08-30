const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let prevInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value >= "0" && value <= "9") {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      operator = "";
      prevInput = "";
      display.textContent = "0";
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput !== "") {
        prevInput = currentInput;
        currentInput = "";
        operator = value;
      }
    } else if (value === "=") {
      if (prevInput !== "" && currentInput !== "") {
        let result = calculate(parseFloat(prevInput), operator, parseFloat(currentInput));
        display.textContent = result;
        currentInput = result.toString();
        prevInput = "";
        operator = "";
      }
    }
  });
});

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return num2;
  }
}
