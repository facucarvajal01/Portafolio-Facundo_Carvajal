// creo formulario
let formulario = document.getElementById("formulario");

// formulario enviado
formulario.addEventListener("submit",function (enviado) {
    enviado.preventDefault();
    alert("Enviado correctamente");
    formulario.reset();
});

// Botón hamburguesa
let menuhamb = document.getElementById("menu-hamb");
const menu = document.getElementById("menu");

menuhamb.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
