/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.92%)
 * Likes:    1019
 * Dislikes: 0
 * Total Accepted:    153.1K
 * Total Submissions: 207.2K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * 回溯
 * @param n: n个皇后，n×n棋盘
 * @param row number 从0开始: 第n行
 * @param columns Set: 列集合
 * @param diagonals1 Set: -45°斜线集合
 * @param diagonals2 Set: 45°斜线集合
 * @return count 解决方案的数量
 */
const backtrack = (n, row, columns, diagonals1, diagonals2, cur, ret) => {
  if (row === n) {
    // 遍历至row=n时，说明n个皇后在棋盘都找到了互不冲突的位置放置好了，至此得到一种解决方案，return 1
    ret.push(generateMatrixByColumn(cur))
  } else {
      // 在当前row中，遍历0-n列
      for (let i = 0; i < n; i++) {
          if (columns.has(i)) { // 列集合中存在i，说明某一列上已经有皇后
              continue;
          }
          const diagonal1 = row - i; // 用行-列，代表45°斜线的index
          if (diagonals1.has(diagonal1)) {
              continue;
          }
          const diagonal2 = row + i;  // 用行+列，代表45°斜线的index
          if (diagonals2.has(diagonal2)) {
              continue;
          }
          // 如果皇后放在当前格，不与已有的列/斜线冲突
          columns.add(i);
          cur.push(i)
          diagonals1.add(diagonal1);
          diagonals2.add(diagonal2);
          // 按行放置每个皇后
          backtrack(n, row + 1, columns, diagonals1, diagonals2, cur, ret);
          //回溯，恢复上方解决方案在集合中的变更
          //继续遍历下一列 寻找其他解决方案
          columns.delete(i);
          cur.pop()
          diagonals1.delete(diagonal1);
          diagonals2.delete(diagonal2);
      }
  }
}
const generateMatrixByColumn = columns=>{
  const n=columns.length
  const ret=new Array(n).fill(0).map(i=>new Array(n).fill('.'))
  for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
          if(columns[i]===j) ret[i][j]='Q'
      }
  }
  return ret.map(i=>i.join(''))
}
var solveNQueens = function(n) {
  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();
  const ret = []
  backtrack(n, 0, columns, diagonals1, diagonals2, [], ret);
  return ret
};
// @lc code=end

