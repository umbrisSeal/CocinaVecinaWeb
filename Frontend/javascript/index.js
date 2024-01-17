
let contadorIniciado = false;

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
        document.getElementById("contador").innerHTML = `⭐ ${agregarComas(i)} ⭐`;
        if (i >= iFinal) {
            document.getElementById("contador").innerHTML = `⭐ ${agregarComas(iFinal)} ⭐`;
            clearInterval(contador);
        }
    }, Math.floor(intervaloMs / iFinal));
}




// EVENT LISTENERS:

window.onscroll = () => {
    // Ejecutar efecto contador cuando el usuario pueda ver dicha seccion.
    // 700px?
    if (window.scrollY >= 700 && !contadorIniciado) efectoContador(138657); /* Solicitar registro del backend. */
}