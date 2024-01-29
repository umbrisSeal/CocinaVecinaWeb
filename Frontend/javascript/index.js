
let contadorIniciado = false;
let criticaActual = 1;
let usuarioCambioPagina = false;

const critica = document.getElementById('contenedor-critica');
const botonAnterior = document.getElementById('boton-arrow1');
const botonSiguiente = document.getElementById('boton-arrow2');
const botonesPaginacion = document.getElementsByClassName('circulo');

const agregarComas = (numero) => {
    // Cambia el numero dado a notacion coma.
    const regexComas = /\B(?=(\d{3})+(?!\d))/g;

    let notacionComa = numero.toString();
    notacionComa = notacionComa.replace(regexComas, ",");
    
    return notacionComa
}

const efectoContador = (numeroFinal) => {
    // Podria mejorarse calculando intervaloMs e incrementos de manera independiente.
    // Tambien podria mejorarse solicitando el elemento HTML.
    contadorIniciado = true;
    const intervaloMs = 3000;
    let i = 0;
    const iFinal = numeroFinal;
    let contador = setInterval( () => {
        i += 123;
        document.getElementById("contador").innerHTML = `${agregarComas(i)}`;
        if (i >= iFinal) {
            document.getElementById("contador").innerHTML = `${agregarComas(iFinal)}`;
            clearInterval(contador);
        }
    }, Math.floor(intervaloMs / iFinal));
}

const mostrarCritica = (id) => {
    const criticaAutor = document.getElementById('critica-autor');
    const criticaContenido = document.getElementById('critica-contenido');
    const criticaImagen = document.getElementById('critica-imagen');

    const datosCritica = criticas.find( (critica) => {
        return critica.id == id;
    } )

    criticaAutor.innerHTML = datosCritica.autor;
    criticaContenido.innerHTML = `"${datosCritica.opinion}"`;
    criticaImagen.setAttribute('src', datosCritica.imagenUrl);
}

const cambiarCritica = (incrementar, criticaSeleccionada = 0) => {
    critica.style.opacity = 0;

    setTimeout( () => {
        if (criticaSeleccionada != 0) {
            // Seleccionar una critica especifica.
            botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
            criticaActual = criticaSeleccionada;
            botonesPaginacion[criticaSeleccionada-1].classList.add('seleccionado');
            mostrarCritica(criticaActual);
        } else {
            if (incrementar) {
                // Mostrar la siguiente critica.
                botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
                criticaActual = criticaActual < 6 ? criticaActual+1 : 1;
                botonesPaginacion[criticaActual-1].classList.add('seleccionado');
                mostrarCritica(criticaActual);
            } else {
                // Mostrar la critica anterior.
                botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
                criticaActual = criticaActual > 1 ? criticaActual-1 : 6;
                botonesPaginacion[criticaActual-1].classList.add('seleccionado');
                mostrarCritica(criticaActual);
            }
        }

        // Tiempo de setTimeout debe de concordar con CSS .desvanecer-js
        critica.style.opacity = 1;
    }, 800);
}


/*
=====================
    PETICIONES HTTP
=====================
*/

fetch('/api/criticas.php')
    .then( (respuesta) => {
        if(!respuesta.ok) {
            throw new Error(`Ha ocurrido un error ${respuesta.status}`);
        } else {
            return respuesta.json();
        }
    })
    .then( datos => {
        criticas = datos;
    })
    .catch(error => console.log(`Error: ${error}`))
;

let criticas = [];



/*
=====================
    EVENT LISTENERS
=====================
*/


// Contador

window.onscroll = () => {
    // Ejecutar efecto contador cuando el usuario pueda ver dicha seccion.
    if (window.scrollY >= 600 && !contadorIniciado) efectoContador(14657); 
    /* Solicitar registro del backend. */
}


// Controles Criticas

Array.from(botonesPaginacion).forEach( (boton, index) => {
    boton.addEventListener('click', (event) => {
        const nBoton = index+1;
        usuarioCambioPagina = true;
        cambiarCritica(true, nBoton);
    })
})

botonAnterior.addEventListener('click', (event) => {
    usuarioCambioPagina = true;
    cambiarCritica(false);
})

botonSiguiente.addEventListener('click', (event) => {
    usuarioCambioPagina = true;
    cambiarCritica(true);
})


// Auto-slide para Criticas

setInterval( () => {
    if (!usuarioCambioPagina) {
        cambiarCritica(true);
    }
    usuarioCambioPagina = false;
}, 5000)
