const mongoose = require ('mongoose');
let url = 'mongodb://Luso233:Socima66@ds018538.mlab.com:18538/chervechas'
mongoose.connect(url);

var Schema = mongoose.Schema;
varObjectId = Schema.varObjectId;

const estiloSchema = new Schema({
	estilo: ObjectId,
	nombre:String,
	descripcion:String,
});

const cervezaSchema = new Schema ({
	cerveza: ObjectId,
	nombre: String,
	pais: String,
	porcentaje: Number,
	cantidad: Number,
	estilo: {
		type:Schema.ObjectId,
		ref: 'Estilo'
	}

});


var Cerveza = mongoose.model('Cerveza',cervezaSchema);
var Estilo = mongoose.model('Estilo', estiloSchema);

module.exports = {Cerveza, Estilo}
