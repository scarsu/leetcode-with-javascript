/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (26.51%)
 * Likes:    374
 * Dislikes: 0
 * Total Accepted:    41.2K
 * Total Submissions: 152K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j])
 * ，同时又满足 abs(i - j)  。
 * 
 * 如果存在则返回 true，不存在返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1], k = 3, t = 0
 * 输出：true
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,0,1,1], k = 1, t = 2
 * 输出：true
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -2^31 
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
// 一 滑动窗口
// 简化题目要求为：
// 对于元素nums[i]
// 如果其左侧k个元素中，存在某个元素的值 与 nums[i] 差值<t
// 则结果存在。

// 在nums[i]前 维护一个大小为k的滑动窗口
// 判断是否存在x使得abs(nums[i] - nums[x]) <= t
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const n=nums.length

  // 边界
  if(n===0 || k===0) return false

  // 滑动窗口
  let win=[]
  for(let i=0;i<n;i++){
    if(win.findIndex(e=>Math.abs(nums[i] - e) <= t) >= 0) return true
    if(win.length===k) win.shift()
    win.push(nums[i])
  }
  return false
};
// @lc code=end

