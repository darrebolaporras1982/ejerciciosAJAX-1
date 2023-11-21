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
        echo json_encode($filas);
    }
    

    function queryArticulo($descripcion){
        $conexion=crear_conexion();
        $consulta="SELECT * FROM articulo WHERE descripcion like=:descripcion;";
        $stmt=$conexion->prepare($consulta);
        $stmt->bindParam(":descripcion",$descripcion);
        $stmt->execute();
        $filas=$stmt->rowCount();
        if($filas<0){
            return false;
        }else{
           $filas=$stmt->fetch(PDO::FETCH_ASSOC);
            return true;
        }
    }
    










?>