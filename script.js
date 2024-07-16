let displayValue = '0';
let pendingValue;
let operator;

const display = document.getElementById('display');

function appendNumber(num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    display.value = displayValue;
}

function appendOperator(op) {
    if (operator && pendingValue !== undefined) {
        calculate();
    }
    operator = op;
    pendingValue = parseFloat(displayValue);
    displayValue = '0';
}

function clearDisplay() {
    displayValue = '0';
    display.value = displayValue;
    pendingValue = undefined;
    operator = undefined;
}

function calculate() {
    const currentValue = parseFloat(displayValue);

    switch (operator) {
        case '+':
            displayValue = (pendingValue + currentValue).toString();
            break;
        case '-':
            displayValue = (pendingValue - currentValue).toString();
            break;
        case '*':
            displayValue = (pendingValue * currentValue).toString();
            break;
        case '/':
            displayValue = (pendingValue / currentValue).toString();
            break;
        default:
            return;
    }

    display.value = displayValue;
    operator = undefined;
    pendingValue = undefined;
}
