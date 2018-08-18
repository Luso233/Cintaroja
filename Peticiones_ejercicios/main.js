const request = require('request');

//  1.- Hacer una petición a cualquier pokemon y mostrar su(s) tipo(s).

// request('https://pokeapi.co/api/v2/pokemon/282/', function (error, response, body) {
// console.log(JSON.parse(body).types);
// });

// 2.- Hacer una funcion que haga una peticion que busque un libro y traiga el o los autores.
//    Ejemplo: peticionLibro(“i robot”)
//      http://openlibrary.org/search.json?q=i+robot
let miurl = 'http://openlibrary.org/search.json?q='
function ewe(libro) {
	let URL = miurl + libro;
request.get(URL, (error, response, body); =>{
if (response.statuscode == 200) {
let libros = JSON.parse(body).docs
console.log(libros)
Let autores =libro.map(libro => libro.author_name)
autores.map (autor => {console.log(autor)}
}
else {
console.log(error)	
} 

}
// console.log(JSON.parse(body).docs
// }

// ewe('https://pokeapi.co/api/v2/pokemon/282/')
// .statuscode

// 3.- Hacer una petición por autor y devolver la lista de sus libros ('http://openlibrary.org/search.json?author=asimov')

// request('http://openlibrary.org/search.json?author=asimov', function (error, response, body) {
// let respuesta = JSON.parse(body)
// for (let i = 0; i < respuesta.docs.length ; i++) {
// 	console.log(respuesta.docs[i].title_suggest)
// }
// });
//  4.- Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy.
// request('https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-08-01&end_date=2018-08-08&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i', function (error, response, body) {
let Asteroides = JSON.parse(body)
	if (is_potentially_hazardous_asteroid == true) {
		console.log()
	}
});
// });

//  5.- Hacer una petición a la swapi a un personaje y obtener sus películas.

// request('https://swapi.co/api/people/4/', function (error, response, body) {
// 	let respuesta = JSON.parse (body).films;
// 	console.log(respuesta);
// });

// 6.- Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso

let obtenerpokemones = () => 

