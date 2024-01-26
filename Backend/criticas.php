
<?php

// ENDPOINT: /criticas

require_once __DIR__ . '/models/modeloCritica.php';
require_once __DIR__ . '/controller/controladorCritica.php';
require_once __DIR__ . '/views/vistaCritica.php';

// Crear instancia
$modelo = new ModeloCritica;
$vista = new vistaCritica;
$controlador = new controladorCritica($modelo, $vista);

// Resolver solicitudes HTTP.


##
//  GET /criticas
##

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controlador -> mostrarCriticas();
}


?>