const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// request, response
app.get('/', function (req, res) {
 res.send('Hola Mundo! Bienvenido a mi pagina');
});

// request, response
app.get('/usuarios/', function (req, res) {

 res.send('Estas en la pagina de usuarios');
});

app.post('/usuarios/',  (req, res) => {
 console.log(req.body);
 res.send(req.body);
});

app.put ('usuarios/:uid', (request,response) => {
console.log(request.params);
console.log(response.query);
response.status(200).send("Usuario actualizado");
});
app.delete('/usuarios/:id/', (req,res) => {
	res.status(204);
	res.send(req.params);
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});