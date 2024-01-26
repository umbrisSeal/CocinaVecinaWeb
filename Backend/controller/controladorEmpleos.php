

<?php

class ControladorEmpleo {

    public $vista, $modelo;

    public function __construct($modelo, $vista) {
        $this -> modelo = $modelo;
        $this -> vista = $vista;
    }

    public function obtenerEmpleos() {
        $empleos = $this -> modelo -> obtenerEmpleos();
        $this -> vista -> mostrarEmpleos($empleos);
    }
}

?>