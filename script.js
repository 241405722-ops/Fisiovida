const formulario = document.getElementById("formulario-cita");
const mensaje = document.getElementById("mensaje");
const campoFecha = document.getElementById("fecha");

// Evita seleccionar una fecha anterior al día actual.
const hoy = new Date();
const fechaLocal = new Date(
    hoy.getTime() - hoy.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

campoFecha.min = fechaLocal;

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();

    if (nombre.length < 2) {
        mensaje.textContent = "Escribe un nombre válido.";
        return;
    }

    mensaje.textContent =
        "¡Gracias, " + nombre +
        "! La solicitud de demostración fue validada. " +
        "No se envió ni se guardó ninguna cita real.";

    formulario.reset();
});