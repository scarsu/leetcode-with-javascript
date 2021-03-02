/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 *
 * https://leetcode-cn.com/problems/range-sum-query-2d-immutable/description/
 *
 * algorithms
 * Medium (46.36%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 46.3K
 * Testcase Example:  '["NumMatrix","sumRegion","sumRegion","sumRegion"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]'
 *
 * 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
 * 
 * 
 * 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 给定 matrix = [
 * ⁠ [3, 0, 1, 4, 2],
 * ⁠ [5, 6, 3, 2, 1],
 * ⁠ [1, 2, 0, 1, 5],
 * ⁠ [4, 1, 0, 1, 7],
 * ⁠ [1, 0, 3, 0, 5]
 * ]
 * 
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设矩阵不可变。
 * 会多次调用 sumRegion 方法。
 * 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  // "会多次调用 sumRegion 方法"
  // 前缀和
  // 计算每个点其左上角矩形的和 用矩阵存储
  // 时间O(m)(n)
  this.matrix=matrix
  this.sums=[]
  matrix.forEach((row,i)=>{
    this.sums[i]=this.sums[i]||[]
    let rowSum=0
    row.forEach((col,j)=>{
      rowSum+=col
      this.sums[i][j] = (i>0 ? this.sums[i-1][j] : 0) + rowSum
    })
  })
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 时间O(1)
  // - col1 - col2
  // -   -  -   -
  // -   a  -   b  row1
  // -   c  -   d  row2
  // -   -  -   -
  let d = this.sums[row2][col2]
  let a = row1>0&col1>0 ? this.sums[row1-1][col1-1] : 0
  let b = col1>0 ? this.sums[row2][col1-1] : 0
  let c = row1>0 ? this.sums[row1-1][col2] : 0
  return a+d-b-c
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

