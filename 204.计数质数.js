/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (35.61%)
 * Likes:    505
 * Dislikes: 0
 * Total Accepted:    91.1K
 * Total Submissions: 251.8K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 0
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 1
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 5 * 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrime = num => {
    if(num <= 1) return false
    let ret = true
    let i = 2
    while(i*i <= num){
      if(num%i === 0) return false
      i++
    }
    return ret
  }
  let ret=0
  for(let i=0;i<n;i++){
    if(i>10 && [1,3,7,9].indexOf(i%10)<0 ) continue
    if(isPrime(i)) ret++
  }
  return ret
};
// @lc code=end

