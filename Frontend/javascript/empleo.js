
const tabla = document.getElementById('empleo-tabla');
const empleoMensaje = document.getElementById('empleo-mensaje');
const filtros = document.getElementById('filtros');
const filtroAviso = document.getElementById('filtro-aviso');
const mensajeBusqueda = document.getElementById('mensaje-busqueda');

let empleos = [];

/*
=====================
    PETICIONES HTTP
=====================
*/

fetch('http://localhost:3000/empleos.php')
    .then( (respuesta) => {
        if(!respuesta.ok) {
            throw new Error(`Ha ocurrido un error ${respuesta.status}`);
        } else {
            return respuesta.json();
        }
    })
    .then( datos => {
        empleos = datos;
        mostrarEmpleos(empleos);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
        mostrarEmpleos([]);
    })
;





/*
=====================
    CREAR RENGLONES
=====================
*/

const mostrarEmpleos = (empleos) => {
    let setSucursales = new Set();

    mensajeBusqueda.classList.add('ocultar');
    
    if (empleos.length > 0) {
        empleos.forEach( (empleo) => {
            let nuevoRenglon = document.createElement('tr');
            let titulo = document.createElement('td');
            let categoria = document.createElement('td');
            let sucursal = document.createElement('td');
            let vinculo = document.createElement('td');
            let boton = document.createElement('button');
        
            titulo.textContent = empleo.titulo;
            categoria.textContent = empleo.categoria;
            sucursal.textContent = empleo.sucursal;
            boton.textContent = 'Ver';
        
            boton.setAttribute('type', 'button');
            boton.classList.add('boton5');
            vinculo.classList.add('centrar');
        
            boton.addEventListener('click', (event) => {
                window.location.href = '/login.html';
            })
        
            vinculo.appendChild(boton);
            nuevoRenglon.appendChild(titulo);
            nuevoRenglon.appendChild(categoria);
            nuevoRenglon.appendChild(sucursal);
            nuevoRenglon.appendChild(vinculo);
    
            setSucursales.add(empleo.sucursal);
        
            tabla.appendChild(nuevoRenglon);
        })
    
        Array.from(setSucursales).forEach( (sucursal, index) => {
            let filtro = document.createElement('div');
            let checkbox = document.createElement('input');
            let label = document.createElement('label');
    
            filtro.classList.add('filtro');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.id = `filtro${(index+1).toString()}`;
            label.setAttribute('for', checkbox.id.toString());
            label.textContent = ` ${sucursal}`;
    
            filtro.appendChild(checkbox);
            filtro.appendChild(label);
    
            filtros.appendChild(filtro);
        })
    
    } else {
    
        tabla.classList.add('ocultar');
        empleoMensaje.classList.remove('ocultar');
    
        filtros.classList.add('ocultar');
        filtroAviso.classList.remove('ocultar');
    }
}




