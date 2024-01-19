
let contadorIniciado = false;
let criticaActual = 1;
let usuarioCambioPagina = false;

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
        i += 331;
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





/*
=====================
    Presentacion de Criticas
=====================
*/

// Datos de backend simulados

const URL_IMAGENES = {
    // Solo para prueba.
    MICHAEL: 'https://m.media-amazon.com/images/M/MV5BMTc2NzcyMDU5NV5BMl5BanBnXkFtZTcwODc1OTM0NA@@._V1_.jpg',
    RIHANNA: 'https://media.glamour.mx/photos/635bda0eaac1b04410bd0524/16:9/w_2560%2Cc_limit/rihanna-new-song-2022-plack-panther-lift-me-up-wakanda-forever-gettyimages-1436969477.jpg',
    MILEY: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/09/13/miley-cyrus.jpeg',
    WILL: 'https://cdn-3.expansion.mx/dims4/default/f3cf1fc/2147483647/strip/true/crop/1200x799+0+0/resize/1200x799!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff4%2F1d%2F22f14ecf43c0b6232ef7b2b1644b%2Fgettyimages-465783654.jpg',
    LADY: 'https://ca-times.brightspotcdn.com/dims4/default/29bc2c3/2147483647/strip/true/crop/1000x667+0+42/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5c0be5c4%2Fturbine%2Fla-hp-lady-gaga-4x3-rotato-1-20181208',
    ADAM: 'https://cdn.britannica.com/52/243652-050-FEE0A5E4/Actor-Adam-Sandler-2019.jpg'
}

const criticas = [
    {
        id: 1,
        autor: 'Michael Bay',
        opinion: 'Boom! That\'s the sound of my expectations exploding.',
        imagenUrl: URL_IMAGENES.MICHAEL
    },
    {
        id: 2,
        autor: 'Rihanna Bannana',
        opinion: 'This place needs to take a bow and exit the stage.',
        imagenUrl: URL_IMAGENES.RIHANNA
    },
    {
        id: 3,
        autor: 'Miley Cytrus',
        opinion: 'Well, ain\' this just a wrecking ball of disappointment!',
        imagenUrl: URL_IMAGENES.MILEY
    },
    {
        id: 4,
        autor: 'Will Iron Smith',
        opinion: 'Man, oh man! This place is like the Wild Wild West of disappointment.',
        imagenUrl: URL_IMAGENES.WILL
    },
    {
        id: 5,
        autor: 'Lady Pasta',
        opinion: 'What a disaster, darlings! The only applause they\'re getting is for the worst dinning expirience ever.',
        imagenUrl: URL_IMAGENES.LADY
    },
    {
        id: 6,
        autor: 'Adam Sandler',
        opinion: 'Service so slow that made me scream "You can do it!".',
        imagenUrl: URL_IMAGENES.ADAM
    },

]

mostrarCritica(criticaActual);


/*
=====================
    EVENT LISTENERS
=====================
*/


// Contador

window.onscroll = () => {
    // Ejecutar efecto contador cuando el usuario pueda ver dicha seccion.
    // 700px?
    if (window.scrollY >= 700 && !contadorIniciado) efectoContador(138657); /* Solicitar registro del backend. */
}


// Controles Criticas

Array.from(botonesPaginacion).forEach( (boton, index) => {
    boton.addEventListener('click', (event) => {
        const nBoton = index+1;
        botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
        botonesPaginacion[nBoton-1].classList.add('seleccionado');
        criticaActual = nBoton;
        usuarioCambioPagina = true;
        mostrarCritica(criticaActual);
    })
})

botonAnterior.addEventListener('click', (event) => {
    botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
    criticaActual = criticaActual > 1 ? criticaActual-1 : 6;
    botonesPaginacion[criticaActual-1].classList.add('seleccionado');
    usuarioCambioPagina = true;
    mostrarCritica(criticaActual);
})

botonSiguiente.addEventListener('click', (event) => {
    botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
    criticaActual = criticaActual < 6 ? criticaActual+1 : 1;
    botonesPaginacion[criticaActual-1].classList.add('seleccionado');
    usuarioCambioPagina = true;
    mostrarCritica(criticaActual);
})


// Auto-slide para Criticas

setInterval( () => {
    if (!usuarioCambioPagina) {
        botonesPaginacion[criticaActual-1].classList.remove('seleccionado');
        criticaActual = criticaActual < 6 ? criticaActual+1 : 1;
        botonesPaginacion[criticaActual-1].classList.add('seleccionado');
        mostrarCritica(criticaActual);
    }
    usuarioCambioPagina = false;
}, 5000)
