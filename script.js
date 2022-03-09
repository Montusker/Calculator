const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {

    return num1 / num2;
};

const operate = function(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return parseFloat(add(num1, num2).toFixed(2));
            break;
        case "-":
            return parseFloat(subtract(num1, num2).toFixed(2));
            break;
        case "*":
            return parseFloat(multiply(num1, num2).toFixed(2));
            break;
        case "/":
            if (num2 == 0) {
                return "Error: Divide by 0"
            }
            return parseFloat(divide(num1, num2).toFixed(2));
            break;
        default:
            break;
    }
}

let displayValue = 0;
let number1 = null;
let number2 = null;
let operator = "";

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display-text');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.className) {
            case "clear":
                displayValue = 0;
                num1 = null;
                num2 = null;
                operator = "";
                break;
            case "numBtn":
                if (displayValue == 0) {
                    displayValue = button.id;
                } else {
                    displayValue = displayValue + button.id;
                }
                break;
            case "operator":
                if (!operator) {
                    number1 = displayValue;
                    displayValue = 0;
                    operator = button.innerHTML;
                    display.textContent = operator;
                    return;
                } else {
                    number2 = displayValue;
                    displayValue = 0;
                    number1 = operate(operator, number1, number2);
                    operator = button.innerHTML;
                    display.textContent = operator;
                    return;
                }

                break;
            case "equals":
                number2 = displayValue;
                number1 = operate(operator, number1, number2);
                displayValue = number1;
                operator = "";
                break;
            default:
                break;
        }
        display.textContent = displayValue;
    });
});