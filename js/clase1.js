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

//CLASE 5

/*Declarar un clase Tienda que permita registrar:
● Nombre de la tienda.
● Dirección de la tienda.
● Propietario de la tienda.
● Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando
esta clase.*/

// class Tienda {
//      constructor(nombre, direccion, propietario, rubro){
//          this.nombre = nombre;
//          this.direccion = direccion;
//          this.propietario = propietario;
//          this.rubro = rubro;
//      }
//     estaAbierto(hora){
//         if ( (hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19))  {
//             return true;
//         } return false;
//     }

//     esPropietario(nombre){
//         if (nombre == this.propietario) {
//             return true;
//         } return false;
//     } 
// }

// const Tienda1 = new Tienda("Morena", "Av. Lavalle 2371", "HERNAN", "Lenceria");
// const Tienda2 = new Tienda("Ana Bendita", "Bº 202", "ADRI", "Ropa Dama");
// const Tienda3 = new Tienda("Afrodita", "Lavalle", "OFE", "Lenceria");

// console.log(Tienda1);
// console.log(Tienda2);
// console.log(Tienda3);

/*Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para
instanciar los objetos en función de las entradas
capturadas. Generar una única salida compuesta
por la información de los objetos instanciados.*/


// let ingresados = "";
// for (let i = 0; i < 5; i++) {
//  let tiendaIngresada = new Tienda(prompt("Ingrese NOMBRE de la Tienda"), 
//                         prompt("Ingrese su DIRECCION"), 
//                         prompt("Ingrese quien es el PROPIETARIO"),
//                         prompt("Ingrese el RUBRO"));
//  ingresados+= "Tienda: "+tiendaIngresada.nombre+" "+
//  "Direccion: "+tiendaIngresada.direccion+" "+
//  "Propitario: "+tiendaIngresada.propietario+" "+
//  "rubro: "+tiendaIngresada.rubro+"\n";
// }
// alert(ingresados);

/*Declarar un método para la clase Tienda con la
siguiente cabecera estaAbierto(hora). Este retorna
true si la hora enviada está entre las 08 y 12, o entre
las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta
clase, y solicitar al usuario tres (3) horas. Informar por
alerta si la tienda está abierta, en función de la hora
ingresada.*/

// const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
// for (let i = 0; i < 3; i++) {
//  let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
//  if(tienda4.estaAbierto(entrada)){
//  alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
//  }else{
//  alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
//  }
// }


/* Declarar un método para la clase Tienda con la
siguiente cabecera esPropietario(nombre). Se retorna
true si el nombre enviado corresponde al propietario
de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta
clase y solicitar al usuario cinco(5) nombres. Informar
por alerta si los nombres pertenecen a algún dueño
de tienda.*/

// for (let i = 0; i < 5; i++){
//     let entrada = prompt("ingrese nombre del propietario").toLocaleUpperCase();
//   if ((Tienda1.esPropietario(entrada)) || (Tienda2.esPropietario(entrada)) || 
//   (Tienda3.esPropietario(entrada))) {
//     alert(entrada + " Es propietario de tienda")  
//   } else {
//       alert(entrada + " No es propietario de tienda")
//   }  
// }

/* Declarar una clase Cliente que permita:
● Registrar nombre, presupuesto, si tiene tarjeta de
descuento, y número de teléfono del cliente.
● Un método transferirDinero(valor), que permita 
obtener y restar cierta cantidad del presupuesto,
siempre que este parámetro sea menor al valor
enviado, y mayor que cero.
Luego invocar al menos tres (3) objetos usando esta clase, y
solicitar al usuario cinco (5) números. Informar por alerta si
cada uno de los clientes cuenta con el presupuesto
suficiente para realizar una transferencia de igual monto al
ingresado.*/

// class Cliente {
//     constructor(nombre, presupuesto, tarjeta, telefono){
//         this.nombre = nombre;
//         this.presupuesto = parseFloat(presupuesto);
//         this.tarjeta = tarjeta;
//         this.telefono = telefono;
//     }
//     transferirDinero(valor){
//         if((this.presupuesto > 0)&&(valor < this.presupuesto)){
//         this.presupuesto -= valor;
//         return valor;
//         } else{
//         return 0;
//         }
//     }
// }

// const Cliente1 = new Cliente("Hernan", 5000, true, "3756446393");
// const Cliente2 = new Cliente("Lore", 10000, true, "3756446387");
// const Cliente3 = new Cliente("Betty", 15000, true, "3756446365");

// for (let i = 0; i < 5; i++) {
//     let entrada = parseFloat(prompt("ingresa un valor"));
// if (Cliente1.transferirDinero(entrada)) {
//     alert("Le alcanza su presupuesto de " +entrada);
// } else { 
//     alert("No te alcanza")
// }
// }

//CLASE 6

// const productos = [{ id: 1, producto: "Arroz" },
//                   { id: 2,  producto: "Fideo" },
//                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }

// console.log(productos);



// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }

//Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos)
//     producto.sumaIva();


// console.log(productos);

/*Declarar un array de cadenas, compuesto por 
los cuatro (4) nombres pertenecientes a los
integrantes de un equipo. Luego recorrer el
array, e informar por alerta el nombre de cada
jugador, así como la posición que ocupa en la
colección.*/

// const arrayEquipo = ["Lore", "Maxi", "Ani", "Hernan"];

// for (const iterator of arrayEquipo) {
//     alert("El nombre del jugador es " + iterator)
// }

// for (let i = 0; i < equipo.length; i++) {
//  alert("POSICION " + i + " JUGADOR " + equipo[i]);
// }

/*Declarar un array vacío, y cargarlo de forma
dinámica solicitando al usuario nombres de
forma consecutiva, hasta que se ingrese
“ESC”. Luego recorrer el array, e informar por
alerta el nombre de cada jugador, así como la
posición que ocupa en la colección.*/

// const ARRAYVACIO = [];
// let nombre = prompt("ingresa nombres, si no ESC").toUpperCase();

// while (nombre != "ESC") {
//     ARRAYVACIO.push(nombre);
//     nombre = prompt("ingresa otro nombre, si no ESC").toUpperCase();
// }

// console.log(ARRAYVACIO);

// for (let i = 0; i < ARRAYVACIO.length; i++) {
//     alert("El nombre de cada jugador es " + ARRAYVACIO[i] + " y su posicion es " + i)
// }

/*Declarar una clase Jugador que permita
registrar nombre, número de camiseta, edad, y
si está lesionado. Luego instanciar al menos
cinco (5) objetos usando esta clase, y
asociarlos a un array.*/

 class Jugador {
     constructor(nombre, numero, edad, lesionado){
         this.nombre = nombre;
         this.numero = numero;
         this.edad = edad;
         this.lesionado = lesionado;
     }
 }

//  const JUGADOR1 = new Jugador("Jason", 15, 18, false);
//  const JUGADOR2 = new Jugador("Coco", 11, 25, true);
//  const JUGADOR3 = new Jugador("Cacho", 9, 30, false);
//  const JUGADOR4 = new Jugador("Di Maria", 8, 33, false);
//  const JUGADOR5 = new Jugador("Messi", 10, 30, true);

//  const ARRAYJUGADORES = [];
// console.log(ARRAYJUGADORES.push(JUGADOR1));
//  console.log(ARRAYJUGADORES.push(JUGADOR2));
//  console.log(ARRAYJUGADORES.push(JUGADOR3));
//  console.log(ARRAYJUGADORES.push(JUGADOR4));
//  console.log(ARRAYJUGADORES.push(JUGADOR5));

//  console.log(ARRAYJUGADORES);

//OTRA FORMA
const jugadores = [];
 jugadores.push(new Jugador("BART", 15 , 11, false));
 jugadores.push(new Jugador("NELSON", 2 , 18, false));
 jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
 jugadores.push(new Jugador("MARTIN", 0 , 11, false));
 jugadores.push(new Jugador("ROD", 98 , 12, false));
// console.log(jugadores);


/*Codificar una función con la siguiente cabecera:
buscarJugador(equipo, jugador). En ella, se recibe por
parámetro un array de jugadores (objetos instanciados
empleando la clase de la actividad 3), y el nombre de
un jugador. La función retorna el jugador que coincide
con el nombre.
Realizar al menos tres (3) búsquedas solicitando el
nombre al usuario, e informar sobre el resultado de
cada búsqueda.*/

// function buscarJugador(equipo, jugador){
//     return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
//    }
//    for (let i = 0; i < 3; i++) {
//     let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
//     if(busqueda != undefined){
//     alert('JUGADOR '+busqueda.nombre +' CAMISETA '+busqueda.numero +' EDAD '+busqueda.edad);
//     }else{
//     alert('NO EXISTE JUGADOR CON ESE NOMBRE');
//     }
//    }
   

   /*Codificar una función con la siguiente cabecera:
filtroJugadores(equipo, edad). En ella, se recibe un
array de jugadores (objetos instanciados empleando la
clase de la actividad 3), y una edad. La función retorna
los jugadores cuya edad coincide con el segundo
parámetro.
Realizar al menos cinco (5) filtros solicitando la edad al
usuario, e informar sobre el resultado de los jugadores
filtrados.*/

function filtroJugadores(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}

function listaJugadores(jugadores) {
    let lista = '';
    for (const jugador of jugadores) {
    lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
    }
    return lista;
   }

   for (let i = 0; i < 5; i++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR EDAD DE JUGADOR'));
    if (filtro.length > 0) {
    alert(listaJugadores(filtro));
    } else {
    alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
   }
   