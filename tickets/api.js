const express = require ('express');
const bodyParser = require ('body-parser');

const {Articulo, Ticket}= require('./Cliet.js');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api/articulos/:id/',(request,response) =>{
	let {id} = req.params;
	Articulo
	.findById(id)
	.exec()
	.then(result => res.status(200).send(result));
	.catch(error => res.status(404).send(error))

	res.send('Estoy funcionanding :DDD');
});

app.put('/api/articulos/:id/',(request,response) =>{
	let {id} = req.params;

	articulo
	.findByIdAndUpdate(
		id,
		{$set: req.body}, {new: true})
		.exec()
		.then(articulo => res.status(205).send(articulo))
		.catch(error => res.status(404).send(error))
});

app.delete('/api/articulos/:id/',(request,response) =>{
	let {id} = req.params;
	Articulo
	.findByIdAndRemove(id)
	.exec()
	.then(result => res.status(204).send(result));
	.catch(error => res.status(404).send(error))

	res.send('Estoy funcionanding :DDD');
});

app.post('/api/articulos/',(req,res) => {
let {nombre, existencia, precio, descripcion} = req.body
let nuevoarticulo = Articulo({
	nombre: nombre,
	existencia: existencia,
	precio: precio,
	descripcion: descripcion
	});
nuevoarticulo.save((error,articulo) => {
	if (error == null){
			res.status(201).send(articulo);
	}else{
	res.status().send(console.log("nosepuedeeeeeeeee"));
}
	})
})

app.post('/api/tickets/',(req, res) => {
	let rfc, articulos, subtotal, iva, total} = req.body;

	let nuevoTicket = Ticket({
rfc,
articulos
	}):

	nuevoTicket.save((error, ticketNuevo) =>{
		error == null
		? res.status(201).send(ticketNuevo)
		: res
	})
	app.get('/api/tickets/:id/',(request,response) =>{
	let {id} = req.params;
	Articulo
	.findById(id)
	.exec()
	.then(result => res.status(200).send(result));
	.catch(error => res.status(404).send(error))

	res.send('Estoy funcionanding :DDD');
});
app.listen(5050, ()=> {console.log(":DDDDDDDDDDDDDD")});