'use strict';

// escribir una funcion que reciba como parametros un array de nombres y un nombre a buscar, 
// muestre en la pantalla si el nombre esta en la lista o no 
let LookingFor = prompt("¿Qué nombre estás buscando?");

let names = ['Juan','Jose','Pedro','Maria','Alejandra'];

function SearchName(names, LookingFor) {
  if (names.includes(LookingFor)) {
    alert(`El nombre ${LookingFor} está en la lista`);
  } else {
    alert(`El nombre ${LookingFor} no está en la lista`);
  }
}

SearchName(names, LookingFor);
  