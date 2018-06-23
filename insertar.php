<meta charset="UFT8">

<?php
    ini_set ('error_reporting', E_ALL & ~E_NOTICE);
    include "conexion.php";
    

    $Conexion = crear_conexion();
    
    if ($Conexion)
    {
        $Name     = $_REQUEST["name_"];
        $Password = $_REQUEST["Password_"];
        $Mail     = $_REQUEST["mail_"];
        
        $SQL  = "insert into datos_personales";
        $SQL .= " (name, password, mail) values ";
        $SQL .= " ('$Name', '$Password','$Mail')";
        
        if (!(mysqli_query($Conexion, $SQL)))
        {
            echo "Error: " . mysqli_error($Conexion);
        }
        else
        {
            $SQL="select * from datos_personales where mail='$Mail' and password='$Password'";

	       $Resultado = mysqli_query($Conexion, $SQL);
	       $Tupla = mysqli_fetch_array($Resultado, MYSQLI_ASSOC);
	       $id = $Tupla["id"];
            
           if (isset($_POST['alergeno'])){
                foreach($_POST['alergeno'] as $tipo){
                    $SQL  = "insert into alergenos";
                    $SQL .= " (id, tipo) values ";
                    $SQL .= " ('$id', '$tipo')";
                    
                    if (!(mysqli_query($Conexion, $SQL)))
                    {
                        echo "Error: " . mysqli_error($Conexion);
                    }
                }
                    
            }

            echo "<script>;
                    window.location.href='index.html';
                </script>";
        }
            
        
    }
    else
    {
        die("Error al conectar con la base de datos.");
    }

?>