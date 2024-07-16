"use strict";
let nums;
nums = [2, 3, 6, 5, 0];

let valorBuscado = 5;

function encontrarNums(nums, valorBuscado) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = +1; j < nums.length; j++) {
      if (nums[i]
         + nums[j] == valorBuscado) {
        return (
          "Los números que equivalen a " +
          valorBuscado +
          " son " +
          nums[i] +
          " y " +
          nums[j]
        );
      } 
    }
  }
}

alert(encontrarNums(nums, valorBuscado));
