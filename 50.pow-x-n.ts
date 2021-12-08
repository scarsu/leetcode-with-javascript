/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (37.68%)
 * Likes:    812
 * Dislikes: 0
 * Total Accepted:    237.4K
 * Total Submissions: 629.7K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -100.0 
 * -2^31 
 * -10^4 
 * 
 * 
 */

// @lc code=start
function myPow(x: number, n: number): number {
  // 快速幂算法
  // x^73不需要将x乘73次
  // 分治算法思想 将73拆解 每次向下取n/2值
  // x^73 x^36 x^18 x^9 x^4 x^2 x
  // 这样递归或者迭代的次数仅为O(logn)
  
  if(n===0) return 1
  
  const quickMul=(x,y)=>{
      if(y===1) return x
      const half=quickMul(x,y/2|0)
      return y%2===0?half*half:half*half*x
  }

  return n>0?quickMul(x,n): 1/quickMul(x,-n)

};
// @lc code=end

