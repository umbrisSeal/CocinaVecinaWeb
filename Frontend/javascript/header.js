
/*
=====================
    FUNCIONAMIENTO DEL HEADER EN DISPOSITIVOS MOBILES
=====================
*/

const botonOpciones = document.getElementById('boton-opciones');
const menuDesplegable = document.getElementById('menu-desplegable');

botonOpciones.addEventListener('click', (event) => {
    if (menuDesplegable.classList.contains('ocultar')) {
        // Mostrar menu.
        menuDesplegable.classList.remove('ocultar');
        botonOpciones.setAttribute('src', '/images/iconos/cerrar.png');
    }
    else {
        // Ocultar menu.
        menuDesplegable.classList.add('ocultar');
        botonOpciones.setAttribute('src', '/images/iconos/opciones.png');
    }
})

window.addEventListener('resize', (event) => {
    if (!menuDesplegable.classList.contains('ocultar')) {
        menuDesplegable.classList.add('ocultar');
        botonOpciones.setAttribute('src', '/images/iconos/opciones.png');
    }
})