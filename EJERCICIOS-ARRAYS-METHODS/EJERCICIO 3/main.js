'use strict';

let frase = prompt('ESCRIBE UNA FRASE');

function tieneMasDeTresPalabras(frase) {
  return frase.split(' ').filter(palabra => palabra.length > 3).length > 0;
}

if (tieneMasDeTresPalabras(frase)) {
  alert("La frase tiene más de 3 palabras ");
} else {
  alert("La frase no tiene palabras con más de 3 ");
}


