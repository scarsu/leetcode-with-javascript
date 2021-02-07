/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 *
 * https://leetcode-cn.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (23.09%)
 * Likes:    465
 * Dislikes: 0
 * Total Accepted:    44.7K
 * Total Submissions: 180.9K
 * Testcase Example:  '[4,2,3]'
 *
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 
 * 我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,2,3]
 * 输出: true
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,2,1]
 * 输出: false
 * 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 * 
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 1 <= n <= 10 ^ 4
 * - 10 ^ 5 <= nums[i] <= 10 ^ 5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  // 用于判断数组是否满足非递减
  const isSorted = arr=>{
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]) return false
    }
    return true
  }
  for(let i=0;i<nums.length-1;i++){
    let a=nums[i],b=nums[i+1]
    if(a>b){
      // 有两种贪心选择
      // 1. 将nums[i]  设置为b值（保证a最大，以免比前面数小
      // 2. 将nums[i+1]设置为a值（保证b最小，以免比后面数大
      nums[i]=b
      // 变更后还要继续判断是否符合条件
      if(isSorted(nums)) return true
      nums[i]=a // 否则还原
      nums[i+1]=a
      return isSorted(nums)
    }
  }
  return true
};
// @lc code=end

