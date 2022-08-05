let previousNumber = '';
let currentNumber = '';
let operator = '';
let lastButtonClicked = '';
const MAX_DISPLAY_CHARS = 13;

const buttonsList = document.querySelectorAll('button');
buttonsList.forEach(button => {
    button.addEventListener('click', function (e) {
        handleUserInput(e.target.innerText);
    })
})

window.addEventListener('keydown', function (e) {
    handleUserInput(e.key);
})

function handleUserInput(key) {
    const buttonClicked = key;

    switch (buttonClicked) {
        case "AC":
            cleanHistory();
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            if (previousNumber && currentNumber) {
                previousNumber = operate(previousNumber, currentNumber, operator);
                currentNumber = '';
                displayValue(previousNumber);
            } else {
                if (currentNumber) {
                    previousNumber = currentNumber;
                    currentNumber = '';
                }
                displayValue(buttonClicked);
            }
            operator = buttonClicked;
            break;
        case "=":
        case "Enter":
            if (previousNumber && currentNumber && operator) {
                previousNumber = operate(previousNumber, currentNumber, operator);
                currentNumber = '';
                displayValue(previousNumber);
            } else {
                cleanHistory();
            }
            break;
        case ".":
            if (!currentNumber.includes(".")) {
                currentNumber += ".";
            } displayValue(currentNumber);
            break;
        default:
            isNumber(buttonClicked) ? handleNumber(buttonClicked) : alert('?');
            break;
    }
    lastButtonClicked = buttonClicked;
}

function displayValue(val) {
    const display = document.querySelector('.display');
    val = val.toString();
    if (val.includes("e")) {
        let base = val.substring(0, val.indexOf('e'));
        let notation = val.substring(val.indexOf('e'));
        display.innerText = base.substring(0, MAX_DISPLAY_CHARS - 1 - notation.length + 1) + notation;
    } else {
        val = val.substring(0, MAX_DISPLAY_CHARS - 1);
        if (isNumber(val) && val === previousNumber) {
            display.innerText = Number.parseFloat(val).toLocaleString('en-GB');
        }
        else display.innerText = val;
    }
}

function handleNumber(string) {
    if (isNumber(lastButtonClicked) || lastButtonClicked === ".") {
        currentNumber += string;
    } else {
        currentNumber = string;
    }
    displayValue(currentNumber);
}

function isNumber(string) {
    return /^[+-]?\d+(\.\d+)?$/.test(string);
}

function cleanHistory() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
    lastButtonClicked = '';
    displayValue('0');
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
    return (parseFloat(num1) / parseFloat(num2));
}
function multiply(num1, num2) {
    return num1 * num2;
}