/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (49.39%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    53.5K
 * Total Submissions: 103.9K
 * Testcase Example:  '16'
 *
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 
 * 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4^x
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 5
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 1
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你能不使用循环或者递归来完成本题吗？
 * 
 * 
 */

// @lc code=start
var isPowerOfFour = function(n) {
  // 循环
  // let power=0
  // while(n>Math.pow(4,power)){
  //   power++
  // }
  // return n===Math.pow(4,power)


  // 二进制 特性
  // 观察4的二进制 1 100 10000 1000000...
  // 一定有且只有一个1，且这个1出现在奇数位上
  // n最大是31位 构造一个mask 奇数位是0 偶数位是1
  // n和mask 按位与 结果一定是0
  // n一定大于0
  // n与n-1按位与结果 一定也是0
  // let mask=0b10101010101010101010101010101010
  // return (n>0) && (n&(n-1))===0 && ((n&mask)===0)

  // 取模性质
  // n如果是4的幂次方  n对3取模的结果一定是1
  return (n>0) && (n&(n-1))===0 && (n%3===1)

};
// @lc code=end

