'use strict';



let nums = [0, 2, 4, 8];

function concatenarNumerosContinuos(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let result = (nums[i] + '' + nums[j]);
      alert(result);
    }
  }
}

concatenarNumerosContinuos(nums);
    
/*let nums;
nums = [0, 2, 4, 8];
let result;
function concatenarNumeros(nums) {
    for (let i = 0; i < nums.length; i++)
        for (let x = 0; x < nums.length; x++)
     
      

     = (nums[i] + '' + nums[x])
            alert(result)
}*/