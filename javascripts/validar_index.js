function validate_form()
{
	var email = document.forms["Formulario"]["mail"].value;
	var contra = document.forms["Formulario"]["Password"].value;
	
	var v_email = new Email(email);

	if((email.length == 0) || (contra.length == 0))
	{
		alert("Rellene todos los campos");
		return false;
	}
	else if(v_email.validate_Email() == false)
	{
		alert("Formato de e-mail incorrecto");
		return false;
	}
	return true;
}