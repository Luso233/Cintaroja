const mongoose =  require('mongoose') 
let DBURL = 'mongodb://lusito:Socima66@ds059712.mlab.com:59712/lachona'
mongoose.connect(
	DBURL, 
	{ useNewUrlParser: true },
	 ()=>{
	console.log("Conexion a la base de datos exitosa. Sisepudo");
}
);

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const articuloSchema =new Schema({
	articulo: ObjectId,
	nombre:{type: String, rquired: true},
	existencia:{type: Number, default: 0},
	precio:{type: Number, default: 0},
	descripcion:String
});
const TicketSchema = new Schema({
	ticket: ObjectId,
	rfc:String,
	subtotal:{type: Number, default: 0},
	IVA:{type: Number, default: 0},
	Total:{type: Number, default: 0},
	articulos: [{
		type: ObjectId,
		ref: 'articulo'
	}]
});

let Articulo = mongoose.model('Articulo',articuloSchema);
let Ticket = mongoose.model('Ticket',TicketSchema);
module.exports ={Articulo, Ticket};
