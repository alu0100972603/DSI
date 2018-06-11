$(document).ready(function() {
    $.ajax({
        url:'Mostrar.php',
        type:"POST"
    }).done(function(response){
        myObj = JSON.parse(response);
        var txt="";
        txt += "<div>"
        for (x in myObj) {
            var nestre=myObj[x].estrellas;
            txt += "<div style='font-weight: bold;'><span>" + myObj[x].nombre + "</span>";
            txt += "<span style=' margin-top: -30px;'>&nbsp;&nbsp;&nbsp;" + myObj[x].fecha  + "</span></div><div style='margin-top: -30px; '>";
			
            for(var i=0;i<nestre;i++){
                txt += "<span>" + "★" + "</span>";
            }
            txt+="</div>";
            txt += "<div style='margin-top: -30px;margin-bottom:15px;'><span>" + myObj[x].mensaje + "</span></div>" ;
        }
        txt += "</div>"        
        document.getElementById("Informacion").innerHTML = txt;
    });
});

function validate_form()
{
    var nombre = document.forms["Formulario"]["nombre"].value;
    var mensaje = document.forms["Formulario"]["mensaje"].value;
    var estrellas = document.forms["Formulario"]["estrellas"].value;
    if((nombre.length == 0) || (mensaje.length== 0) || (estrellas.length == 0))
	{
		alert("Rellene todos los campos incluida la puntuación de estrellas");
		return false;
	}
    return true;
}



