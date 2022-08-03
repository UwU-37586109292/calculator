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

    } else if (buttonClicked === '=') {
        let length = operationsHistory.length;
        display.innerText = length > 2 ? calculate() : '0';
        cleanHistory();
    }
    else {
        if (operationsHistory.length > 0 && /^[0-9]+$/.test(operationsHistory[operationsHistory.length - 1]) && /^[0-9]+$/.test(buttonClicked)) {
            operationsHistory[operationsHistory.length - 1] = operationsHistory[operationsHistory.length - 1] + buttonClicked;
        } else {
            operationsHistory.push(buttonClicked);
        }
        display.innerText = operationsHistory[operationsHistory.length - 1];
    }
}

function calculate() {
    let runningResult = operate(+operationsHistory[0], +operationsHistory[2], operationsHistory[1]);
    for (let i = 4; i < operationsHistory.length; i = i + 2) {
        runningResult = operate(runningResult, +operationsHistory[i], operationsHistory[i - 1]);
    }
    return runningResult;
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
    if (num2 === 0) {
        alert('Can\'t divide by 0!');
        return 0;
    }
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}