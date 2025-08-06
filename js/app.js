// creo formulario
let formulario = document.getElementById("formulario");
// formulario enviado
formulario.addEventListener("submit",function (enviado) {
    enviado.preventDefault();
    alert("Enviado correctamente");
    formulario.reset();
});