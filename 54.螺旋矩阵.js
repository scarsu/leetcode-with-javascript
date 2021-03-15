/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (41.42%)
 * Likes:    663
 * Dislikes: 0
 * Total Accepted:    116.2K
 * Total Submissions: 262.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 模拟

  const row = matrix.length
  const col = matrix[0].length
  const total = row*col
  const ret = []
  // 用相同尺寸的矩阵作为元素访问标识
  const visited = Array(row).fill(0).map(i=>new Array(col).fill(false))
  // 螺旋的四个方向下 每次遍历下个节点[x,y]的索引增量
  const directions = [[0,1],[1,0],[0,-1],[-1,0]] // 

  let x = 0,y = 0
  let directionIndex = 0
  while(ret.length<total){
    // 当前节点
    let cur = matrix[x][y]
    visited[x][y] = true
    ret.push(cur)
    // 转换方向判断
    const nextX = x + directions[directionIndex][0];
    const nextY = y + directions[directionIndex][1];
    if(
      !(
        nextX >= 0 &&
        nextX < row &&
        nextY >=0 &&
        nextY < col &&
        !visited[nextX][nextY]
      )
    ){
      directionIndex = (directionIndex + 1) % 4
    }
    // 下一节点
    x += directions[directionIndex][0];
    y += directions[directionIndex][1];
  }

  return ret
};
// @lc code=end

