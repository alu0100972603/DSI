<meta charset="UFT8">

<?php
ini_set ('error_reporting', E_ALL & ~E_NOTICE);
   include "conexion.php";
    
    $Conexion = crear_conexion();  
    
    if ($Conexion)
    {
        $Name     = $_REQUEST["nombre_"];
        $Mensaje = $_REQUEST["mensaje_"];
        $Estrellas = $_REQUEST["estrellas"];
        $Fecha =  date("Y-m-d");
        
        $SQL  = "insert into Chat";
        $SQL .= " (nombre, mensaje, fecha, estrellas ) values ";
        $SQL .= " ('$Name', '$Mensaje', '$Fecha', '$Estrellas')";
        
        if (!mysqli_query($Conexion, $SQL))
        {
            echo "Error: " . mysqli_error($Conexion);
        }else{
            echo "<script>
                window.location.href='Valorar.html';
                </script>";
        }
        
            
        
    }
    else
    {
        die("Error al conectar con la base de datos.");
 }
?>