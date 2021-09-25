/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode-cn.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (63.39%)
 * Likes:    694
 * Dislikes: 0
 * Total Accepted:    162.6K
 * Total Submissions: 255.8K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 
 * 一个字符串的 子序列
 * 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 
 * 
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 
 * 
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：text1 = "abcde", text2 = "ace" 
 * 输出：3  
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * text1 和 text2 仅由小写英文字符组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  // dp[i][j]表示text1[0][i]和text2[0][j]之间的最长子序列长度
  const m=text1.length
  const n=text2.length
  const dp=new Array(m+1).fill(0).map(i=>new Array(n+1).fill(0))
  // 初始条件
  for(let i=0;i<m;i++){
      dp[i][0]=0
  }
  for(let j=0;j<n;j++){
      dp[0][j]=0
  }
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          if(text1[i]===text2[j]){
              dp[i+1][j+1]=dp[i][j]+1
          }else{
              dp[i+1][j+1]=Math.max(dp[i+1][j],dp[i][j+1])
          }
      }
  }
  return dp[m][n]
};
// @lc code=end

