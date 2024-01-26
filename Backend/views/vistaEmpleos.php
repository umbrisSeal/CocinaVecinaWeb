
<?php


class VistaEmpleados {
    public function mostrarEmpleos($empleos) {
        http_response_code(200);
        //CORS:
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');
        echo json_encode($empleos);
    }
}


?>