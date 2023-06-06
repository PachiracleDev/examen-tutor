// EJECICIO 1
console.log("*********************************************************");
console.log("********************** EJERCICIO 1 **********************");
console.log("*********************************************************");
console.log(" ");
let rta = [];

for (let i = 0; i < 5; i++) {
	let numeroRandom = Math.floor(Math.random() * 10);
	rta.push({
		numero: numeroRandom,
		par: numeroRandom % 2 === 0,
	});
}

console.log("Numeros random con paridad", rta);

// EJERCICIO 2
console.log(" ");
console.log("*********************************************************");
console.log("********************** EJERCICIO 2 **********************");
console.log("*********************************************************");
console.log(" ");
const numero = 3;
const multiplos = [];
const limit = 100;

for (let i = 0; i < limit; i++) {
	if (i % numero === 0) {
		multiplos.push(i);
	}
}

console.log("Multiplos de 3", multiplos);

// EJERCICIO 3
console.log(" ");
console.log("*********************************************************");
console.log("********************** EJERCICIO 3 **********************");
console.log("*********************************************************");
console.log(" ");

const letra = "o";
const palabra = "hola mundo";

let contador = 0;
for (let i = 0; i < palabra.length; i++) {
	if (palabra[i] === letra) {
		contador++;
	}
}

console.log(`La letra ${letra} se repite`, contador, "veces", "en", palabra);
//EJERCICIO 4
console.log(" ");
console.log("*********************************************************");
console.log("********************** EJERCICIO 4 **********************");
console.log("*********************************************************");
console.log(" ");
const arrayOriginal = [23, 5, 34, 56, 98, "cadena", 7];
const arrayInvertido = arrayOriginal.reverse();

console.log("Array invertido", arrayInvertido);

//EJERCICIO 5
console.log(" ");
console.log("*********************************************************");
console.log("********************** EJERCICIO 5 **********************");
console.log("*********************************************************");
console.log(" ");
class Persona {
	constructor(nombre, edad, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

	getDetalles() {
		console.log(
			`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad}`
		);
	}
}

class Jugador extends Persona {
	constructor(nombre, edad, apellido, posicion) {
		super(nombre, edad, apellido);
		this.posicion = posicion;
	}

	getDetalles() {
		console.log(
			`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Posicion: ${this.posicion}`
		);
	}
}

class Entrenador extends Persona {
	constructor(nombre, edad, apellido, añosExperiencia, idFederacion) {
		super(nombre, edad, apellido);
		this.añosExperiencia = añosExperiencia;
		this.idFederacion =
			idFederacion || Math.floor(Math.random() * 90000) + 10000;
	}

	getDetalles() {
		console.log(
			`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Años de experiencia: ${this.añosExperiencia} ID Federacion: ${this.idFederacion}`
		);
	}
}

class Equipo {
	constructor(nombre, entrenador, jugadores) {
		this.nombre = nombre;
		this.entrenador = entrenador;
		this.jugadores = jugadores;
	}

	getDetalles() {
		console.log(
			`Nombre: ${this.nombre} Entrenador: ${this.entrenador.nombre} Jugadores:  `
		);
		this.jugadores.forEach((jugador) => {
			jugador.getDetalles();
		});
	}
}

//? EJEMPLO DE PRUEBA

const jugador1Prueba = new Jugador("Mateo", 11, "Perez", "Delantero");
const jugador2Prueba = new Jugador("Pepe", 3, "Belez", "Defensa");
const jugador3Prueba = new Jugador("Martin", 10, "Velasquez", "Medio");
const jugador4Prueba = new Jugador("Paolo", 1, "Rodrigues", "Arquero");

const entrenadorPrueba = new Entrenador("Carlos", 20, "Gareca", 10);

const equipoPrueba = new Equipo("Peru", entrenadorPrueba, [
	jugador1Prueba,
	jugador2Prueba,
	jugador3Prueba,
	jugador4Prueba,
]);

equipoPrueba.getDetalles();

//EJERCICIO BONUS
console.log(" ");
console.log("*********************************************************");
console.log("******************** EJERCICIO BONUS ********************");
console.log("*********************************************************");

const frase = "hola mundo como estas mundo. mundo mundo mundo";

function convertirAMayusculasHastaPunto(texto) {
	let textoConvertido = "";
	let encontradoPunto = false;

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] === ".") {
			encontradoPunto = true;
		}

		if (!encontradoPunto) {
			textoConvertido += texto[i].toUpperCase();
		} else {
			textoConvertido += texto[i].toLowerCase();
		}
	}

	console.log("Texto original:", texto);
	console.log("Texto convertido:", textoConvertido);
}

convertirAMayusculasHastaPunto(frase);
