'use strict'

// Pruebas con Let y var

// Prueba con var
var numero = 40;
console.log(numero);

if (true){
  var numero = 50;
  console.log(numero);
}

console.log(numero);


//Prueba con Let
var texto = "Curso JS";
console.log(texto);

if(true){
  let texto = "Curso laravel 5";
  console.log(texto);
}

console.log(texto);
