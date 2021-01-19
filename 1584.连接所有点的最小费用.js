/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 *
 * https://leetcode-cn.com/problems/min-cost-to-connect-all-points/description/
 *
 * algorithms
 * Medium (50.79%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    5.8K
 * Total Submissions: 10K
 * Testcase Example:  '[[0,0],[2,2],[3,10],[5,2],[7,0]]'
 *
 * 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。
 * 
 * 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示
 * val 的绝对值。
 * 
 * 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * 输出：20
 * 解释：
 * 
 * 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20 。
 * 注意到任意两个点之间只有唯一一条路径互相到达。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[3,12],[-2,5],[-4,1]]
 * 输出：18
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：points = [[0,0],[1,1],[1,0],[-1,1]]
 * 输出：4
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：points = [[-1000000,-1000000],[1000000,1000000]]
 * 输出：4000000
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：points = [[0,0]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= points.length <= 1000
 * -10^6 <= xi, yi <= 10^6
 * 所有点 (xi, yi) 两两不同。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// Kruskal最小生成树算法
// 该算法的基本思想是从小到大加入边，是一个贪心算法。

// 1. 将这张完全图中的边全部提取到边集数组中
// 2. 对所有边进行排序
// 3. 从小到大进行枚举，每次贪心选边加入答案

// 使用并查集维护连通性，若当前边两端不连通即可选择这条边
var minCostConnectPoints = function(points) {
  const dist = (x, y) => {
    return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
  }

  const n = points.length;
  const dsu = new DisjointSetUnion(n);  // 连通性 并查集
  const edges = []; // 边

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([dist(i, j), i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]); // 边升序排序

  let ret = 0, num = 1;
  for (const [length, x, y] of edges) {
    if (dsu.unionSet(x, y)) {
      ret += length;
      num += 1;
      if (num === n) {
        break;
      }
    }
  }
  return ret;
};

/**
* 用于维护子图连通性的并查集
*/
class DisjointSetUnion {
  constructor (n) {
    this.n = n;
    this.ranks = new Array(n).fill(1);
    this.parents = new Array(n).fill(0).map((element, index) => index);
  }
  find (x) {
    while(x!==this.parents[x]) x=this.parents[x]
    return x
  }
  // 连接两点x,y
  // 不可连接返回false，可连接返回true
  unionSet (x, y) {
    let rootx = this.find(x), rooty = this.find(y);
    if (rootx === rooty) {
      return false; // 此两点已属于相同连通分量，不可再合并
    }
    if (this.ranks[rootx] < this.ranks[rooty]) {
      [rootx, rooty] = [rooty, rootx];
    }
    this.ranks[rootx] += this.ranks[rooty];
    this.parents[rooty] = rootx;
    return true;
  }
}
// @lc code=end

