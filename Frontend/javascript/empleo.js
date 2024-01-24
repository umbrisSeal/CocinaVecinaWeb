
const tabla = document.getElementById('empleo-tabla');
const empleoMensaje = document.getElementById('empleo-mensaje');
const filtros = document.getElementById('filtros');
const filtroAviso = document.getElementById('filtro-aviso');


// Simulacion de datos de Backend:

const empleos = [
    {
        id: 12345,
        titulo: 'Ayudante de Recursos humanos',
        categoria: 'Recursos Humanos',
        sucursal: 'Toluca, Estado de México.'
    },
    {
        id: 2123,
        titulo: 'Jefe de Cocina',
        categoria: 'Alimentos y Cocina',
        sucursal: 'Toluca, Estado de México.'
    },
    {
        id: 98122,
        titulo: 'Gerente de Sucursal',
        categoria: 'Administrativo',
        sucursal: 'Toluca, Estado de México.'
    },
    {
        id: 64245,
        titulo: 'Ingeniero de Logistica y Control de Almacenes Crossdocking',
        categoria: 'Logistica',
        sucursal: 'Toluca, Estado de México.'
    },
    {
        id: 39042,
        titulo: 'Soplador de Comal',
        categoria: 'Alimentos y Comida',
        sucursal: 'Toluca, Estado de México.'
    },
    {
        id: 44520,
        titulo: 'Doblador de Quesadillas',
        categoria: 'Alimentos y Comida',
        sucursal: 'Metepec, Estado de México.'
    },
    {
        id: 63777,
        titulo: 'Todologo',
        categoria: 'Todos',
        sucursal: 'Sujeto a disponibilidad.'
    }
]



empleosTest = [];
empleosTest = empleos.slice(0, 1);


/*
=====================
    CREAR RENGLONES
=====================
*/

let setSucursales = new Set();

if (empleosTest.length > 0) {
    empleosTest.forEach( (empleo) => {
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

    console.log(filtroAviso);
}



