/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Medium (60.44%)
 * Likes:    162
 * Dislikes: 0
 * Total Accepted:    26.1K
 * Total Submissions: 41.7K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组
 * ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 返回平面上所有回旋镖的数量。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：points = [[0,0],[1,0],[2,0]]
 * 输出：2
 * 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：points = [[1,1]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == points.length
 * 1 
 * points[i].length == 2
 * -10^4 i, yi 
 * 所有点都 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const getDis=(i,j)=>{
      return (points[i][0]-points[j][0])**2 + (points[i][1]-points[j][1])**2
  }
  
  let ret=0

  // 将每个i作为拐点
  for(let i=0;i<points.length;i++){
      // 计算每个点到i的距离，以及其出现的次数
      // 用哈希表存储
      const map=new Map()
      for(let j=0;j<points.length;j++){
          // 距离直接用平方保存
          if(j!==i){
              let dis=getDis(i,j)
              if(!map.has(dis)){
                  map.set(dis,0)
              }
              map.set(dis,map.get(dis)+1)
          }
      }
      for(let v of map.values()){
          ret+=v*(v-1)
      }
  }

  return ret
};
// @lc code=end

