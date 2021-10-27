/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 *
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (52.19%)
 * Likes:    548
 * Dislikes: 0
 * Total Accepted:    37.1K
 * Total Submissions: 69.6K
 * Testcase Example:  '"()())()"'
 *
 * 给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
 * 
 * 返回所有可能的结果。答案可以按 任意顺序 返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()())()"
 * 输出：["(())()","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "(a)())()"
 * 输出：["(a())()","(a)()()"]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ")("
 * 输出：[""]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由小写英文字母以及括号 '(' 和 ')' 组成
 * s 中至多含 20 个括号
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  // TODO
  // 当前解法使用递归，时间复杂度较高
  // 可以使用循环代替递归

  // 回溯 每一位括号有保留&删除两种情况
  // 括号匹配使用栈实现（只需要记录(数量
  // 遍历到当前括号无法与前面括号匹配时，剪枝，直接删除当前括号
  // 删除数量>min时，剪枝
  let ret=[]
  const n=s.length
  let min
  const backTrace=(i,leftPCount,curStr,deleteCount)=>{
      // console.log(min,i,leftPCount,curStr,deleteCount)
      // 遍历结束 栈中无剩余括号 获取结果
      if(i===n){
          if(leftPCount!==0) return
          if(min===undefined){
              ret.push(curStr)
              min=deleteCount
          }else if(min>deleteCount){
              ret=[curStr]   // 重置结果集
              min=deleteCount
          }else if(min===deleteCount){
              ret.push(curStr)
          }else{
              return
          }
      }else if(i>n) return

      if(s[i]==='('){
          // 保留
          backTrace(i+1,leftPCount+1,curStr+s[i],deleteCount)
          // 删除(deleteCount过大 剪枝)
          if(min===undefined || deleteCount+1<=min){
              backTrace(i+1,leftPCount,curStr,deleteCount+1)
          }
      }else if(s[i]===')'){
          // 保留(括号不匹配 剪枝)
          if(leftPCount>0){
              backTrace(i+1,leftPCount-1,curStr+s[i],deleteCount)
          }
          // 删除(deleteCount过大 剪枝)
          if(min===undefined || deleteCount+1<=min){
              backTrace(i+1,leftPCount,curStr,deleteCount+1)
          }
      }else{
          // 字符 直接向后遍历
          backTrace(i+1,leftPCount,curStr+s[i],deleteCount)
      }
  }
  backTrace(0,0,'',0)
  return [...new Set(ret)]
};
// @lc code=end

