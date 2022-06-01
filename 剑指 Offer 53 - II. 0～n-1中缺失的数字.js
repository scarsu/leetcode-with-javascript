/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 边界
  if(nums[0]!==0) return 0
  if(nums[nums.length-1]!==nums.length) return nums.length
  
  // 二分
  let i=0
  let j=nums.length-1
  while(i<=j){
      const mid=(i+j)/2|0
      if(nums[mid]+1!==nums[mid+1]){
          return nums[mid]+1
      }else if(nums[mid]===mid){
          i=mid+1
      }else{
          j=mid-1
      }
  }
};