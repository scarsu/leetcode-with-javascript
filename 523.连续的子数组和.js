/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 *
 * https://leetcode-cn.com/problems/continuous-subarray-sum/description/
 *
 * algorithms
 * Medium (22.44%)
 * Likes:    291
 * Dislikes: 0
 * Total Accepted:    45.2K
 * Total Submissions: 179.6K
 * Testcase Example:  '[23,2,4,6,7]\n6'
 *
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 * 
 * 
 * 子数组大小 至少为 2 ，且
 * 子数组元素总和为 k 的倍数。
 * 
 * 
 * 如果存在，返回 true ；否则，返回 false 。
 * 
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [23,2,4,6,7], k = 6
 * 输出：true
 * 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [23,2,6,4,7], k = 6
 * 输出：true
 * 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
 * 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [23,2,6,4,7], k = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
// 双重循环 超出时间限制
// var checkSubarraySum = function(nums, k) {
//   const n=nums.length
//   for(let i=0;i<n;i++){
//     let sum = nums[i]
//     for(let j=i+1;j<n;j++){
//       sum+=nums[j]
//       if(sum%k===0) return true
//     }
//   }
//   return false
// };


// 前缀和 + 哈希表
// 多次计算和的问题，一般考虑前缀和
// preSum[i]表示从0-i位的元素和
// preSum[r]-preSum[l]表示第l+1,r位之间的元素和
// 如果preSum[r]-preSum[l]能整除k，
// 那么preSum[r]除k的余数 = preSum[l]除k的余数
// 因此 计算前缀和数组时 只需要计算对k的余数
// 用哈希表记录余数(键)和索引(值)
var checkSubarraySum = function(nums, k) {
  if(nums.length<2) return false

  const n=nums.length
  let preMod = 0
  const modMap = new Map()
  modMap.set(0, -1); // 边界情况，[0,0]2的结果是true
  for(let i=0;i<n;i++){
    preMod=(preMod+nums[i])%k
    if(modMap.has(preMod)){
      const prevIndex = modMap.get(preMod);
      if (i - prevIndex >= 2) return true
    }else{
      modMap.set(preMod, i)
    }
  }
  return false
}
// @lc code=end

