/********************* VALIDACION DEL FORMULARIO EN JAVASCRIPT ******************************************/

function validate_Email(email){
		    
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;

    if(!expr.test(email))
        return false;
    else
    	return true;
}

function validate_form(){
	
	/* Obtenemos el valor del elemento con el ID especificado */

	var nombre = document.forms["Formulario"]["name"].value;
	var email = document.forms["Formulario"]["mail"].value;
	var contra = document.forms["Formulario"]["Password"].value;

	
	/* Comprobamos si los campos estan vacios o no cumplen las condiciones*/

	if(nombre.length == 0){
		alert("No se pueden dejar campos vacíos. Por favor introduzca un nombre.");
		return false;
	}
	else{
		
		if(email.length == 0){
			alert("No se pueden dejar campos vacíos. Por favor introduzca un email.");
			return false;
		}
		else{
			if(validate_Email(email) == false){
				alert("FORMATO INCORRECTO. POR FAVOR VUELVA A INTRODUCIR EL CORREO");
				return false;
			}
			if(contra.length == 0){
				alert("No se pueden dejar campos vacíos. Por favor introduzca una contraseña.");
				return false;
			}
		}
	}
}