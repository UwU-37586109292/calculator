let previousDisplayValue = '';
let currentDisplayValue = '';
let operator = '';
let operationsHistory = [];


const buttonsList = document.querySelectorAll('button');
buttonsList.forEach(button => {
    button.addEventListener('click', handleButtonClick);
})


function handleButtonClick(event) {
    let buttonClicked = event.srcElement.innerText;

    const display = document.querySelector('.display');
    if (buttonClicked === 'AC') {
        cleanHistory();
        display.innerText = '0';

    } else {
        operationsHistory.push(buttonClicked);
        let length = operationsHistory.length;

        display.innerText = shouldCalculate(operationsHistory) ?
            operate(+operationsHistory[length - 3], +operationsHistory[length - 1], operationsHistory[length - 2])
            : buttonClicked;
    }
}
function cleanHistory() {
    previousDisplayValue = '';
    currentDisplayValue = '';
    operator = '';
    operationsHistory = [];
}
function shouldCalculate(operationsHistoryList) {
    let length = operationsHistory.length;
    if (length < 3) return false;
    return true;
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