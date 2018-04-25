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
	
	if ($Tupla["id"] != "")
    {
        session_start();
        $_SESSION["USUARIO_NOMBRE"] = $Tupla["name"];
        
        echo "<script>
              window.location.href='welcome.html';
              </script>";
    }
    else{
        echo "<script>
                alert('No se ha podido iniciar sesion.';
                window.location.href='index.html';
              </script>";
    }

?>