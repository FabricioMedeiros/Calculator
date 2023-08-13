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