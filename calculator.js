let previousDisplayValue = '';
let currentDisplayValue = '';
let operator = '';


const buttonsList = document.querySelectorAll('button');
buttonsList.forEach(button => {
    button.addEventListener('click', handleButtonClick);
})


function handleButtonClick(event) {
    let buttonClicked = event.srcElement.innerText;
    const display = document.querySelector('.display');

    display.innerText = buttonClicked;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        default:
            alert('Unknown operation!');
            break;
    }
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}