// let persona    = "BART SIMPSON";
// let domicilio  = "742 EVERGREEN";
// let pais       = "USA";
// let nacimiento = "02-11-70";
// const codigo   = "B47U89RE243";
// let carnet = "Codigo: "+codigo+" "+
//              "Nombre: "+persona+" "+
//              "Pais: "+pais+" "+
//              "Nacimiento: "+nacimiento+" "+
//              "Domicilio: "+domicilio;
// console.log(carnet);


// let nombre = "Juan Rodriguez";
// let domicilio2 = "Manuel Ocampo";
// let pais2 = "Brasil";
// let nacimiento2 = "31/03/1959";
// const dni = "13070059";
// let cliente = "Nombre: " + nombre + " " +"dni: " + dni + " " + "Pais: " + pais2 + " " +  
// "Nacimiento: " + nacimiento2 + " "
// + "Domicilio: " + domicilio2;

// console.log(cliente);

// let integrante1 = prompt('INGRESAR 1er INTREGANTE');
// let integrante2 = prompt('INGRESAR 2do INTREGANTE');
// let integrante3 = prompt('INGRESAR 3er INTREGANTE');
// let integrante4 = prompt('INGRESAR 4to INTREGANTE');
// let integrante5 = prompt('INGRESAR 5to INTREGANTE');
// let familia =   "1) "+integrante1+" "+
//                 "2) "+integrante2+" "+
//                 "3) "+integrante3+" "+
//                 "4) "+integrante4+" "+
//                 "5) "+integrante5;
// console.log(familia);

// let integrante1 = prompt("ingresar integrante 1");
// let integrante2 = prompt("ingresar integrante 2");
// let integrantes = "El integrante 1 es " + integrante1 + " " + "El integrante 2 es " + integrante2;
// console.log(integrantes);

// let precio = Number(prompt('INGRESAR PRECIO'));
// let descuento20 = precio - (precio  * 0.2);
// let descuento30 = precio - (precio  * 0.3);
// console.log(descuento20);
// console.log(descuento30);

// let precio2 = Number(prompt("ingrese precio"));
// let descuento10 = precio2 - (precio2 * 0.1);
// let descuento50 = precio2 - (precio2 * 0.5);
// alert(descuento50);

//CLASE 2

// let entrada = prompt("INGRESAR UN NOMBRE");
// let nombre = "BART";
// if (entrada == nombre) {
//  alert("FUI YO");
// } else {
//  alert("YO NO FUI");

 /*Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y”
(mayúscula), realizar una salida por alerta
con el mensaje “Correcto”. Caso
contrario, la salida será “Error”.*/

// let entrada = prompt("ingresa una letra");
// if (entrada == "y" || entrada == "Y") {
//     alert("correcto")
// }else {
//     alert("incorrecto");
// }

/*Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar
una de las siguientes salidas según
corresponda:
● “Elegiste a Homero” si es 1.
● “Elegiste a Marge” si es 2.
● “Elegiste a Bart” si es 3.
● “Elegiste a Lisa” si es 4.*/


// let numero = 1;

// while (numero !== 0) {
//     numero = Number(prompt("ingresa un numero del 1 al 4"));
//     switch (numero) {
//         case 1:
//             alert("Elegiste a Homero");
//             break;
//         case 2:
//             alert("Elegiste a Marge");
//             break;
//         case 3:
//             alert("Elegiste a Bart");
//             break;
//         case 4:
//             alert("Elegiste a Lisa");
//             break;
//         default:
//             alert("error");
//             break;
//     }
// }

// let entrada3 = prompt("INGRESAR UN NUMERO");
// if (entrada3 == 1) {
//  alert("ELEGISTE A HOMERO");
// }else if (entrada3 == 2) {
//  alert("ELEGISTE A MARGE");
// }else if (entrada3 == 3) {
//  alert("ELEGISTE A BART");
// }else if (entrada3 == 4) {
//  alert("ELEGISTE A LISA");
// }else { 
//  alert("ERROR")
// }

/*Solicitar al usuario un (1) número.
Si el valor está entre dos números,
efectuar una de las siguientes salidas,
según corresponda:
● “Presupuesto bajo” si está entre 0 y 1000.
● “Presupuesto medio” si está entre 1001 y 3000.
● “Presupuesto alto” si es mayor que 3000.*/

// let numero = Number(prompt("ingresa un numero"));
// if (numero >= 0 && numero <=1000) {
//     alert("presupuesto bajo");
// } else if (numero >= 1001 && numero <=3000){
//     alert("presupuesto medio");
// }else if (numero > 3000) {
//     alert("presupuesto alto");
// } else {alert("error")};

// let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
// if ((entrada4 >= 0) && (entrada4 <= 1000)) {
//  alert("PRESUPUESTO BAJO");
// } else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
//  alert("PRESUPUESTO MEDIO");
// } else if (entrada4 > 3000) {
//  alert("PRESUPUESTO ALTO");
// }
// else {
//  alert("ERROR");
// }

/*Solicitar al usuario cuatro (4) productos de
almacén. Si todos los elementos fueron cargados,
realizar una única salida compuesta por el listado
de productos. Caso contrario, la salida será “Error:
Es necesario cargar todos los productos”.*/

// let producto1 = prompt("ingrese un producto de almacen");
// let producto2 = prompt("ingrese un producto de almacen");
// let producto3 = prompt("ingrese un producto de almacen");
// let producto4 = prompt("ingrese un producto de almacen");

// if (producto1 !== "" && producto2 !== "" && producto3 !== "" && producto4 !== "") {
//     alert("listado de productos: " + producto1 + " " + producto2 + " " + producto3 + " " + producto4)
// } else {
//     alert("error, cargue productos");
// }

// for (let i = 0; i < 10; i++) {
//     if ((i === 2) || (i === 6)) {
//         alert("Hola Coder " + i)
//     };
// }

//CLASE 3
// let entrada = prompt("Ingresar nombre");
//Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar apellido");
// }

// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    alert(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));


// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
//    switch (entrada) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
//    entrada = prompt("Ingresar OTRO nombre");
// }

/*Solicitar al usuario un (1) un número y
un (1) texto. Efectuar una salida por
alerta con el mensaje ingresado por
cada repetición, hasta alcanzar el valor
señalado por el usuario.*/

// let numero = parseInt(prompt("ingresa un numero"));
// let texto = prompt("ingresa un texto");

// for (let i = 1; i <= numero; i++) {
//     console.log(texto);  
// }

/*Solicitar al usuario un (1) un número. Emplear
este valor para determinar la cantidad de
repeticiones, y efectuar una salida por alerta
con el mensaje “lado” en cada repetición.
Pero si se alcanza un número de iteraciones
mayor que cuatro (4), cancelar el ciclo.*/

// let numero = parseInt(prompt("ingresa un numero"));

// for (let i = 0; i <= numero; i++) {
//     if (i == 4) {
//         break;
//     }
//    console.log("lado"); 
// }

/*Solicitar al usuario la carga de diez
(10) alumnos de forma consecutiva.
Luego realizar una única salida por
alerta, con el listado de alumnos
registrados.*/

// let alumnos = "";

// for (let i = 1; i <= 10; i++) {
//  alumnos = alumnos + prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(alumnos);

/*Solicitar al usuario la carga de
nombres de forma consecutiva, 
hasta que se ingrese “Voldemort”.
Luego realizar una única salida por
alerta, con todos los nombres
ingresados.*/

// let entrada = prompt("INGRESAR NOMBRE");
// let ingresados = "";
// while (entrada != "Voldemort") {
//  ingresados += entrada +"\n";
//  entrada = prompt("INGRESAR NOMBRE");
// }
// alert(ingresados);

/*Solicitar al usuario un (1) número de forma
consecutiva, hasta que se ingrese “ESC”.
Generar una única salida compuesta por
los siguientes productos, según el valor
ingresado en cada ciclo:
● “Tomate” si es 1.
● “Papa” si es 2.
● “Carne” si es 3.
● “Pollo” si es 4.*/

// let entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// while (entrada != "ESC") {
//  switch (entrada) {
//  case "1":
//  alert("Tomate");
//  break;
//  case "2":
//  alert("Papa");
//  break;
//  case "3":
//  alert("Carne");
//  break;
//  case "4":
//  alert("Pollo");
//  break;
//  default:
//  alert("Error");
//  break;
//  }
//  entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// }

// function calculadora(primerNumero, operacion, segundoNumero) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, "*", 5));

//CLASE 4

/*Codificar tres funciones:
● Una función entrada(), la cual solicite un valor al
usuario y lo retorne.
● Una función procesamiento(valor), donde se
transforme la entrada.
● Una función salida(valor), la cual mostrará el
resultado por alerta.
Luego, invocar las tres funciones.*/

// function entrada(){
//     return prompt("INGRESAR DATO");
//    }
// function procesamiento(valor){
//     return "LA ENTRADA ES "+valor
//    }
// function salida(valor){
//     alert(valor);
//    }
// //SUMAR LA OTRA FORMA DE LLAMADA
// salida(procesamiento(entrada()));

/*Codificar una función que reciba un número
decimal por parámetro, y lo retorne redondeado
al entero más cercano. Para ello, puede
emplearse Math.round.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un número al
usuario.*/

// function redondeo(valor){
//     return Math.round(valor)
//    }

// for (let i = 0; i < 5; i++) {
//     let entrada = prompt("INGRESAR NUMERO");
//     alert(redondeo(entrada));
// }

/*Codificar una función con la siguiente cabecera:
impuesto(precio, porcentaje). En ella, se retorna
un valor numérico compuesto por el precio
recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco
(5) veces, solicitando en cada ciclo un precio y
porcentaje al usuario.*/

// function impuesto (precio, porcentaje) {
//  let impuesto = ((precio * porcentaje)/100);
//     return precio + impuesto;
// }

// for (let i = 0; i < 5; i++) {
//     let entradaPrecio = Number(prompt("ingrese el precio"));
//     let entradaImpuesto = Number(prompt("ingrese el porcentaje"));
//     alert(impuesto(entradaPrecio, entradaImpuesto));
// }

//Otra forma
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
valor y el tipo de cotización a realizar.*/

// function cotizarDolar(pesos) {
//     let dolarOficial = 100.45;
//     return pesos / dolarOficial;
// }
// console.log(cotizarDolar(500))

// function cotizarPesos(dolar) {
//     let pesoOficial = 0.0099;
//     return dolar / pesoOficial;
// }

// console.log(cotizarPesos(5))

//Otra forma

// const COTIZACION_DOLAR = 100.45;
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
cada ciclo una cadena a validar.*/

// function validacion(cadena) {
//     if (cadena !== "") {
//         return true;
//     } else {
//         return false;
//     }
// }

// let entrada = prompt("ingrese una cadena"); 
// while (entrada !== "ESC") {
//     alert(validacion(entrada));
//     entrada = prompt("ingrese una cadena");
// } 





