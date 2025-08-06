const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function (enviado) {
    enviado.preventDefault();
    alert("Enviado correctamente");
    formulario.reset();
});