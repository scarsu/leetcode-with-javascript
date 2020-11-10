/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 方法一 暴力枚举 O N^2
  // for(let i=0; i<nums.length; i++){
  //   let ret = nums.indexOf(target-nums[i])
  //   if(ret>=0 && ret!==i){
  //     return [i,ret]
  //   }
  // }

  // 方法二 哈希表 O N
  let hash={}
  for(let i=0;i<nums.length;i++){
    if(hash[target-nums[i]]!==undefined){
      return [hash[target-nums[i]], i]
    }else{
      hash[nums[i]] = i
    }
  }
};
// @lc code=end

