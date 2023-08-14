let firstValue = "";
let secondValue = "";
let selectedOperation = "";

function updateDisplay() {
    const display = document.getElementById("result");
    if (selectedOperation === "") {
        display.textContent = firstValue;
    } else {
        display.textContent = secondValue;
    }
}

function appendToDisplay(character) {
    if (selectedOperation === "") {
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
    selectedOperation = operation;
    updateDisplay();
}

function calculate() {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    
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
    
    updateDisplay();
}

function clearDisplay() {
    firstValue = "";
    secondValue = "";
    selectedOperation = "";
    updateDisplay();
}
