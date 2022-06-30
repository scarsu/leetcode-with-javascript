/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (71.42%)
 * Likes:    243
 * Dislikes: 0
 * Total Accepted:    99.6K
 * Total Submissions: 139.6K
 * Testcase Example:  '[4,2,5,7]'
 *
 * 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
 * 
 * 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
 * 
 * 你可以返回 任何满足上述条件的数组作为答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 2 * 10^4
 * nums.length 是偶数
 * nums 中一半是偶数
 * 0 <= nums[i] <= 1000
 * 
 * 
 * 
 * 
 * 进阶：可以不使用额外空间解决问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  // 原地排序
  
  // 双指针
  let odd=1
  let even=0
  while(odd<nums.length&&even<nums.length){
      if(nums[odd]%2===1){
          odd+=2
      }else if(nums[even]%2===0){
          even+=2
      }else{
          const temp=nums[odd]
          nums[odd]=nums[even]
          nums[even]=temp
          odd+=2
          even+=2
      }
  }
  return nums
};
// @lc code=end

