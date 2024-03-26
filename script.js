const form = document.getElementById("calculator-form");
const num1Input = document.getElementById("num1");
const operatorSelect = document.getElementById("operator");
const num2Input = document.getElementById("num2");
const resultInput = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const num1 = parseFloat(num1Input.value);
    const operator = operatorSelect.value;
    const num2 = parseFloat(num2Input.value);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Cannot divide by zero.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator.";
    }

    resultInput.value = result;
});

    