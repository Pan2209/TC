'use strict';

let counter = 0;
const maxIntentos = 3;
const premio = 6;
let num;

do {
    counter++;
    num = Number(prompt('Ingrese un número: '));
    if (counter > maxIntentos) {
        alert('SOBREPASASTE EL NUMERO DE INTENTOS!');
        break; 
    }
} while (num !== premio);

if (num === premio) {
    alert('¡GANASTE EN ' + counter + ' INTENTOS!');
} else {
    alert('¡MEJOR SUERTE LA PRÓXIMA VEZ!');
}


