'use strict';

// Escribir una funcion que reciba como parametro una frase. 
// Separar por palabras y devolver el numero de palabras que tiene la frase 

let phrase = prompt('Escribe una oracion');

function countWords(phrase) {
    let words = phrase.split(" ");
    return words.length;
  }

  alert(`En esta oración hay ${countWords(phrase)} palabras`);


