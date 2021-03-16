/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (78.36%)
 * Likes:    334
 * Dislikes: 0
 * Total Accepted:    69.9K
 * Total Submissions: 88.3K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // 按层模拟
  const ret = Array(n).fill(0).map(e=>new Array(n).fill(0))
  const total = n*n
  let top=0,bottom=n-1,left=0,right=n-1
  let cur=1
  while(top<=bottom && left<=right){
    for(let x=left;x<=right;x++){
      ret[top][x] = cur++
    }
    for(let x=top+1;x<=bottom;x++){
      ret[x][right] = cur++
    }
    if(top<bottom && left<right){
      for(let x=right-1;x>=left;x--){
        ret[bottom][x] = cur++
      }
      for(let x=bottom-1;x>=top+1;x--){
        ret[x][left] = cur++
      }
    }
    [left,right,top,bottom]=[left+1,right-1,top+1,bottom-1]
  }
  return ret
};
// @lc code=end

