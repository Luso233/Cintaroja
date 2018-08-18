const request = require('request');
// let BURL= "https://goodreads-devf-aaron.herokuapp.com/docs/";
// let promis = new Promise( (resolve, reject) => {
// let URI= "/api/v1/authors/";
// let URL = BURL + URI;
// let jsonSend = {'name': 'Juan Rulfo'
// }
// request.post(URL,jsonSend,(error, response, body) =>{
// 	response.statusCode == 201
// 	? console.log (Json.parse(body))
// 	: console.log (response.statusCode + error)
// 	});
// });
// promis
// .then (respuesta => console.log(respuesta);
// .catch(error => console.log(error);

// let BURL= "";
// let promis = new Promise( (resolve, reject) => {
// let URI= "";
// let URL = BURL + URI;
// let jsonSend = {
// }
// request.put(URL,jsonSend,(error, response, body) =>{
// 	response.statusCode == 
// 	? console.log (Json.parse(body))
// 	: console.log (response.statusCode + error)
// 	});
// });
// promis
// .then (respuesta => console.log(respuesta);
// .catch(error => console.log(error);
// 	(put, patch, delete)


// Peticion tipo post:
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";
let URI = "/authors/";
let URL = URL_BASE + URI;
let json_send = {
  "name": "Mauricio",
  "last_name": "Saavedra",
  "nacionalidad": "MX",
  "biography": "Siempre saludando a toda la razita que la sigue cotorreando",
  "gender": "M",
  "age": 23
}
request.post( {url: URL, form: json_send} , (error, response, body) => {
    console.log("error: ", error);
    console.log("response: ", response);
    console.log("body:\n", body);
    let nuevoJSON = JSON.parse(body);
    console.log("body parseado:\n", nuevoJSON);
})

// Peticion tipo patch:
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";
let URI = "/authors/966/"; //Indicamos en la URI el ID del autor que deseamos modificar
let URL = URL_BASE + URI;

let options = {
  url: URL,
  form: {
    "age": 23,
    "is_alive": true
  }
}

request.patch( options, (error, response, body) => {
  console.log("error: ", error);
  console.log("response: ", response.statusCode);
  console.log("body: ", body);
});


//Plantilla de peticion con promesa 
let peticionConPromesa = () => {
  return new Promise( (resolve, reject) => {

    request.get("https://swapi.co/api/people/1", (error, response, body) => {
      if (response.statusCode == 200){
        let json = JSON.parse(body);
        resolve(json)
      } else reject(error)
    })
  })
}

//ZOMBIE
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";
let URI = "/authors/966/"; //Indicamos en la URI el ID del autor que deseamos modificar
let URL = URL_BASE + URI;
let = jsonSend {
  url: URL,
  form: {
    "age": 23,
    "is_alive": true
  }
}
let peticionConPromesa = () => {
  return new Promise( (resolve, reject) => {

    request.get("https://swapi.co/api/people/1", (error, response, body) => {
      if (response.statusCode == 200){
        let json = JSON.parse(body);
        resolve(json)
      } else reject(error)
    })
  })
}




request.patch( options, (error, response, body) => {
  console.log("error: ", error);
  console.log("response: ", response.statusCode);
  console.log("body: ", body);
});
