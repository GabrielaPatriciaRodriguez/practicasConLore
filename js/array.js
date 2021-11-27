/*RECORRER UN ARRAY - IMPRIMIR CADA UNO DE SUS ELEMENTOS*/

// const numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i++) {
//     alert(numeros[i]);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(numeros[i]);
// }

//Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));

/* Recorriendo un array de Objetos */

const productos = [{ id: 1, producto: "Arroz" },
                   { id: 2,  producto: "Fideo" },
                   { id: 3,  producto: "Pan" }];

 for (const producto of productos) {
     console.log(producto.id);
     console.log(producto.producto);
 }

 /*La referencia al elemento actual la tenemos en la variable creada antes de la 
 palabra reservada of. */
