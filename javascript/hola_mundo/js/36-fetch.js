'user-strict';

// Fecth ()ajax y peticiones a servicios / api rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_leane = document.querySelector("#leanne");


  getUsuarios()
    .then(data => data.json())
    .then(data => {
      usuarios = data;
      listadoUsuarios(usuarios);

      return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;
    return getLeane();
  })
  .then(data => data.json())
  .then(user =>{
    mostrarLeane(user);
  })
  .catch(error => {
    alert("Error en las peticiones");
  });


function getUsuarios(){
  return fetch('https://jsonplaceholder.typicode.com/users');
}

function getLeane(){
  return fetch('https://jsonplaceholder.typicode.com/users/1');
}

function getInfo(){
  var profesor = {
    nombre: 'Victor',
    apellidos: 'Robles',
    url: 'https://victorroblesweb.es'
  };
  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function(){
      profesor_string = JSON.stringify(profesor);
      if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
      return resolve(profesor_string);
    }, 3000);
  });
}

function listadoUsuarios(usuarios){
  usuarios.map((users, i) => {
    let nombre = document.createElement("h3");
    nombre.innerHTML = i + '. ' + users.name;
    div_usuarios.appendChild(nombre);

    document.querySelector(".loading").style.display = 'none';
  });
}

function mostrarLeane(user){
  console.log(user);
  let nombre = document.createElement("h4");
  nombre.innerHTML = user.name;
  div_leane.appendChild(nombre);

  document.querySelector("#leanne .loading").style.display = 'none';

}
