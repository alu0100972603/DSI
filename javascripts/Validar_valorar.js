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
            txt += "<span style=' margin-top: -30px; margin: 3px 0 3px 0;'>&nbsp;&nbsp;&nbsp;" + myObj[x].fecha  + "</span>&nbsp;";
			
            for(var i=0;i<nestre;i++){
                txt += "<span>" + "â˜…" + "</span>";
            }
            txt+="</div>";
            txt += "<div style='margin-top: -30px;margin-bottom:15px; line-height:1.4;font-weight: normal;'><p>" + myObj[x].mensaje + "</p></div>" ;
            if(myObj[x].mensaje.length == 0 ){
                      txt+= "<div style='margin-top: -30px;margin-bottom:15px;'><span>" + "</span></div>";
            }
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
		alert("Rellene todos los campos incluida la puntuaciÃ³n de estrellas");
		return false;
	}
    return true;
}