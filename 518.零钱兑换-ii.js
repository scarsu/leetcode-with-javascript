/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 *
 * https://leetcode-cn.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (55.64%)
 * Likes:    437
 * Dislikes: 0
 * Total Accepted:    65.1K
 * Total Submissions: 106.7K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: amount = 5, coins = [1, 2, 5]
 * 输出: 4
 * 解释: 有四种方式可以凑成总金额:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 
 * 示例 2:
 * 
 * 输入: amount = 3, coins = [2]
 * 输出: 0
 * 解释: 只用面额2的硬币不能凑成总金额3。
 * 
 * 
 * 示例 3:
 * 
 * 输入: amount = 10, coins = [10] 
 * 输出: 1
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 你可以假设：
 * 
 * 
 * 0 <= amount (总金额) <= 5000
 * 1 <= coin (硬币面额) <= 5000
 * 硬币种类不超过 500 种
 * 结果符合 32 位符号整数
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // 动态规划
  // dp[i]表示金额i对应的硬币组合数量
  // dp[0]=1

  // 对于面额为coin的硬币，
  // 设i使coin<i<amount，
  // 对金额i-coin  加一个coin硬币  就可以得到金额i的硬币组合 
  // 即dp[i] = dp[i] + dp[i-coin]

  // 因此要遍历 coins，对于其中的每个元素 coin，进行如下操作：
  // 遍历 i 从 coin 到 amount，
  // 将 dp[i-coin]的值加到 dp[i]
  const dp=new Array(amount+1).fill(0)
  dp[0]=1
  coins.forEach(coin=>{
    for(let i=coin;i<=amount;i++){
      dp[i]+=dp[i-coin]
    }
  })
  return dp[amount]
};
// @lc code=end

