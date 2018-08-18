var texto = "Paranguricutirimicuaro";
var arreglo = [];
var resultado = "";


for (var i = 0; i < texto.length; i++) {
	if (i %2 === 0){
		arreglo[i] = texto[i].toLowerCase();
}else{
	arreglo[i] = texto[i].toUpperCase()
	}
	resultado = arreglo.join("")
	}
console.log(resultado)


