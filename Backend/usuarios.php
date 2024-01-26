
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
    $controlador -> verificarUsuario();
}


?>