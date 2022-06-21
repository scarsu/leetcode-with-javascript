/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 哈希集合
  // const set=new Set()
  // for(let i=0;i<nums.length;i++){
  //     if(set.has(target-nums[i])){
  //         return [target-nums[i], nums[i]]
  //     }else{
  //         set.add(nums[i])
  //     }
  // }

  // 排序数组，可以用双指针
  let l=0,r=nums.length-1
  while(l<r){
      const diff=nums[l]+nums[r]-target
      if(diff>0){
          r--
      }else if(diff<0){
          l++
      }else{
          return [nums[l], nums[r]]
      }
  }
};