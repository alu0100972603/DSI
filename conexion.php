<meta charset="UFT8">

<?php

    // Establecer la conexiÃ³n
    function crear_conexion()
    {
        
        $Conexion = new mysqli("sql305.epizy.com",  "epiz_21950536", "ProyectoUYA18", "epiz_21950536_FastFood");

        if ($Conexion->connect_errno)
            die ("Fallo." . $Conexion->connect_errno);
        
        return $Conexion;
    }
        

?>