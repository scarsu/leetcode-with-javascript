/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (47.56%)
 * Likes:    768
 * Dislikes: 0
 * Total Accepted:    177.7K
 * Total Submissions: 368.6K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 5
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 20
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
 * 1 <= n, m <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * 每行的所有元素从左到右升序排列
 * 每列的所有元素从上到下升序排列
 * -10^9 <= target <= 10^9
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
  // 遍历查找 O(mn)
  // const m=matrix.length
  // const n=matrix[0].length
  // for(let i=0;i<m;i++){
  //     for(let j=0;j<n;j++){
  //         if(matrix[i][j]===target) return true
  //     }
  // }
  // return false

  // 对每一行使用二分 O(mlogn)
  // const m=matrix.length
  // const n=matrix[0].length
  // for(let i=0;i<m;i++){
  //     let l=0;
  //     let r=n-1;
  //     while(l<=r){
  //         const mid=((l+r)/2)|0
  //         const cur=matrix[i][mid]
  //         if(cur===target){
  //             return true
  //         }else if(cur>target){
  //             r=mid-1
  //         }else{
  //             l=mid+1
  //         }
  //     }
  // }
  // return false

  // Z字形查找 O(m+n)
  // 从矩阵右上角(x,y)开始查找,
  // 如果当前值cur>target那么 x++
  // 如果当前值cur<target那么 y--
  const m=matrix.length
  const n=matrix[0].length
  let x=0
  let y=n-1
  while(x<m&&y>=0){
      const cur=matrix[x][y]
      if(cur===target){
          return true
      }else if(cur>target){
          y--
      }else{
          x++
      }
  }
  return false
};
// @lc code=end

