<meta charset="UTF8">
<?php
	ini_set ('error_reporting', E_ALL & ~E_NOTICE);
    include "conexion.php";
	
	$Conexion= crear_conexion();

	$Mail=$_REQUEST["mail_"];
	$Password=$_REQUEST["Password_"];
	$SQL="select * from datos_personales where mail='$Mail' and password='$Password'";

	$Resultado = mysqli_query($Conexion, $SQL);
	$Tupla = mysqli_fetch_array($Resultado, MYSQLI_ASSOC);
    $id = $Tupla["id"];

	if ($id != "")
    {
        $SQL="select tipo from alergenos where id='$id'";
        $Resultado = mysqli_query($Conexion, $SQL);
        $Alergenos = "";
        while($row = $Resultado->fetch_assoc())
        {
            $Alergenos .= $row['tipo'];
            $Alergenos .= " ";
        }
        
        session_start();
        $_SESSION["USUARIO"] = $Tupla["name"];
        $_SESSION["STATUS"] = "OK";
        $_SESSION["ALERGENOS"] = $Alergenos;
        
        echo "<script>
              window.location.href='welcome.html';
              </script>";
    }
    else{
        echo "<script>
                window.location.href='fail.html';
              </script>";
    }

?>