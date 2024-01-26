
const claveAcceso = document.getElementById('clave-acceso');
const usuario = document.getElementById('fusuario');
const password = document.getElementById('fpassword');
const botonLogin = document.getElementById('boton-login');
const loginMensaje = document.getElementById('login-mensaje');
const pmensaje = document.getElementById('pmensaje');

const ERROR = {
    DATOS_INCOMPLETOS: 'Por favor, rellene todos los campos.',
    EMAIL: 'El dominio de su correo electronico no es permitido.',
    ERROR: 'Ha ocurrido un error, por favor intente mas tarde.',
    CLAVE_ACCESO: 'La clave de acceso es incorrecta o ya ha expirado.',
    CREDENCIALES: 'El usuario o contraseña es incorrecto.'
};

const mostrarError = (error) => {
    // Imprimir error.
    if (loginMensaje.classList.contains('ocultar')) {
        loginMensaje.classList.remove('ocultar');
    }
    if (!loginMensaje.classList.contains('login-error')) {
        loginMensaje.classList.add('login-error')
    }
    pmensaje.textContent = error;
}

const ocultarError = () => {
    // Ocultar error.
    if (!loginMensaje.classList.contains('ocultar')) {
        loginMensaje.classList.add('ocultar');
    }
    if (loginMensaje.classList.contains('login-error')) {
        loginMensaje.classList.remove('login-error');
    }
    pmensaje.textContent = '';
}

const comprobarDatos = () => {
    return comprobarEntrada() && comprobarClaveAcceso() && comprobarDominio();
}

const comprobarEntrada = () => {
    // Comprobar que los compos no esten vacios.
    const regexEspacios = /\s/g;
    if (usuario.value.replace(regexEspacios, '').length != 0 &&
    password.value.replace(regexEspacios, '').length != 0) {
        return true;
    }
    mostrarError(ERROR.DATOS_INCOMPLETOS);
    return false;
}

const comprobarClaveAcceso = () => {
    const regexEspacios = /\s/g;
    if (claveAcceso) {
        if (claveAcceso.value.replace(regexEspacios, '').length != 0) {
            return true;
        } else {
            mostrarError(ERROR.DATOS_INCOMPLETOS);
            return false;
        }
    } else {
        return true;
    }
}

const comprobarDominio = () => {
    const regexDominiosEmail = /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/
    const regexEspacios = /\s/g;
    if (regexDominiosEmail.test(usuario.value.replace(regexEspacios, ''))) {
        // Dominio aceptado (gmail, yahoo, outlook o hotmail)
        return true;
    }
    mostrarError(ERROR.EMAIL);
    return false;
}

const encriptar = async (password) => {
    const buffer = new TextEncoder().encode(password);
    const sal = crypto.getRandomValues( new Uint8Array(16));
    const bufferSal = new Uint8Array([...buffer, ...sal]);
    const hashBuffer = await crypto.subtle.digest('SHA-256', bufferSal);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    const salt = Array.from(sal).map(byte => byte.toString(16).padStart(2, '0')).join('');

    return {
        hashPassword: hash,
        salt: salt
    }
}


/*
=====================
    PETICIONES HTTP
=====================
*/

const acceder = (datos) => {
    fetch('http://localhost:3000/usuarios.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then( respuesta => respuesta.json())
    .then( respuesta => {
        console.log(respuesta);
        if( respuesta.verificado == false) {
            if (claveAcceso) {
                mostrarError(ERROR.CLAVE_ACCESO);
            } else {
                mostrarError(ERROR.CREDENCIALES);
            }
        }
    })
    .catch( error => {
        console.log(`Ha ocurrido un error: ${error}`);
    })
    ;
}

/*
=====================
    EVENT LISTENERS
=====================
*/

botonLogin.addEventListener('click', (event) => {
    ocultarError();
    if(comprobarDatos()) {
        console.log('Todo correcto');
        //Encriptar
        const regexEspacios = /\s/g;
        let encriptacion = {}
        encriptar(password.value.replace(regexEspacios, ''))
            .then( (passwordHash) => {
                //console.log(password.value);
                //console.log(`Hash: ${passwordHash.hashPassword}`)
                //console.log(`Salt: ${passwordHash.salt}`)
                encriptacion = passwordHash;
            })
        ;

        const datos = {
            password: encriptacion,
            claveAcceso: claveAcceso ? claveAcceso.value.replace(regexEspacios, '') : ''
        }

        acceder(datos);

    } else {
        console.log('Parece que hubo un error');
    }
})
