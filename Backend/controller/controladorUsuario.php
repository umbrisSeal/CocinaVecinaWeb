

<?php

class controladorUsuario {
    private $modelo;
    private $vista;

    public function __construct($modelo, $vista) {
        $this -> modelo = $modelo;
        $this -> vista = $vista;
    }


    public function verificarUsuario() {
        $verificacion = $this -> modelo -> verificarUsuario();
        $this -> vista -> mostrarVerificacionUsuario($verificacion);
    }


}

?>