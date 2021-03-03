/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 *
 * https://leetcode-cn.com/problems/counting-bits/description/
 *
 * algorithms
 * Medium (76.00%)
 * Likes:    549
 * Dislikes: 0
 * Total Accepted:    79.9K
 * Total Submissions: 103.1K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 进阶:
 * 
 * 
 * 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 * 要求算法的空间复杂度为O(n)。
 * 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // 和前两天前缀和的思想有类似之处
  // 根据前面已经算出的元素，来计算当前的元素
  // 即：找出已知值元素 与 当前元素的关系
  let ret=Array(num+1)
  ret[0]=0
  for(let i=1;i<=num;i++){
    ret[i]=ret[i>>1] + (i&1)
  }
  return ret
};
// @lc code=end

