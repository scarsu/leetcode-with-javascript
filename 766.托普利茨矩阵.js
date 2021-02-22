/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 *
 * https://leetcode-cn.com/problems/toeplitz-matrix/description/
 *
 * algorithms
 * Easy (66.92%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    28.2K
 * Total Submissions: 40.5K
 * Testcase Example:  '[[1,2,3,4],[5,1,2,3],[9,5,1,2]]'
 *
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 * 
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 * 输出：true
 * 解释：
 * 在上述矩阵中, 其对角线为: 
 * "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
 * 各条对角线上的所有元素均相同, 因此答案是 True 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2],[2,2]]
 * 输出：false
 * 解释：
 * 对角线 "[1, 2]" 上的元素不同。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * 0 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果矩阵存储在磁盘上，并且内存有限，以至于一次最多只能将矩阵的一行加载到内存中，该怎么办？
 * 如果矩阵太大，以至于一次只能将不完整的一行加载到内存中，该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  const m=matrix.length
  const n=matrix[0].length

  // 某点所在对角线上的元素是否全部相等
  const lineEqual=(i,j)=>{
    let v=matrix[i][j]
    while(i<m&&j<n){
      if(matrix[i][j]!==v) return false
      i++
      j++
    }
    return true
  }

  // 0,0
  // 0,1
  // 0,...
  // 0,n-1
  // 1,0
  // 2,0
  // ...,0
  // m-1,0
  for(let i=0;i<n;i++){
    if(!lineEqual(0,i)) return false
  }
  for(let i=0;i<m;i++){
    if(!lineEqual(i,0)) return false
  }
  return true
};
// @lc code=end

