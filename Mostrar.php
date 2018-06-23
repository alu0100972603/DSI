<?php
    
    ini_set ('error_reporting', E_ALL & ~E_NOTICE);
    include "conexion.php";

    $conn = crear_conexion();

    $result = $conn->query("select * from Chat order by id desc");
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    $jsonencoded = json_encode($outp);
    echo $jsonencoded;
?> 