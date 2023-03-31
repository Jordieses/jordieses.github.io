const botonMenu = document.querySelector('#boton-menu');
const navegacion = document.querySelector('nav');

botonMenu.addEventListener('click', function () {
  navegacion.classList.toggle('abierto');
});