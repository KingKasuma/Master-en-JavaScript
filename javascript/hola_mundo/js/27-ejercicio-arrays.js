'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un arrays
2. Mstrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga su posicion si lo encuentra y su indice
(Se valorara el uso de funciones)
*/

//var numeros = new Array(6);

function mostrarArray(elementos, textoCustom){
  document.write("<h1>Contenido del array "+textoCustom+"</h1>");
  document.write("<ul>");
  elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+"</li>");
  });
  document.write("</ul>");
}

// Pedir 6 numeros
var numeros = [];

for(var i =0;i <= 5;i++){
  //numeros[i] = parseInt(prompt("Introduce un numero", 0));
  numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

// Mostrar array en la consola
console.log(numeros);

// Ordenar y mostrar
mostrarArray(numeros.sort(function(a,b){
  return a-b;
}), 'ordenado');

// Invertir y mostrar
mostrarArray(numeros.reverse(), "revertido");

// Contar elementos
document.write("<h1>El array tiene: "+numeros.length+"</h1>");

// Busqueda

var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
  document.write("<hr/><h1> ENCONTRAD</h1>");
  document.write("<h1>Posicion de la busqueda: "+posicion+"</h1></hr>");
}else{
  document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}
