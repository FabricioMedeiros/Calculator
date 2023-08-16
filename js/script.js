let firstValue = "";
let secondValue = "";
let selectedOperation = "";
let isPercentageInput = false;

function updateDisplay() {
    const display = document.getElementById("result");
    if (selectedOperation === "") {
        display.textContent = firstValue;
    } else {
        display.textContent = secondValue;
    }
}

function appendToDisplay(character) {
    if (character === "%") {
        if (firstValue !== "" && selectedOperation === "") {
            firstValue = (parseFloat(firstValue) / 100).toString();
            updateDisplay();
        }
        else{
            isPercentageInput = true;
        }
        return;
    }

    if (selectedOperation === "") {
        if (isPercentageInput) {
            secondValue += character;
            updateDisplay();
            return;
        }

        if (firstValue === "0" && character !== ".") {
            firstValue = character;
        } else {
            firstValue += character;
        }
        updateDisplay();
    } else {
        if (secondValue === "0" && character !== ".") {
            secondValue = character;
        } else {
            secondValue += character;
        }
        updateDisplay();
    }
}

function selectOperation(operation) {
    if (firstValue === ""){
      return;
    }

    selectedOperation = operation;
    updateDisplay();
}

function calculatePercentage(value, percentage) {
    return (value * percentage) / 100;
}

function calculate() {
    if (!firstValue || !secondValue) {
        return;
    }

    var num1 = parseFloat(firstValue);
    var num2 = parseFloat(secondValue);

    if ((selectedOperation === "+" || selectedOperation === "-") && isPercentageInput){ 
      num2 = calculatePercentage(num1, num2);
    }

    if ((selectedOperation === "*" || selectedOperation === "/") && isPercentageInput){ 
      num2 = (num2 /100);
    }

    switch (selectedOperation) {
        case "+":
            firstValue = (num1 + num2).toString();
            break;
        case "-":
            firstValue = (num1 - num2).toString();
            break;
        case "*":
            firstValue = (num1 * num2).toString();
            break;
        case "/":
            firstValue = (num1 / num2).toString();
            break;
        default:
            firstValue = "Error";
    }

    secondValue = "";
    selectedOperation = "";
    isPercentageInput = false;

    updateDisplay();
}

function clearDisplay() {
    firstValue = "";
    secondValue = "";
    selectedOperation = "";
    isPercentageInput = false;
    updateDisplay();
}

function toggleSign() {
    if (selectedOperation === "") {
        firstValue = (-parseFloat(firstValue)).toString();
    } else {
        secondValue = (-parseFloat(secondValue)).toString();
    }
    updateDisplay();
}
