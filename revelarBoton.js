const button = document.getElementById("boton_oculto");

function revelarBoton() {
    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none"
    }
}