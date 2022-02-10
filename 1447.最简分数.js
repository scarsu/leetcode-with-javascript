/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 *
 * https://leetcode-cn.com/problems/simplified-fractions/description/
 *
 * algorithms
 * Medium (61.68%)
 * Likes:    43
 * Dislikes: 0
 * Total Accepted:    12.7K
 * Total Submissions: 19.3K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 2
 * 输出：["1/2"]
 * 解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
 * 
 * 示例 2：
 * 
 * 输入：n = 3
 * 输出：["1/2","1/3","2/3"]
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 4
 * 输出：["1/2","1/3","1/4","2/3","3/4"]
 * 解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。
 * 
 * 示例 4：
 * 
 * 输入：n = 1
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const ret=[]
  for(let i=n;i>0;i--){
      for(let j=1;j<i;j++){
          // 判断j/i是否最简分数
          if(isCoPrime(j,i)){
              ret.push(j+"/"+i)
          }
      }
  }
  return ret
};
// 判断a,b是否互质(其中a<b)
function isCoPrime(a,b){
  for(let i=2;i<=a;i++){
      if(b%i===0&&a%i===0) return false
  }
  return true
}
// @lc code=end

