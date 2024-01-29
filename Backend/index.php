
<?php

function muestraError() {
    echo "<h1> Error 404 </h1>";
    echo "Disculpe las molestias, la pagina solicitada no existe.";
}


$urlSolicitada = $_SERVER['REQUEST_URI'];
$segmentos = explode('/', $urlSolicitada);

if ($segmentos[2]) {
    switch ($segmentos[2]) {
        case 'criticas.php':
            require_once ('criticas.php');
            break;
        case 'empleos.php':
            require_once ('empleos.php');
            break;
        case 'usuarios.php':
            require_once ('usuarios.php');
            break;
        default:
            muestraError();
            break;
    }
} else {
    muestraError();
}




?>