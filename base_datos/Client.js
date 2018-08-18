const mongoose = require ('mongoose');
let url = 'mongodb://Luso233:Socima66@ds018258.mlab.com:18258/b22_basededatos'
mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const programaSchema = new Schema({
	programa: ObjectId,
	description: String,
	duracion: String
});

const alumnoSchema = new Schema({
	alumno:ObjectId,
	nombre:String,
	apellidos:String,
	edad: Number,
	programa: {
		type: Schema.ObjectId,
		ref: 'Programa'
		}
});
var Alumno = mongoose.model('Alumno', alumnoSchema)
var Programa = mongoose.model('Programa', programaSchema)