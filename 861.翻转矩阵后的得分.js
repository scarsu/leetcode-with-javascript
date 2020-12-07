/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 *
 * https://leetcode-cn.com/problems/score-after-flipping-matrix/description/
 *
 * algorithms
 * Medium (74.53%)
 * Likes:    125
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 16.3K
 * Testcase Example:  '[[0,0,1,1],[1,0,1,0],[1,1,0,0]]'
 *
 * 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
 * 
 * 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
 * 
 * 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
 * 
 * 返回尽可能高的分数。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
 * 输出：39
 * 解释：
 * 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
 * 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 20
 * 1 <= A[0].length <= 20
 * A[i][j] 是 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const moveRow=(idx)=>{
    A[idx].forEach((e,i)=>A[idx][i]=~A[idx][i]+2)
  }
  const moveCol=(idx)=>{
    A.forEach((e,i)=>A[i][idx]=~A[i][idx]+2)
  }

  const row=A.length
  const col=A[0].length
  // 保证每行第一个是1
  A.forEach((e,idx)=>{
    if(e[0]===0) moveRow(idx)
  })

  // 保证第二列以及之后的每列中 1的个数不少于0
  for(let i=1;i<col;i++){
    if(A.filter(e=>e[i]===1).length<row/2) moveCol(i)
  }

  // 计算分数
  return A.map(e=>parseInt(e.join(''),2)).reduce((prev,cur)=>prev+cur,0)
};
// @lc code=end

