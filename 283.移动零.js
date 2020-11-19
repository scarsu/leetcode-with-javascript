/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (62.68%)
 * Likes:    817
 * Dislikes: 0
 * Total Accepted:    242.7K
 * Total Submissions: 385.7K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let notZeroIdx = 0
  for(let i=0;i<nums.length;i++){
    // 将非0全部移到前部
    if(nums[i]!==0){
      nums[notZeroIdx]=nums[i]
      notZeroIdx++
    }
  }
  for(let i=notZeroIdx;i<nums.length;i++){
    //补齐后续0
    nums[i]=0
  }
};
// @lc code=end

