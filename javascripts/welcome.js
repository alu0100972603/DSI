$(document).ready(function(){

    $.get('get_session.php', function (data) {
        var sesion = JSON.parse(data) 
        
        $("#welcome").html("Hola de nuevo, " + sesion["USUARIO"])

    });
    
});