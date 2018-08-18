// function  triple (numero) {
// return numero*3
// }
// console.log(triple())

// let triple = function(numero){
// 	return numero * 3
// }
// let variable = triple
// let final = variable 
// console.log(final(4));

// let funcionDeOrdenSuperior = function(callback){
// 	console.log("ola crayola");
// 	callback();
// }


// let funcionCallback = function(){
// 	console.log("ola caracola")
// }

// funcionDeOrdenSuperior(funcionCallback);

// let OrdenSuperior = function (saludar){
// 	console.log("Ola amapola");
// 	saludar();
// }
// OrdenSuperior(function(){
// 	console.log ("Ola cara de bola")
// }
// );

// EJERCICIO:
// Crear una funcion de orden superior llamada saluda() que reciba dos parametros, "mensaje" y "formato".
// "formato" sera una funcion callback que imprima "mensaje"
// en minusculas o en mayusculas


// let saluda = function(mensaje,formato){
// 	formato(mensaje);
// }

// let mayusculas = function(mensaje){
// console.log(mensaje.toUpperCase());
// }

// saluda("perro",mayusculas);

// let animales = [
// {nombre: "Heladio", especie: "tortuga"},
// {nombre: "Jose", especie: "Tigre"},
// {nombre: "Carlos", especie: "Cuyo"},
// {nombre: "Rafa", especie: "Mapache"},
// {nombre: "Luis", especie: "Prro"},
// {nombre: "Rogelio", especie: "Cuyo"}
// ];

// // let Cuyos = [];

// // for (let i = 0; i <animales.length; i++) {
// // 	if (animales[i].especie == "cuyo") {
// // 		cuyos.push(animales[i]);
// // 	}
// // }
//  Cuyos = animales.filter( (animal) => {
//  	return animal.especie == "Cuyo";
//  }); 

//  console.log(Cuyos)

// let Cuyos = [];

// for (let i = 0; i <animales.length; i++) {
//  	if (animales[i].especie == "cuyo") {
//  		Cuyos.push(animales[i]);
//  	}
// }
// Cuyos = animales.map( function(animal){
// 	return animal.nombre;
// })
// console.log(Cuyos);

// 1. Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.

//         Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
//         Salida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”]

let Estring = function(String){
	MayusculasMinusculas(String);
}

let MayusculasMinusculas = function(arreglo,resultado){
for (var i = 0; i < String.length; i++) {
	if (i %2 === 0){
		arreglo[i] = String[i].toLowerCase
}else{
	arreglo[i] = String[i].toUpperCase
	}
	resultado = arreglo.split("")
	}
console.log(resultado)
}
Estring("Hola crayola")


// 2. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)
let cantidades = [
{minutos: 120},
{minutos: 80},
{minutos: 200},
{minutos: 100}
];

let MayoresA2Horas = [];

for (let i = 0; i <cantidades.length; i++) {
	if (cantidades[i].minutos >= 120) {
	MayoresA2Horas.push(cantidades[i]);
	}
}
 MayoresA2Horas = cantidades.filter( (cantidad) => {
 	return cantidad.minutos >= 120;
 }); 

 console.log(MayoresA2Horas)
// 3. A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30











