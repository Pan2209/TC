'use strict';

    let totalKms;
    totalKms = prompt('INGRESE EL KKILOMETRAJE'); 

let precioKm;
precioKm = 0.29;

let arranque;
arranque = 0.55;

let tarifaMinima;
tarifaMinima = 1.50;

let tarifaNocturna;
tarifaNocturna = 1.75;

let valorPagar;
valorPagar = (precioKm * totalKms) + arranque;

if (confirm("La carrera fue después de las 11 pm?")) {
    if (valorPagar < 1.75) 
    alert ('El precio a pagar es de: $ ' + tarifaNocturna);
else{
alert('El precio a pagar es de: $ ' + valorPagar)
}
} else if (valorPagar < 1.50) {
    alert('El precio a pagar es de: $ ' + tarifaMinima);
} else {
    alert('El precio a pagar es de $ ' + valorPagar);
}
