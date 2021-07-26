/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.23%)
 * Likes:    1909
 * Dislikes: 0
 * Total Accepted:    309.9K
 * Total Submissions: 401.3K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const ret=[]
  // 在单纯的dfs基础上
  // 利用left、right计数，做有效性验证
  const dfs=(left,right,str)=>{
      // 有效性验证
      // left right肯定都小于n
      // 右括号在任何有效组合下，都不能出现比左括号多的情况
      if(left>n || right>n || right>left) return
      if(str.length===n*2){
          ret.push(str)
      }else{
          dfs(left+1,right,str+'(',)           
          dfs(left,right+1,str+')',)           
      }
  }
  dfs(0,0,'')
  return ret
};
// @lc code=end

