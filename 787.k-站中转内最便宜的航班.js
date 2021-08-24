/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 *
 * https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/description/
 *
 * algorithms
 * Medium (36.02%)
 * Likes:    336
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 68.8K
 * Testcase Example:  '3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1'
 *
 * 有 n 个城市通过一些航班连接。给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei]
 * ，表示该航班都从城市 fromi 开始，以价格 pricei 抵达 toi。
 * 
 * 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的
 * 价格最便宜 ，并返回该价格。 如果不存在这样的路线，则输出 -1。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * 输出: 200
 * 解释: 
 * 城市航班图如下
 * 
 * 
 * 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
 * 
 * 示例 2：
 * 
 * 
 * 输入: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 0
 * 输出: 500
 * 解释: 
 * 城市航班图如下
 * 
 * 
 * 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 100
 * 0 <= flights.length <= (n * (n - 1) / 2)
 * flights[i].length == 3
 * 0 <= fromi, toi < n
 * fromi != toi
 * 1 <= pricei <= 10^4
 * 航班没有重复，且不存在自环
 * 0 <= src, dst, k < n
 * src != dst
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  // 1.路径其实节点为src，终点为dst
  // 2.路径中转点最多k个，即路径中最多k+2个节点
  // 满足1、2条件中 找出价格最低的一条路径
  // 找不出的话 返回-1

  // 方法一 dfs(此方法超时)
  // 建立路径表
  // const paths=new Array(n).fill(0).map(i=>new Array())
  // flights.forEach(f=>{
  //     paths[f[0]].push(f[1])
  // })
  // // 访问表
  // const visted=new Array(n).fill(0)
  // let min=-1
  // const dfs=(node,sum,count)=>{
  //     if(count>k+2) return
  //     if(node===dst){
  //         min = min===-1 ? sum : Math.min(min,sum)
  //         return
  //     }
  //     for(let i=0;i<paths[node].length;i++){
  //         let cur=paths[node][i]
  //         if(visted[cur]===0){
  //             let price=flights.find(f=>f[0]===node&&f[1]===cur)[2]
  //             visted[cur]=1
  //             dfs(cur,sum+price,count+1)
  //             visted[cur]=0
  //         }
  //     }
  // }
  // visted[src]=1
  // dfs(src,0,1)
  // return min

  // 方法二 动态规划
  // 定义状态
      // dp[t][i] 表示从src经过t个节点到达i城市的最小花费
      // t范围是[0,k+1](最多搭乘k+1次航班)
      // i范围是[0,n-1](共有n个城市)
  // 状态转移方程
      // 设上一个经过的城市是j
      // 则上一个状态的最小花费是dp[t-1][j]
      // 再从flights中找出从j到i航班中的最小花费：cost[j->i](min)
      // 则本次状态的最小花费dp[t][i] = cost[j->i](min) + dp[t-1][j]
  // 初始状态
      // 由于要找最小值，所以在初始化dp数组时，可以将数组元素初始化为Infinity
      // 因为从src经过0个航班到达src需要的花费是0
      // 所以dp[0][src]=0

  // 初始化数组的大小 取决于t和i的取值范围
  const dp=new Array(k+2).fill(0).map(i=>{
      return new Array(n).fill(Infinity)
  })
  dp[0][src]=0
  for(let t=1;t<=k+1;t++){
      for(flight of flights){
          const j=flight[0]
          const i=flight[1]
          const price=flight[2]
          dp[t][i]=Math.min(dp[t][i],price+dp[t-1][j])
      }
  }

  // 最终结果
  // 从dp[t][dst]中找出最小的值（其中t=[1,k+1]）
  let ans=Infinity
  for(let t=1;t<=k+1;t++){
      ans=Math.min(ans,dp[t][dst])
  }
  return ans===Infinity?-1:ans

};
// @lc code=end

