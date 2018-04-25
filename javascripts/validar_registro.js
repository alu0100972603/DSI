function validate_Email(email)
{
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;

    if(!expr.test(email))
        return false;
    else
        return true;
}

function validate_form()
{
	var nombre  = document.forms["Formulario"]["name"].value;
	var email   = document.forms["Formulario"]["mail"].value;
	var contra  = document.forms["Formulario"]["Password"].value;
	var contra2 = document.forms["Formulario"]["Repetir_Password"].value;
    var terms   = document.getElementById("terms").checked;

    
    if (terms == 0)
    {
        alert("Debe aceptar los Términos y Condiciones de Uso para continuar");
		return false;
	}
	else if((nombre.length == 0) || (email.length == 0) || (contra.length == 0) || (contra2.length == 0))
    {
		alert("Rellene todos los campos");
		return false;
	}
    else if(validate_Email(email) == false)
    {
        alert("Formato e-mail incorrecto.");
        return false;
    }
    else if(contra2 != contra)
    {
        alert("Las contraseñas introducidas no coinciden");
        return false;
    }
    return true;
}