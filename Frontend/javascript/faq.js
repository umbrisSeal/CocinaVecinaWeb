
const preguntasFAQ = Array.from(document.getElementsByClassName('pregunta-faq'));

const mostrarRespuesta = (elementoHTML) => {
    const elementoFaq = elementoHTML.parentNode;
    const respuestaFaq = elementoFaq.children[2];
    const botonFaq = elementoHTML.children[0];

    if (respuestaFaq.classList.contains('ocultar')) {
        respuestaFaq.classList.remove('ocultar');
        botonFaq.classList.add('rotar');
    } else {
        respuestaFaq.classList.add('ocultar');
        botonFaq.classList.remove('rotar');
    }
}







/*
=====================
    EVENT LISTENERS
=====================
*/

preguntasFAQ.forEach( (preguntaFaq) => {
    preguntaFaq.addEventListener('click', (event) => {
        mostrarRespuesta(preguntaFaq);
    })
})