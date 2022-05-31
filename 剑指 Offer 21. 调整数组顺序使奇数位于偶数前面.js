/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  // 双指针
  let i=0
  let j=nums.length-1
  while(i<j){
      if(nums[i]%2===1){
          i++
      }else if(nums[j]%2===0){
          j--
      }else{
          let temp=nums[i]
          nums[i]=nums[j]
          nums[j]=temp
          i++
          j--
      }
  }
  return nums
};