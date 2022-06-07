/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  // 先排序，再遍历
  nums.sort((a,b)=>a-b)
  let kingCount=0
  for(let i=0;i<nums.length-1;i++){
      if(nums[i]===0){
          kingCount++
          continue
      }
      const diff=nums[i+1]-nums[i]-1
      if(diff>kingCount || diff===-1){
          return false
      }else{
          kingCount-=diff
      }
  }
  return true
};