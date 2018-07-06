'use strict'

// DOM - Document Object Model

function cambiaColor(color){
  caja.style.background = color;
}

// Conseguir elementos con un ID concreto

// var  caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

// Conseguir elementos por su etiqueta
var todosoLosDivs = document.getElementsByTagName('div');

console.log(todosoLosDivs);

//todosoLosDivs.forEach((valor, indice) => {
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

for(var valor in todosoLosDivs){
  if (typeof todosoLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosoLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
  }
}
seccion.append(hr);
//});

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarrillo');
divsAmarillos[0].style.background = "yellow";

for(var div in divsRojos){
  if (divsRojos[div].className == "rojo") {
    divsRojos[div].style.background = "red";
  }
}

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
