/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode-cn.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (68.20%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    69.8K
 * Total Submissions: 98.8K
 * Testcase Example:  '[2,2,3,2]'
 *
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,2,3,2]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,1,0,1,99]
 * 输出：99
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -2^31 
 * nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
 * 
 * 
 * 
 * 
 * 进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map=new Map()
  for(let n of nums){
    map.set(n, (map.get(n)||0)+1)
  }
  for(let k of map.keys()){
    if(map.get(k)===1) return k
  }
};
// @lc code=end

