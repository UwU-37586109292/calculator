let previousNumber = '';
let currentNumber = '';
let operator = '';
let lastButtonClicked = '';


const buttonsList = document.querySelectorAll('button');
buttonsList.forEach(button => {
    button.addEventListener('click', handleButtonClick);
})
const display = document.querySelector('.display');

//TODO: save operation result to chain next operations 
function handleButtonClick(event) {
    let buttonClicked = event.srcElement.innerText;

    switch (buttonClicked) {
        case "AC":
            cleanHistory();
            display.innerText = '0';
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            if (previousNumber && currentNumber) {
                previousNumber = operate(previousNumber, currentNumber, operator);
                display.innerText = previousNumber;
                currentNumber = '';
            } else {
                operator = buttonClicked;
                previousNumber = currentNumber;
                currentNumber = '';
                display.innerText = lastButtonClicked;
            }
            break;
        case "=":
            previousNumber = operate(previousNumber, currentNumber, operator);
            display.innerText = previousNumber;
            break;
        default:
            isNumber(buttonClicked) ? handleNumber(buttonClicked) : alert('?');
            break;
    }
    lastButtonClicked = buttonClicked;


    function handleNumber(string) {
        if (isNumber(lastButtonClicked)) {
            currentNumber += string;
        } else {
            currentNumber = string;
        }
        display.innerText = currentNumber;
    }
    // else if (buttonClicked === '=') {
    //     let length = operationsHistory.length;
    //     display.innerText = length > 2 ? calculate() : '0';
    //     cleanHistory();
    // }
    // else {
    //     if (operationsHistory.length > 0 && isNumber(operationsHistory[operationsHistory.length - 1]) && isNumber(buttonClicked)) {
    //         operationsHistory[operationsHistory.length - 1] += buttonClicked;
    //     } else {
    //         operationsHistory.push(buttonClicked);
    //     }
    //     display.innerText = operationsHistory[operationsHistory.length - 1];
    // }
}

function isNumber(string) {
    return /^[0-9]+$/.test(string);
}

function cleanHistory() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
    lastButtonClicked = '';
}

function operate(num1, num2, operator) {
    num1 = +num1;
    num2 = +num2;
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