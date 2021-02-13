/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (60.62%)
 * Likes:    592
 * Dislikes: 0
 * Total Accepted:    79.6K
 * Total Submissions: 127.7K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [5,6]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // 用nums本身作为哈希表
  const n=nums.length
  const ret=[]
  for(let num of nums){
    // 改变了数值，却仍然能通过取余n找到原始的数值
    nums[(num-1)%n]+=n
  }
  for(let i=0;i<n;i++){
    if(nums[i]<=n){
      ret.push(i+1)
    }
  }
  return ret
};
// @lc code=end

