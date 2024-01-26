

<?php

/*

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

*/


class Empleo {
    public $id, $titulo, $categoria, $sucursal;
    public function __construct($id, $titulo, $categoria, $sucursal) {
        $this -> id = $id;
        $this -> titulo = $titulo;
        $this -> categoria = $categoria;
        $this -> sucursal = $sucursal;
    }
}

class ModeloEmpleo {

    public function obtenerEmpleos() {
        $empleos = array(
            new Empleo(191864, 'Recursos Humanos Jr.', 'Recursos Humanos', 'Heroica Zitácuaro, Michoacán' ),
            new Empleo(642687, 'Ingeniero de Logistica y control de almacenes', 'Logistica', 'Guadalajara, Jalisco'),
            new Empleo(843297, 'Gerente Administrativo de Sucursal', 'Administracion', 'Guadalajara, Jalisco'),
            new Empleo(477113, 'Chef Ejecutivo', 'Alimentos', 'Metepec, Edo. México'),
            new Empleo(983071, 'Licenciado en Nutricion/Dietista', 'Alimentos', 'Guadalajara, Jalisco'),
            new Empleo(218914, 'Licenciado en Nutricion/Dietista', 'Alimentos', 'Metepec, Edo. México')
        );

        return $empleos;
    }
}




?>