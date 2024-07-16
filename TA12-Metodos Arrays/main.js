"use strict";
/*
Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array. 
          nums = [13.676767, 3.123432, 5.34543543, 10.3452345]

Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.
Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
La función debe retornar solo las asignaturas que pertenecen a ese nivel. 

Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función debe recibir el array y devolver únicamente la parte entera del promedio.
*/

















let nums
nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

// Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array. 
function filterNumbers(nums) {
    let filtered = nums.filter((num) => num > 10);
    let rounded = filtered.map((num) => num.toFixed(2));
    return rounded;
}
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.
let asignaturas = [
    {nombre: "Programación I", nivel: 1 },
    {nombre: "Matemáticas Discretas", nivel: 1 },
    {nombre: "Programación II", nivel: 2 },
    {nombre: "Estructuras de Datos", nivel: 2 },
    {nombre: "Desarrollo Web", nivel: 3 },
    {nombre: "Bases de Datos", nivel: 3 },
    
];

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
/* Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
La función debe retornar solo las asignaturas que pertenecen a ese nivel. */


function filterAsignaturasByNivel(asignaturas, nivel) {
    return asignaturas.filter((asignatura) => asignatura.nivel === nivel);
}

let materias = [
    {nombre: "Programación I", nivel: 1 },
    {nombre: "Matemáticas Discretas", nivel: 1 },
    {nombre: "Programación II", nivel: 2 },
    {nombre: "Estructuras de Datos", nivel: 2 },
    {nombre: "Desarrollo Web", nivel: 3 },
    {nombre: "Bases de Datos", nivel: 3 },
];

console.log(filterAsignaturasByNivel(asignaturas, 2));



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función debe recibir el array y devolver únicamente la parte entera del promedio.

function calculateAverage(calificaciones) {
    let sum = calificaciones.reduce((acc, current) => acc + current, 0);
    return Math.floor(sum / calificaciones.length);
}

let calificaciones = [80, 70, 90, 85, 75];
console.log(calculateAverage(calificaciones)); // Output: 