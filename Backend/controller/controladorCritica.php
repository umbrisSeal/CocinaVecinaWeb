
<?php

class controladorCritica {
    private $modelo;
    private $vista;

    public function __construct($modelo, $vista) {
        $this->modelo = $modelo;
        $this->vista = $vista;
    }

    public function mostrarCriticas() {
        $criticas = $this-> modelo -> obtenerCriticas();
        $this -> vista -> mostrarCriticas($criticas);
    }
}

?>