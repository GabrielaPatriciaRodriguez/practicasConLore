let gastoTotal = 0;
let precioproducto = 0;
let contador = 0;

alert("Vamos a sumar el total de productos hasta que el usuario ingrese un valor igual a cero, o un valor numerico no valido");

ingresarPrecio();


function ingresarPrecio() {
    precioProducto = Number(prompt("ingrese el precio del producto " + (contador + 1) + ":"));
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt("ingrese el precio del producto " + (contador + 1) + ":"));
    }
    if(precioproducto <= 0){
        console.log("Ha terminado de introducir los precios de los productos")
    }
}

function calcularTotal(precioProducto) {
    return gastoTotal + precioProducto;
}

function mostrarTotal() {
    console.log("El precio total es: " + gastoTotal);
    console.log("La cantidad total de productos es " + contador);
}

calcularTotal();
mostrarTotal();