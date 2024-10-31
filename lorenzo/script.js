function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateScientific(func) {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    
    if (!isNaN(value)) {
        switch (func) {
            case 'sin':
                display.value = Math.sin(value);
                break;
            case 'cos':
                display.value = Math.cos(value);
                break;
            case 'tan':
                display.value = Math.tan(value);
                break;
        }
    } else {
        display.value = 'Error';
    }
}