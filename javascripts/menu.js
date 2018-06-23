class Producto
{
    constructor(id, nombre, precio)
    {
        this.id = id
        this.nombre = nombre
        this.cantidad = 1
        
        var price = (precio.slice(0,-2))
        this.precio = price.replace(",", ".")
        
    }
    
    add_one()
    {
        this.cantidad = this.cantidad + 1
    }
    
    print_it()
    {
        return ("<div> " + this.cantidad + " x " + this.nombre + "</div>")
    }
}

class Carrito
{
    constructor()
    {
        this.productos = []    
    }

    get total()
    {
        var price = 0.00
        
        for (var i = 0; i<this.productos.length; i++)
        {
            
            var precio_prod =  parseFloat(this.productos[i].precio) * parseFloat(this.productos[i].cantidad) 
            
            price = parseFloat(price) + parseFloat(precio_prod.toFixed(2))
        }
        
        return price.toFixed(2)
    }
    
    find_id(id)
    {
        
        var index = -1
        
        for (var i = 0; i<this.productos.length; i++)
        {
            if (this.productos[i].id == id)
                index = i
        }
        
        return index
    }
    
    
    add_it (producto)
    {
        var id = this.find_id(producto.id)
        
        if (id != (-1))
            this.productos[id].add_one()
        else
        {
            this.productos.push(producto)
        }
            
    }
    
    print_it(div)
    {
        var output = ""
        for (var i = 0; i<this.productos.length; i++)
        {
            output = output + this.productos[i].print_it()
        }
        
        $(div).html(output)
    }
}


$(document).ready(function(){
    
    $.get('get_session.php', function (data) 
    {
        var sesion = JSON.parse(data) 
        var alergenos = sesion["ALERGENOS"].split(" ").filter(x => x)
        for (var i = 0; i<alergenos.length; i++)
        {
            $("." + alergenos[i]).css("display", "none")
        }
    });

    var carro = new Carrito()
    
    $("footer button").click( function(){
        window.location.href = "gracias.html";
    });
    
    $("button").click( function(){
        
        var id     = $(this).attr('name')
        var nombre = $(id + " h3").html()
        var precio = $(id + " .precio").html()
        
        var prod = new Producto(id, nombre, precio)
        
        carro.add_it(prod)
        
        carro.print_it("#contenido")
        
        $("footer #total").html(carro.total + "€")
        $("footer").css("visibility", "visible");

    });
        
});


	