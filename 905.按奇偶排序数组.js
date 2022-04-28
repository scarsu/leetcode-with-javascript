/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (70.13%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    77.7K
 * Total Submissions: 109.9K
 * Testcase Example:  '[3,1,2,4]'
 *
 * 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
 * 
 * 返回满足此条件的 任一数组 作为答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,1,2,4]
 * 输出：[2,4,3,1]
 * 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  // 一次遍历，时间复杂度On，空间复杂度On
  // const ret=[]
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i]%2===0){
  //         ret.unshift(nums[i])
  //     }else{
  //         ret.push(nums[i])
  //     }
  // }
  // return ret

  // 双指针 时间复杂度On 空间复杂度O1
  let i=0,j=nums.length-1
  while(i<j){
      if(nums[i]%2===0){
          i++
          continue
      }
      if(nums[j]%2===1){
          j--
          continue
      }
      let temp=nums[i]
      nums[i]=nums[j]
      nums[j]=temp
  }
  return nums
};
// @lc code=end

