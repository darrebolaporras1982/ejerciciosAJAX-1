<?php
    $descripcion = file_get_contents("php://input");
    include('funciones.php');
    $existe=queryArticulo($descripcion);
?>