function appendToScreen(value) {
    document.getElementById("schermo").value += value;
}


function calculate() {

        let expression = document.getElementById("schermo").value;
        let result = eval(expression);
        document.getElementById("schermo").value = result;
}

function clearScreen() {
    document.getElementById("schermo").value = "";
}
