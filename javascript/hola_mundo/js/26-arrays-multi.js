'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

console.log(peliculas.reverse());

var cine = [categorias, peliculas];

// console.log(cine[0][1]);

/*
var elemento = prompt("Introduce tu pelicula:");

while(elemento != "ACABAR"){
  elemento = prompt("Introduce tu pelicula:");
  peliculas.push(elemento);
}
*/

var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
  peliculas.splice(indice,1);
}

peliculas = peliculas.join();

var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array);
