'use strict'; 
function sumarElementosArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  let miArray = [1, 2, 3, 4, 5];
  alert(sumarElementosArray(miArray))

