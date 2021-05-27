/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode-cn.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (78.04%)
 * Likes:    452
 * Dislikes: 0
 * Total Accepted:    132.6K
 * Total Submissions: 164.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y < 2^31.
 * 
 * 示例:
 * 
 * 
 * 输入: x = 1, y = 4
 * 
 * 输出: 2
 * 
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 
 */

// @lc code=start
var hammingDistance = function(x, y) {
  // 用^操作符计算按位异或结果
  let s = x ^ y, ret = 0;
  // 计算异或结果中，1出现的次数
  while (s != 0) {
    s &= s - 1; // 按位与
    ret++;
  }
  return ret;
};
// @lc code=end

