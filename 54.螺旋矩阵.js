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
// 模拟
// var spiralOrder = function(matrix) {
//   const row = matrix.length
//   const col = matrix[0].length
//   const total = row*col
//   const ret = []
//   // 用相同尺寸的矩阵作为元素访问标识
//   const visited = Array(row).fill(0).map(i=>new Array(col).fill(false))
//   // 螺旋的四个方向下 每次遍历下个节点[x,y]的索引增量
//   const directions = [[0,1],[1,0],[0,-1],[-1,0]] // 

//   let x = 0,y = 0
//   let directionIndex = 0
//   while(ret.length<total){
//     // 当前节点
//     let cur = matrix[x][y]
//     visited[x][y] = true
//     ret.push(cur)
//     // 转换方向判断
//     const nextX = x + directions[directionIndex][0];
//     const nextY = y + directions[directionIndex][1];
//     if(
//       !(
//         nextX >= 0 &&
//         nextX < row &&
//         nextY >=0 &&
//         nextY < col &&
//         !visited[nextX][nextY]
//       )
//     ){
//       directionIndex = (directionIndex + 1) % 4
//     }
//     // 下一节点
//     x += directions[directionIndex][0];
//     y += directions[directionIndex][1];
//   }

//   return ret
// };



// 按层模拟
var spiralOrder = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const total = row*col
  const ret = []

  // 每一层的四个顶点索引
  let left=0;right=col-1;top=0;bottom=row-1
  while(left<=right && top<=bottom){
    // 左上>右上 [top,left] [top,right]
    for(let x=left;x<=right;x++){
      ret.push(matrix[top][x])
    }
    // 右上>右下 [top+1,right] [bottom,right]
    for(let x=top+1;x<=bottom;x++){
      ret.push(matrix[x][right])
    }
    // 右下>左下 [bottom,right-1] [bottom,left]
    if(top<bottom){
      for(let x=right-1;x>=left;x--){
        ret.push(matrix[bottom][x])
      }

    }
    // 左下>左上 [bottom-1,left] [top+1,left]
    if(top<bottom&&left<right){
      for(let x=bottom-1;x>=top+1;x--){
        ret.push(matrix[x][left])
      }
    }
    // 计算下一层的四个顶点索引
    [left,right,top,bottom]=[left+1,right-1,top+1,bottom-1]
  }

  return ret
}
// @lc code=end

