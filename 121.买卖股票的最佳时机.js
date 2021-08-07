/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (55.15%)
 * Likes:    1386
 * Dislikes: 0
 * Total Accepted:    343.8K
 * Total Submissions: 619.6K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意：你不能在买入股票前卖出股票。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 找到前小后大 差值最大的两个数
var maxProfit = function(prices) {
  // 1.暴力遍历：每个数 都找到其后最大的数 O(n^2)
  // let ret=0
  // for(let i=0;i<prices.length;i++){
  //   let inp = prices[i]
  //   for(let j=i+1;j<prices.length;j++){
  //     ret = Math.max(ret, prices[j]-inp)
  //   }
  // }
  // return ret

  // 2.贪心
  // 维护一个最小数min，和最大利润max
  // 贪心解题法 一般需要证明结果的正确性
  // 一次遍历
  // 如果prices[i]>min，将prices[i]-min与max比较，更新最大利润
  // 如果prices[i]<min，将prices[i]作为min，（因为低点买入利润较大
  // let max=0,min=prices[0]
  // for(let i=0;i<prices.length;i++){
  //   if(prices[i]>min && prices[i]-min>max){
  //     max = prices[i]-min
  //   }else if(prices[i]<min){
  //     min = prices[i]
  //   }
  // }
  // return max

  // 3.动态规划
  // 本题这种多阶段的决策问题适合用动态规划
  let visited=false
  const n=prices.length
  // 状态定义设计
  // 无后效性、当前状态只由之前的状态推导得到
  const dp=new Array(n).fill()
  dp[0]=[]
  dp[0][0]=0
  dp[0][1]=-prices[0]
  for(let i=1;i<n;i++){
      dp[i]=[]
      // dp[i][0] 第i天不持股 的最大利润
      // 包括两种情况：无操作、卖出之前的股份
      dp[i][0]=Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
      // dp[i][1] 第i天持股 的最大利润
      // 包括两种情况：之前持有的股票今日无操作、今日买入
      dp[i][1]=Math.max(dp[i-1][1], -prices[i])
  }
  // 最后要么从始至终没买、要么已经卖出，肯定是返回dp[n-1][0]
  return dp[n-1][0]
};
// @lc code=end

