'use strict';

let totalKm
totalKm = prompt("INGRESE EL KILOMETRAJE");

let precioKm;
precioKm = 0.25;

let arranque;
arranque = 0.50;

let valor
valor = (precioKm * totalKm) + arranque;

alert('el valor a pagar es de ' + valor);
