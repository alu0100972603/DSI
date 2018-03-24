/********************* VALIDACION DEL FORMULARIO EN JAVASCRIPT ******************************************/

function validate_Email(email){
		    
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;

    if(!expr.test(email))
        return false;
    else
    	return true;
}

function validate_form(){
	
	
	alert("hola")
	
	//Obtenemos el valor del elemento con el ID especificado

	var email = document.forms["Formulario"]["mail"].value;
	var contra = document.forms["Formulario"]["Password"].value;
	
	//Comprobamos si los campos estan vacios o no cumplen las condiciones

	if(email.length == 0)
	{
		alert("No se pueden dejar campos vacíos. Por favor introduzca un email.");
		return false;
	}
	else if(validate_Email(email) == false)
	{
		alert("Formato de e-mail incorrecto");
		return false;
	}
	else if(contra.length == 0)
	{
		alert("No se pueden dejar campos vacíos. Por favor introduzca una contraseña.");
		return false;
	}
	
	return true
	
}