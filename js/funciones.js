/*Codificar tres funciones:
● Una función entrada(), la cual solicite un valor al
usuario y lo retorne.
● Una función procesamiento(valor), donde se
transforme la entrada.
● Una función salida(valor), la cual mostrará el
resultado por alerta.
Luego, invocar las tres funciones.
ACTIVIDAD 1
ENTRADAS Y SALIDAS
Notas actividad 1
La actividad propone agrupar en funciones las instrucciones 
de 1) entrada. 2) procesamiento, y 3) salida. La llamada de las 
funciones debe coincidir con dicho orden*/

// function entrada() {
//     let valor = Number(prompt("ingrese un valor"));
//     return valor;
// }

// function procesamiento() {
//     let transformar = entrada() + 100;
//     return transformar;
// }

// function salida() {
//     alert(procesamiento());
// }

// console.log(salida());
/* la ultima funcion llama a las 2 anteriores*/

/*RESOLUCION EN EL BOOKLET*/
// function entrada(){
//     return prompt("INGRESAR DATO");
//    }

//    function procesamiento(valor){
//     return "LA ENTRADA ES "+valor
//    }

//    function salida(valor){
//     alert(valor);
//    }

//    /*SUMAR LA OTRA FORMA DE LLAMADA*/
//    salida(procesamiento(entrada()));
   

/*Codificar una función que reciba un número
decimal por parámetro, y lo retorne redondeado
al entero más cercano. Para ello, puede
emplearse Math.round.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un número al
usuario.
ACTIVIDAD 2
REDONDEO
Notas actividad 2
La “llamada iterativa de la función” implica emplear un 
bucle. Como se solicita una cantidad determinada, se 
recomienda emplear for*/

// function redondear() {
//     let numero = prompt("Ingresa un numero");
//     return Math.round(numero);
// }

// for (let i = 0; i < 5; i++){
//     let entrada = redondear();
//     console.log(entrada);
// }
 
/*RESOLUCION BOOKLET*/
// function redondeo(valor){
//     return Math.round(valor)
//    }
//    for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NUMERO");
//     alert(redondeo(entrada));
//    }
   
/*Codificar una función con la siguiente cabecera:
impuesto(precio, porcentaje). En ella, se retorna
un valor numérico compuesto por el precio
recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un precio y
porcentaje al usuario.
ACTIVIDAD 3
IMPUESTOS
Notas actividad 3
Un impuesto es la suma de un monto al precio inicial. 
Buscamos calcular en la función el porcentaje sobre dicho 
precio, y sumarlo; por ejemplo: si el precio es 100, el 20% es 
20, entonces el precio final es 100+20 = 120*/

/* RESOLUCION BOOKLET */

// function impuesto(precio, porcentaje){
//     return precio + ((precio * porcentaje)/100)
//    }

//    for (let index = 0; index < 5; index++) {
//     let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
//     ,parseFloat(prompt("INGRESAR %")));
//     alert(resultado);
//    }
   

/*Codificar dos funciones:
● Una función cotizarDolar(pesos), la cual recibe un
valor monetario en pesos argentinos, y lo retorna
en su equivalente en dólares.
● Una función cotizarPesos(dolar), que recibe un
valor monetario en dólares, y lo retorna en su
equivalente en pesos argentinos.
Luego invocar las funciones solicitando al usuario el
valor y el tipo de cotización a realizar.
ACTIVIDAD 4
COTIZACIÓN
Notas actividad 4
Es posible cambiar la moneda a cotizar. Lo importante es 
codificar dos funciones que hagan operaciones contrarias 
(inversas).*/

// const COTIZACION_DOLAR = 150;
// const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
// const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
// let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 - PESOS A DOLAR ");
// let valor = prompt("VALOR");
// switch (seleccion) {
//  case "1":
//  alert(cotizarPesos(valor));
//  break;
//  case "2":
//  alert(cotizarDolar(valor));
//  break;
//  default:
//  break;
// }

/*Codificar una función con la siguiente cabecera:
validacion(cadena). En ella, se retorna un valor
booleano, el cual es true si el parámetro no es
un cadena vacía. Caso contrario, se retorna
false. Luego invocar la función de forma iterativa,
hasta que el usuario tipee “ESC”, solicitando en
cada ciclo una cadena a validar.
ACTIVIDAD 5
VALIDACIÓN
Notas actividad 5
Es común emplear funciones para validar si un valor 
recibido por parámetro cumple con cierto formato. La 
comparación de cadena vacía es (cadena != ‘’)*/


function validacion(cadena) {
    return cadena != "";
}

let entrada = prompt("ingresar cadena o ESC");
while (entrada != "ESC") {
    alert(validacion(entrada));
    entrada = prompt("ingresar cadena o ESC");
}