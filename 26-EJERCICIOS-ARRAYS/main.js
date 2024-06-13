'use strict';


// Escribir una funcion que reciba un array y retorne la suma de sus elementos






function sumarArray(array) {
    let sum = 0;
    for (let i = 0; i < array.lenght; i++){
    

    sum = sum + i;
    }
    return sum;

}


let nums = [2, 8, 9];
let result = sumarArray(nums)
alert(result);