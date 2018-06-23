function validate_form()
{
    $(".failure").css("display", "none");
    $(".failure p").css("display", "none");
    
    var nombre  = document.forms["Formulario"]["name"].value;
    var email   = document.forms["Formulario"]["mail"].value;
    var contra  = document.forms["Formulario"]["Password"].value;
    var contra2 = document.forms["Formulario"]["Repetir_Password"].value;
    var terms   = document.getElementById("terms").checked;

    var v_email = new Email(email);
    
    if (terms == 0)
    {
        $(".failure").css("display", "block");
        $("#f1").css("display", "block");
        
        return false;
    }
    else if((nombre.length == 0) || (email.length == 0) || (contra.length == 0) || (contra2.length == 0))
    {
        $(".failure").css("display", "block");
        $("#f2").css("display", "block");
        return false;
    }
    else if(v_email.validate_Email() == false)
    {
        $(".failure").css("display", "block");
        $("#f3").css("display", "block");
        return false;
    }
    else if(contra2 != contra)
    {
        $(".failure").css("display", "block");
        $("#f4").css("display", "block");
        return false;
    }
    return true;
}