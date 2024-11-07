function appendToScreen(value) {
    document.getElementById("schermo").value += value;
}


function calculate() {
    try {
        let expression = document.getElementById("schermo").value;
        let result = eval(expression);
        document.getElementById("schermo").value = result;
    } catch (error) {
        document.getElementById("schermo").value = "Errore";
    }
}

function clearScreen() {
    document.getElementById("schermo").value = "";
}