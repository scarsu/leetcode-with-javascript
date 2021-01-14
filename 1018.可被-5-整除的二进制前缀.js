/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 *
 * https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/description/
 *
 * algorithms
 * Easy (47.34%)
 * Likes:    66
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 33.9K
 * Testcase Example:  '[0,1,1]'
 *
 * 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i
 * 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 * 
 * 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[0,1,1]
 * 输出：[true,false,false]
 * 解释：
 * 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
 * 
 * 
 * 示例 2：
 * 
 * 输入：[1,1,1]
 * 输出：[false,false,false]
 * 
 * 
 * 示例 3：
 * 
 * 输入：[0,1,1,1,1,1]
 * 输出：[true,false,false,false,true,false]
 * 
 * 
 * 示例 4：
 * 
 * 输入：[1,1,1,0,1]
 * 输出：[false,false,false,false,false]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 30000
 * A[i] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */

// 要考虑超出最大安全整数
// parseInt('10100000000111001011111100010111101101010001000001001100',2)/5
// 9013520667155676
// parseInt('10100000000111001011111100010111101101010001000001001100',2)%5
// 4
var prefixesDivBy5 = function(A) {
  let last=0
  return A.map(num=>{
    // last=(last<<1n)+BigInt(num)
    // return last%5n===0n
    last=((last<<1)+num)%5 //last不需要保留整个数值，可以只保留余数，不影响判断整除5（这样就不需要考虑数值太大）
    return last===0
  })
};// @lc code=end

