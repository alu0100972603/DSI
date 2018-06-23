var estrellas = 1;

$(document).ready(function() {
    
    $("#star1").click(function(){
        estrellas = 1
        $("#star1").attr("src", "img/star2.svg")
        $("#star2").attr("src", "img/star.svg")
        $("#star3").attr("src", "img/star.svg")
        $("#star4").attr("src", "img/star.svg")
        $("#star5").attr("src", "img/star.svg")
        return false;
    });
    
    $("#star2").click(function(){
        estrellas = 2
        $("#star1").attr("src", "img/star2.svg")
        $("#star2").attr("src", "img/star2.svg")
        $("#star3").attr("src", "img/star.svg")
        $("#star4").attr("src", "img/star.svg")
        $("#star5").attr("src", "img/star.svg")
        return false;
    });
    
    $("#star3").click(function(){
        estrellas = 3
        $("#star1").attr("src", "img/star2.svg")
        $("#star2").attr("src", "img/star2.svg")
        $("#star3").attr("src", "img/star2.svg")
        $("#star4").attr("src", "img/star.svg")
        $("#star5").attr("src", "img/star.svg")
        return false;
    });
    
    $("#star4").click(function(){
        estrellas = 4
        $("#star1").attr("src", "img/star2.svg")
        $("#star2").attr("src", "img/star2.svg")
        $("#star3").attr("src", "img/star2.svg")
        $("#star4").attr("src", "img/star2.svg")
        $("#star5").attr("src", "img/star.svg")
        return false;
    });
    
    $("#star5").click(function(){
        estrellas = 5
        $("#star1").attr("src", "img/star2.svg")
        $("#star2").attr("src", "img/star2.svg")
        $("#star3").attr("src", "img/star2.svg")
        $("#star4").attr("src", "img/star2.svg")
        $("#star5").attr("src", "img/star2.svg")
        return false;
    });
    
    $.get('Mostrar.php', function (data) 
    {
        myObj = JSON.parse(data);
        
        var txt = "";
        txt += "<div>"
        
        for (x in myObj) 
        {
            var n_estre = myObj[x].estrellas;
            
            txt += "<div class='row val'> <div class='col s12'> "
            txt += "<div class='row message_head val'>"
            txt += "<div class='col s4'>" + myObj[x].nombre + "</div>";
            txt += "<div class='col s4 offset-s1 right-align'>" + myObj[x].fecha + "</div>";
            txt += "<div class='col s3 right-align'>"
            txt += "<img class='star_rating' src='img/" + n_estre + "star.png' alt='Calificado con " + n_estre +  " estrellas'>"
            txt += "</div></div>"
            txt += "<div class='row val'>"
            txt += "<div class='col s12 mensaje'>" + myObj[x].mensaje + "</div>" ;
            txt += '</div></div></div>'
        }
        txt += "</div>"        
        document.getElementById("Informacion").innerHTML = txt;
        
    });
    
});

function validate_form()
{
    $(".failure").css("display", "none");
    $(".failure p").css("display", "none");
    
    var nombre    = $("#nombre").val()
    var mensaje   = $("#mensaje").val()
    
    if(nombre.length == 0) 
    {
        $(".failure").css("display", "block");
        $("#f1").css("display", "block");
        return false;
    }
    
    if(mensaje.length == 0) 
    {
        $(".failure").css("display", "block");
        $("#f2").css("display", "block");
        return false;
    }
    
    $("#estrellas").val(estrellas);
    return true;
}

