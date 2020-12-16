/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.89%)
 * Likes:    1386
 * Dislikes: 0
 * Total Accepted:    413.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 模拟 O(k*n)
var longestCommonPrefix = function(strs) {
  if(strs.length===0) return ''
  if(strs.length===1) return strs[0]
  let min = Math.min(...strs.map(i=>i.length))
  if(min===0) return ''
  let ret=''
  for(let i=0;i<min;i++){
    let val,check=true
    for(let j=0;j<strs.length;j++){
      if(val===undefined){
        val=strs[j][i]
      }else if(val!==strs[j][i]) {
        check=false
        break
      }
    }
    if(check){
      ret+=val
    }else{
      break
    }
  }
  return ret
};
// @lc code=end

