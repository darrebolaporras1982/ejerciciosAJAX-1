<?php
   function crear_conexion (){
    $Hostdb="localhost";
    $namedb="articulos";
    $userdb="root";
    $passworddb="";
    $DBHost=("mysql:host=$Hostdb;dbname=$namedb");
    try{
        $conexion=new PDO($DBHost,$userdb,$passworddb);
        $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $conexion->exec("set names utf8");
    }catch(Exception $e){
        $e->getMessage();
    }
    return $conexion;
}

    function queryTotal(){
        $conexion=crear_conexion();
        $consulta="SELECT * FROM articulo;";
        $stmt=$conexion->prepare($consulta);
        $stmt->execute();
        $filas=$stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach($filas as $fila){
            echo "<tr><td>".$fila['id_articulo']."</td><td>".$fila["descripcion"]."</td><td>".$fila["precio_unitario"]."</td></tr>";
        }
    }












?>