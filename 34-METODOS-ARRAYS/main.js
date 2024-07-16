"use strict";

//declarar array (students)
let students = [];

// agreagr los primeros 5 estudiantes de la lista
students.push("Junior", "Carlos", "Sergio", "Darwin", "Ian");

//Agregar a Mateo al INICIO de la lista
students.unshift("Mateo");

//Eliminar el ULTIMO elemento de la lista
students.pop();

//Eliminar el PRIMER elemento de la lista
students.shift();

//METODO PARA ENCONTRAR EL ELEMENTO

let ages = [12, 15, 18, 19, 20, 23, 26, 29, 30];
let agesfilter = ages.filter((num) => num <= 23);
let agesChanged = ages.map(function (item) {
  return item / 2;
});
//tambien se puede hacer asi para usar la funcion flecha
//  let agesChanged = ages.map(item => item*2);

let agesReverse = ages.reverse();

let subjects = 'piensa, metodologia, matematica, interfaces, database, TICS';
let subjectsArr = subjects.split(', ');
let subjectExist = subjectsArr.includes('piensa');

alert(subjectExist)


alert(agesChanged);
