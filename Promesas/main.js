const request = require'request';

// let promise = new Promise (function(resolve, reject){
// 	resolve("Esta promesa se resolvio");
// 	reject("Esta promesa no se resolvio");
// });
// promise.then(function(respuesta) { console.log(respuesta)});
// promise.catch(function() {console.log(reject)})

// let promesa = new Promise ( ( resolve, reject) => {
// resolve ("C resolvio")
// });

// console.log(promesa);
// console.log("Cvanaimprimirlostimeouts")
// setTimeout (function() {console.log("Pasaronn x segundos")},3000)
// setTimeout (function() {console.log("AAAAAAAAAgria")},3000)
// console.log("C imprimieronlos timeouts")

// let loquequieras = new Promise ((resolve, reject) => {
// 	setTimeout( ()=> {
// 		resolve("Se resolvio la promesa");
// 	}, 3000);
// });

// console.log(loquequieras);
// console.log("Se acaba de terminar la promesa")

// loquequieras.then (mensaje=> console.log(mensaje));
// let Promesa = new Promise ((resolve, reject) => {
// 	let miNumero = 5;
// if (miNumero % 2 == 0){
// 		resolve("Si es par");
// 	}else reject("No es par");
// };






let promesaSWAPI = new Promise ((resolve, reject) => {
	request.get('https://swapi.co/api/planets/1/', function (error, response, body) {
	  response.statusCode == 200
	? resolve(JSON.parse(body).climate)
	: reject(response.statusCode, error)
	}
promesaSWAPI
.then (mensaje => console.log(mensaje))
.catch (mensaje => console.log(mensaje))