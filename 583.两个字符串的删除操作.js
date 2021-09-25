/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 *
 * https://leetcode-cn.com/problems/delete-operation-for-two-strings/description/
 *
 * algorithms
 * Medium (58.65%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    41.7K
 * Total Submissions: 68.6K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: "sea", "eat"
 * 输出: 2
 * 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定单词的长度不超过500。
 * 给定单词中的字符只含有小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 转换为求子集的问题，即求最大公共子序列
  const m=word1.length
  const n=word2.length
  const pub=longestCommonSubsequence(word1, word2)
  return m+n-2*pub
};

// 见1143 最大公共子序列 medium 二元动态规划
function longestCommonSubsequence(text1, text2) {
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

