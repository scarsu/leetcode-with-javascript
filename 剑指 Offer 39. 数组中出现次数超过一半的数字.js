/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let vote=0
  let target
  for(let i=0;i<nums.length;i++){
      if(vote===0){
          vote=1
          target=nums[i]
      }else if(nums[i]!==target){
          vote--
      }else{
          vote++
      }
  }
  return target
};