/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (39.14%)
 * Likes:    373
 * Dislikes: 0
 * Total Accepted:    105.6K
 * Total Submissions: 245.8K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
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
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 两次二分查找
  // 第一次 在第一列中二分查找 最后的不大于target的行号
  const row = binarySearchFirstColumn(matrix, target)
  if(row<0) return false
  // 在行中二分搜索target
  return binarySearchRow(matrix[row], target)
};

function binarySearchFirstColumn(matrix, target){
  let low=-1,high=matrix.length-1
  while(low<high){
    let mid = low + (high-low+1)/2|0
    if(matrix[mid][0]<=target){
      low=mid
    }else{
      high=mid-1
    }
  }
  return low
}
function binarySearchRow(row, target){
  let low=0,high=row.length-1
  while(low<=high){
    let mid=low + (high-low+1)/2|0
    if(row[mid]===target){
      return true
    }else if(row[mid]>target){
      high=mid-1
    }else{
      low=mid+1
    }
  }
  return false
}
// @lc code=end

