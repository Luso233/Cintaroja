// let modulo = require ("./module.js");
// let resultado = modulo.sumar(5,3);
// console.log(resultado);

// const request = require('request');


// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// let objeto = {
// 	nombre: "luso",
// 	edad: 17

// let json = {
// 	nombre: "luso",
// 	edad: 17
// }

const request = require('request');

request('https://swapi.co/api/people/4/', function (error, response, body) {
	let respuesta = JSON.parse (body);
	console.log(respuesta);
});