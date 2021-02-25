/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 *
 * https://leetcode-cn.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (67.35%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    49.5K
 * Total Submissions: 73.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 * 
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6]]
 * 输出：[[1,4],[2,5],[3,6]]
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
 * 1 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const row=matrix.length
  const col=matrix[0].length
  var ret=Array(col)
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      if(!ret[j]) ret[j]=[]
      ret[j][i]=matrix[i][j]
    }
  }
  return ret
};
// @lc code=end

