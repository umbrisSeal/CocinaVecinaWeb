
<?php


class VistaEmpleados {
    public function mostrarEmpleos($empleos) {
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode($empleos);
    }
}


?>