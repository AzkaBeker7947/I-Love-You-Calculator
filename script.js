function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        display.value = 'i love You XD';
        setTimeout(function() {
            display.value = 'btw coba pencet "=" lagi :D'
        }, 1000);
    } else {
        try {
            display.value = eval(expression);
        } catch {
            window.location.href = "flower tree.html";
        }
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
