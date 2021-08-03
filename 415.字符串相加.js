/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (53.15%)
 * Likes:    411
 * Dislikes: 0
 * Total Accepted:    132.1K
 * Total Submissions: 247.7K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * num1 和num2 的长度都小于 5100
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {

  // 对齐补0
  while(num1.length<num2.length) num1='0'+num1
  while(num1.length>num2.length) num2='0'+num2

  // 模拟加法
  let ret=''
  let carry=0
  for(let i=num1.length-1;i>=0;i--){
      let sum = carry + num2[i]*1 + num1[i]*1
      ret = sum%10 + ret
      carry = Math.floor(sum/10)
  }

  return carry>0?carry+ret:ret
};
// @lc code=end

