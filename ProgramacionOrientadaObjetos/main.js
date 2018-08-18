// let Figuras = {
// Triangulo: {
//  Atributos: {
// base: 10
// altura:15
// area function (){
//  this.base*this.altura
// }
// Perimetro function (){
//  (this.base*this.altura)/2
// }
// }
// Cuadrado: {
//  Atributos: {
// base: 10
//  area function (){
//  this.base*this.base
//  }
//  Perimetro function (){
//  this.base*4
// }
// }
// Rectangulo: {
//  Atributos: {
// base: 10
// altura:15
//  area function (){
//  this.base*this.altura
// }
// Perimetro function (){
//  (this.base*2)+(this.altura*2)
// }
// }
// console.log(Figuras)
// }

// class Perro{
// 	constructor(Nombre,Raza,Edad,){
// 		this.Nombre = Nombre;
// 		this.Raza = Raza;
// 		this.Edad = Edad;
// 	}
// 	Ladrar(){
// 		return console.log(Wow);
// 	}
// 	comer(comida){
// 		return `${this.nombre} esta comiendo ${comida}`
// 	}
// }
// let Ari = new Perro ("Arya", "Shnauzer/Malix", "3")
// console.log(Ari)

// class Persona{
// 	constructor(Nombre,Sexo,Edad,Peso,Altura){
// 		this.Nombre = Nombre;
// 		this.Peso = Peso;
// 		this.Edad = Edad;
// 		this.Altura = Altura;
// 		this.Sexo = Sexo;
// 	}
// 	CalcularIMC(){
		
// 		return (this.Peso)/((this.Altura)*(this.Altura))
// 	}
// 	EsMayorDeEdad(){
// 		if (this.Edad>=18 ) {
// 			return "Es legal"
// 		}else{
// 			return "No es legal"
// 		}
// 	}

// 	CalcularRFC() {
// 		this.RFC = this.Nombre + this.Edad + this.Sexo
// 	}
// }
// let Luso = new Persona ("Luis", 65, 17, 1.80, "H")
// console.log(Luso.CalcularIMC())
// console.log(Luso.EsMayorDeEdad())
// console.log(Luso.CalcularRFC())

// class Cuenta{
// 	constructor(Titular,CantidadInicial, CantidadFinal){
// 		this.Titular = Titular;
// 		this.CantidadInicial = CantidadInicial;
// 		this.CantidadFinal = CantidadFinal;
// 	}
// 	Ingresar(monto){
// 		if ((CantidadInicial+monto)<900) {
// 		this.CantidadFinal = (this. CantidadInicial + monto)
// 		return "Tu cantidad ahora es de" this.CantidadFinal
// }else{
// 	return "La cantidad excede el limite permitido"
// }
// 	}
// 	Retirar(monto){
// 		if ((CantidadFinal-monto)>10) {
// 		this.CantidadFinal = this. CantidadInicial - retiro
// 		return "Tu cantidad ahora es de" this.CantidadFinal
// 	}else{
// 		return "La cantidad no alcanza el minimo permitido"
// 	}

// }
// let Luso = new Cuenta ("Luis",500,0)
// Ingresar(200)
// class Animal {
// 	constructor(nombre,peso){
// 		this.nombre = nombre
// 		this.peso= peso
// 		console.log("C creo animal")
// 	}
// getNombre(){
// 	return this.nombre
// }
// comer(comida){
// 	return `Mi animal esta comiendo ${comida}`
// 	}

// }
// class perro extends Animal{
// 	constructor(nombre,peso,raza,color)
// 	super(nombre,peso)
// 	this.raza = raza
// 	this.color = color
// 	console.log("c creo un prro")
// ladra(){
// 	return "wow"
// }
// }
// class pug extends perro {
// 	constructor(nombre,peso,raza,coor,altura){
// 		super(nombre,peso,raza,color)
// 		this.raza
// 	}
// }
// class largometraje {
// 	constructor(tiempo){
// 		this.tiempo = tiempo
// 	}
// 	getTiempo(){
// 		return this.tiempo
// 	}
// }
// class pelicula extends Largometraje{
// 	constructor(tiempo,genero){
// 		super(tiempo)
// 		this.genero = genero
// 	}
// }
// class documental extends Largometraje{
// 	constructor(tiempo,director){
// 		super(tiempo)
// 		this.director = director
// 	}
// }
// class cine{
// 	constructor(Largometraje){
// 		this.largometraje = largometraje
// 	}
// 	reproducir(){
// 		return `Reproduciendo...${this.largometraje.getTiempo()}`;
// 	}
// }
// let doc = new documental("90 min","Pedro Torres")
// let peli = new pelicula("120 min", "Accion")
// let sala1 = new cine(doc);
// let sala2 = new cine(peli);
// console.log (sala1.reproducir());
// console.log (sala2.reproducir());


// class Electrodomestico{
// 	constructor(color,peso,consumoEnergetico){
// 	this.color = color
// 	this.peso = peso
// 	this.consumoEnergetico = consumoEnergetico
// 	this.precio = 0
// }
// }
// class Lavadora extends Electrodomestico{
// 	constructor(color,peso,consumoEnergetico,carga){
// 	super(color,peso,consumoEnergetico)
// 	this.carga = carga
// }
// 	precioFinal(){
// 		this.precio = (this.consumoEnergetico*this.carga)
// 		return `El precio de este electrodomestico es de ${this.precio}`
// 	}
// }

// let lavadora = new Lavadora("negro","200kg",700,20)
// console.log(lavadora.precioFinal())

class Construccion{
	constructor(NumPuertas,NumVentanas,NumPisos,Direccion,Altura,Largo,Ancho){
		this.NumPuertas = NumPuertas
		this.NumVentanas = NumVentanas
		this.NumPisos = NumPisos
		this.Direccion = Direccion
		this.Altura = Altura
		this.Largo = Largo
		this.Ancho = Ancho
		this.M2	= 0
}
}
class Casa extends Construccion{
	constructor(NumPuertas,NumVentanas,NumPisos,Direccion,Altura,Largo,Ancho){
	super(NumPuertas,NumVentanas,NumPisos,Direccion,Altura,Largo,Ancho)
	this.carga = carga
}
	devolverMetrosCuadrados(){
		this.M2 = (this.Larg*this.Ancho)
			return `La extencion de el terreno de esta construccion es de ${this.M2} metros cuadrados`
	}
	regresarDireccion(){
		return `La direccion de esta casa es ${this.Direccion}`
	}
	modificarDireccion(){

	}
}
class Edificio extends Construccion{
	constructor(NumPuertas,NumVentanas,NumPisos,Direccion,Altura,Largo,Ancho){
	super(NumPuertas,NumVentanas,NumPisos,Direccion,Altura,Largo,Ancho)
	this.carga = carga
}
	devolverMetrosCuadrados(){
		this.M2 = (this.Larg*this.Ancho)
			return `La extencion de el terreno de esta construccion es de ${this.M2} metros cuadrados`
	}
	regresarDireccion(){
		return `La direccion de este edificio es ${this.Direccion}`
	}
	modificarDireccion(){

	}
}

let lavadora = new Lavadora("negro","200kg",700,20)
console.log(lavadora.precioFinal())