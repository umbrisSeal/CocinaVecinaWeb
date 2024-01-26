

<?php

class Verificacion {
    public $verificado = false;
}

class vistaUsuario {
    public function mostrarVerificacionUsuario($verifiacionUsuario) {
        $verificacion = $verifiacionUsuario -> usuarioExiste;

        if(!$verificacion) {
            //echo 'Este usuario no existe.';
            http_response_code(200);
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST');
            header('Access-Control-Allow-Headers: Content-Type');
            header('Content-Type: application/json');
            echo json_encode(new Verificacion);
        } else {
            // echo 'Si esta verificado';
        }
    }
}


?>