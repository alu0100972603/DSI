<meta charset="UTF8">
<?php
	ini_set ('error_reporting', E_ALL & ~E_NOTICE);
    	include "conexion.php";
	
	$Conexion= crear_conexion();

	$Mail=$_REQUEST["mail_"];
	$Password=$_REQUEST["Password_"];
	$SQL="select * from datos_personales where mail='$Mail' and password='$Password'";
	
	echo $SQL;

	$Resultado = mysqli_query($Conexion, $SQL);
	$Tupla = mysqli_fetch_array($Resultado, MYSQLI_ASSOC);
	
	if($Tupla["id"]!=""){
		$_SESSION["USUARIO_ID"] = $Tupla["id"];
		$_SESSION["USUARIO_NOMBRE"] = $Tupla["name"];
		echo "Seccion iniciada";
	}else{
		echo "Fallo";
	}
?>