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
