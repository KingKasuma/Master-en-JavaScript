'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud
var nombre = "Victor Robles";

console.log(nombre.length);

// Concatenar - Unir textos

//var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);

var busqueda = texto1.trim();
console.log(busqueda);
