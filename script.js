document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("accionBtn");
  const mensaje = document.getElementById("mensaje");
  let fondoClaro = true;

  boton.addEventListener("click", () => {
    mensaje.textContent = "¡Gracias por interactuar! 🎉";
    document.body.style.backgroundColor = fondoClaro ? "#ffe6cc" : "#f0f0f0";
    fondoClaro = !fondoClaro;
  });
});