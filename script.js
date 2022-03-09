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
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
}

let displayValue;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display-text');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.id;
        displayValue = display.textContent;

    });
});