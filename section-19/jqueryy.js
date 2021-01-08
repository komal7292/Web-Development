var removeElement = function(nums, val) {
  var result = [];
  j=0;
  for(let i = 0; i < nums.length; i++) {
      if (nums[i] != val) {
          nums[j] = nums[i];
          j++;
      }
  }
  result.push(j);
  return result;
}

console.log (removeElement([]))

