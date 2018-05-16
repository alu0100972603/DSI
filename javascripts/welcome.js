$(document).ready(function(){

    $.get('getsession.php', function (data) {
        var sesion = JSON.parse(data) 
        
        $("#welcome").html("Hola de nuevo, " + sesion["USUARIO"])

    });
    
});