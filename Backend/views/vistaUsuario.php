

<?php

class Verificacion {
    public $verificado = false;
}

class vistaUsuario {
    public function mostrarVerificacionUsuario($verifiacionUsuario) {
        $verificacion = $verifiacionUsuario -> usuarioExiste;

        if(!$verificacion) {
            //echo 'Este usuario no existe.';
            header('Content-Type: application/json');

            // Para permitir CORS:
            header('Access-Control-Allow-Origin: *');

            http_response_code(200);
            echo json_encode(new Verificacion);
        } else {
            // echo 'Si esta verificado';
        }
    }
}


?>