/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 *
 * https://leetcode-cn.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (38.03%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    48.5K
 * Total Submissions: 115.4K
 * Testcase Example:  '"3+2*2"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 
 * 整数除法仅保留整数部分。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "3+2*2"
 * 输出：7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " 3/2 "
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = " 3+5 / 2 "
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
 * s 表示一个 有效表达式
 * 表达式中的所有整数都是非负整数，且在范围 [0, 2^31 - 1] 内
 * 题目数据保证答案是一个 32-bit 整数
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let i=0
  const n=s.length
  let stack=[],preSign='+',num=0
  while(i<n){
    // 是数字，存储至num
    if(!isNaN(Number(s[i])) && s[i]!==' '){
      num=num*10+1*s[i]
    }
    if(isNaN(Number(s[i])) || i===n-1){
      if(preSign==='+'){
        stack.push(num)
      }else if(preSign==='-'){
        stack.push(-1*num)
      }else if(preSign==='/'){
        let last=stack.pop()
        stack.push(last/num|0) 
        // 此处注意不要使用Math.floor取整，要考虑负数
        // 0按位或 取整
      }else if(preSign==='*'){
        let last=stack.pop()
        stack.push(last*num)
      }
      preSign=s[i]
      num=0
    }
    i++
  }
  return stack.reduce((a,b)=>a+b,0)
};
// @lc code=end

