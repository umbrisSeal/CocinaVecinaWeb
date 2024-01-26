
<?php

##
//  GET /usuario
##

require_once __DIR__ . '/controller/controladorUsuario.php';
require_once __DIR__ . '/models/modeloUsuario.php';
require_once __DIR__ . '/views/vistaUsuario.php';


$modelo = new ModeloUsuario;
$vista = new vistaUsuario;
$controlador = new controladorUsuario($modelo, $vista);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controlador->verificarUsuario();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controlador->verificarUsuario();
} elseif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Required by browser.
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Method Not Allowed';
}


?>