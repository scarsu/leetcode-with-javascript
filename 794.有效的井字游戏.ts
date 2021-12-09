/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
 *
 * https://leetcode-cn.com/problems/valid-tic-tac-toe-state/description/
 *
 * algorithms
 * Medium (34.04%)
 * Likes:    63
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 35K
 * Testcase Example:  '["O  ","   ","   "]'
 *
 * 给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。
 * 
 * 井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。
 * 
 * 以下是井字游戏的规则：
 * 
 * 
 * 玩家轮流将字符放入空位（' '）中。
 * 玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
 * 'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
 * 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
 * 当所有位置非空时，也算为游戏结束。
 * 如果游戏结束，玩家不允许再放置字符。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = ["O  ","   ","   "]
 * 输出：false
 * 解释：玩家 1 总是放字符 "X" 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = ["XOX"," X ","   "]
 * 输出：false
 * 解释：玩家应该轮流放字符。
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = ["XXX","   ","OOO"]
 * 输出：false
 * 
 * 
 * Example 4:
 * 
 * 
 * 输入：board = ["XOX","O O","XOX"]
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board.length == 3
 * board[i].length == 3
 * board[i][j] 为 'X'、'O' 或 ' '
 * 
 * 
 */

// @lc code=start
function validTicTacToe(board: string[]): boolean {
  // 有效棋局的全部情况：
  // X数量=O数量
      // 游戏未结束
      // 游戏结束，O胜利
  // X数量=O数量+1
      // 游戏未结束
      // 游戏结束，X胜利
  let countO=0
  let countX=0
  let winO=false
  let winX=false
  for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
          let cur=board[i][j]
          if(cur==='O') countO++
          if(cur==='X') countX++
      }
      let x=board[i]
      let y=board[0][i]+board[1][i]+board[2][i]
      if(x==='XXX' || y==='XXX') winX=true
      if(x==='OOO' || y==='OOO') winO=true
  }
  // 对角线
  let diaginol1=board[0][0]+board[1][1]+board[2][2]
  let diaginol2=board[0][2]+board[1][1]+board[2][0]
  if(diaginol1==='OOO' || diaginol2==='OOO') winO=true
  if(diaginol1==='XXX' || diaginol2==='XXX') winX=true

  if(countX===countO){
      return (!winO&&!winX)||(winO&&!winX)
  }else if(countX===countO+1){
      return (!winO&&!winX)||(!winO&&winX)
  }else{
      return false
  }
};
// @lc code=end

