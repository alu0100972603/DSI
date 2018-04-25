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
	var email = document.forms["Formulario"]["mail"].value;
	var contra = document.forms["Formulario"]["Password"].value;
	
	if((email.length == 0) || (contra.length == 0))
	{
		alert("Rellene todos los campos");
		return false;
	}
	else if(validate_Email(email) == false)
	{
		alert("Formato de e-mail incorrecto");
		return false;
	}
	return true;
}