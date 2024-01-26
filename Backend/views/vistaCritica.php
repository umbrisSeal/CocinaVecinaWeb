
<?php

class vistaCritica {
    public function mostrarCriticas($criticas) {
        // Mostrar la informacion.
        http_response_code(200);
        header('Content-Type: application/json');

        // CORS
        header("Access-Control-Allow-Origin: *");

        $respuestaJSON = json_encode($criticas);
        print_r($respuestaJSON);
    }
}

?>