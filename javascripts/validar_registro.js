function validate_form()
{
    var nombre  = document.forms["Formulario"]["name"].value;
    var email   = document.forms["Formulario"]["mail"].value;
    var contra  = document.forms["Formulario"]["Password"].value;
    var contra2 = document.forms["Formulario"]["Repetir_Password"].value;
    var terms   = document.getElementById("terms").checked;

    var v_email = new Email(email);
    
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
    else if(v_email.validate_Email() == false)
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