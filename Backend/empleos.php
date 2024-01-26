
<?php

// ENDPOINT /empleos

require_once __DIR__ . '/controller/controladorEmpleos.php';
require_once __DIR__ . '/models/modeloEmpleo.php';
require_once __DIR__ . '/views/vistaEmpleos.php';

$modelo = new ModeloEmpleo;
$vista = new VistaEmpleados;
$controlador = new ControladorEmpleo($modelo, $vista);


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controlador -> obtenerEmpleos();
}




?>