$.get('get_session.php', function (data) {
    var sesion = JSON.parse(data) 
    if(sesion["STATUS"] != "OK")
    {
        window.location.href = "index.html";
    }
});