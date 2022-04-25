/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 *
 * https://leetcode-cn.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (36.44%)
 * Likes:    358
 * Dislikes: 0
 * Total Accepted:    106.1K
 * Total Submissions: 269.2K
 * Testcase Example:  '[3,2,1]'
 *
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[3, 2, 1]
 * 输出：1
 * 解释：第三大的数是 1 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：[1, 2]
 * 输出：2
 * 解释：第三大的数不存在, 所以返回最大的数 2 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：[2, 2, 3, 1]
 * 输出：1
 * 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
 * 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -2^31 
 * 
 * 
 * 
 * 
 * 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first,second,third
  for(let i=0;i<nums.length;i++){
      const cur=nums[i]
      if(first===undefined){
          first=cur
      }else if(second===undefined){
          if(first>cur){
              second=cur
          }else if(first<cur){
              second=first
              first=cur
          }
      }else if(third===undefined){
          if(cur>first){
              third=second
              second=first
              first=cur
          }else if(cur>second && cur<first){
              third=second
              second=cur
          }else if(cur<second){
              third=cur
          }
      }else{
          if(nums[i]>first){
              third=second
              second=first
              first=cur
          }else if(cur>second && cur<first){
              third=second
              second=cur
          }else if(cur<second && cur>third){
              third=cur
          }
      }
  }
  return third===undefined ? first : third
};
// @lc code=end

