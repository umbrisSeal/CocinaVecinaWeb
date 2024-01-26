
<?php

class Vacio {
    public $usuarioExiste = false;
}

class ModeloUsuario {
    public function verificarUsuario() {
        // Manipulacion de base de datos. (Fetch)
        return new Vacio;
    }
}


?>