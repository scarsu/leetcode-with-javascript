/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 *
 * https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
 *
 * algorithms
 * Medium (56.29%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    21.1K
 * Total Submissions: 33.4K
 * Testcase Example:  '"(abcd)"'
 *
 * 给出一个字符串 s（仅含有小写英文字母和括号）。
 * 
 * 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
 * 
 * 注意，您的结果中 不应 包含任何括号。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "(abcd)"
 * 输出："dcba"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "(u(love)i)"
 * 输出："iloveu"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "(ed(et(oc))el)"
 * 输出："leetcode"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "a(bcdefghijkl(mno)p)q"
 * 输出："apmnolkjihgfedcbq"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 2000
 * s 中只有小写英文字母和括号
 * 我们确保所有括号都是成对出现的
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  // 括号序列相关的题目，通用的解法是使用递归或栈
  const stack=[]
  let str=''
  for(let ch of s){
    if(ch==='('){
      stack.push(str) // str入栈
      str=''  // 充值str
    }else if(ch===')'){
      str=str.split('').reverse().join('')  // 反转str
      str=stack[stack.length-1]+str // 将str和栈顶字符串拼接，作为新的str
      stack.pop() // 栈顶元素已被str拼接，将其弹出栈
    }else{
      str+=ch
    }
  }
  return str
};
// @lc code=end

