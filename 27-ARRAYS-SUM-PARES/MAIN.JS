'use strict';


/*Escribe una funcion que reciba un array y devuelva la usma de los nuemros pares */



function pares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            sum = sum + array[i];
          

        
        }
    }  return sum;
}
let array = [1,2,3,4,5,6,7,8,9,0];
let result = pares(array);
alert(result);