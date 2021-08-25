/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 *
 * https://leetcode-cn.com/problems/all-paths-from-source-to-target/description/
 *
 * algorithms
 * Medium (72.92%)
 * Likes:    161
 * Dislikes: 0
 * Total Accepted:    22.5K
 * Total Submissions: 29.1K
 * Testcase Example:  '[[1,2],[3],[3],[]]'
 *
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 * 
 * 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。
 * 
 * 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：graph = [[1,2],[3],[3],[]]
 * 输出：[[0,1,3],[0,2,3]]
 * 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：graph = [[1],[]]
 * 输出：[[0,1]]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：graph = [[1,2,3],[2],[3],[]]
 * 输出：[[0,1,2,3],[0,2,3],[0,3]]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：graph = [[1,3],[2],[3],[]]
 * 输出：[[0,1,2,3],[0,3]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == graph.length
 * 2 <= n <= 15
 * 0 <= graph[i][j] < n
 * graph[i][j] != i（即，不存在自环）
 * graph[i] 中的所有元素 互不相同
 * 保证输入为 有向无环图（DAG）
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  // graph 是个邻接表
  // dfs
  const n=graph.length
  const ret=[]

  const dfs = (arr, node)=>{
      if(node===n-1){
          ret.push(arr)
          return
      }
      for(target of graph[node]){
          arr.push(target)
          dfs(arr.slice(),target)
          arr.pop()
      }
  }
  dfs([0],0)
  return ret
};
// @lc code=end

