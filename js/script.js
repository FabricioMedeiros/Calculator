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
