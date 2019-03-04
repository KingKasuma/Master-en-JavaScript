type alfanumerico = string | number;

// string
let cadena: alfanumerico = 135;

// number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "Hola";

// Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[] = [1,2,3,4,5];

// Let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 12;
	console.log(numero1,numero2);
}

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);