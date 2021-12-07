/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边框着色
 *
 * https://leetcode-cn.com/problems/coloring-a-border/description/
 *
 * algorithms
 * Medium (43.26%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    17K
 * Total Submissions: 31.6K
 * Testcase Example:  '[[1,1],[1,2]]\n0\n0\n3'
 *
 * 给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color
 * 。网格中的每个值表示该位置处的网格块的颜色。
 * 
 * 两个网格块属于同一 连通分量 需满足下述全部条件：
 * 
 * 
 * 两个网格块颜色相同
 * 在上、下、左、右任意一个方向上相邻
 * 
 * 
 * 连通分量的边界 是指连通分量中满足下述条件之一的所有网格块：
 * 
 * 
 * 在上、下、左、右四个方向上与不属于同一连通分量的网格块相邻
 * 在网格的边界上（第一行/列或最后一行/列）
 * 
 * 
 * 请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
 * 输出：[[3,3],[3,2]]
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
 * 输出：[[1,3,3],[2,3,3]]
 * 
 * 示例 3：
 * 
 * 
 * 输入：grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
 * 输出：[[2,2,2],[2,1,2],[2,2,2]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * 1 <= grid[i][j], color <= 1000
 * 0 <= row < m
 * 0 <= col < n
 * 
 * 
 * 
 * 
 */

// @lc code=start
function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
  // 连通分量：相邻 & 颜色相同
  // 连通分量边界：属于连通分量 & (有相邻元素不属于连通分量 || 位于网格边界)

  // dfs找到所有连通分量 顺便标记边界
  const dfs=(x,y)=>{
      if(grid[x][y]!==originColor) return
      if(visited[x][y]) return
      visited[x][y]=true
      let isBorder=false
      // 遍历四个相邻节点
      const nexts=[[0,1],[1,0],[0,-1],[-1,0]]
      for(let i=0;i<4;i++){
          const nx=x+nexts[i][0]
          const ny=y+nexts[i][1]
          // 当前节点[x,y]是边界的条件
          // 1.相邻节点[nx,ny]不属于连通分量
          // 2.当前节点出于网格边界，即nx或ny超出边界
          if(
            grid[nx][ny]!==originColor || nx<0 || nx>=m || ny<0 || ny>=n
          ){
              isBorder=true
          }else{
              // 相邻节点属于连通分量，递归遍历
              dfs(nx,ny)
          }
      }
      if(isBorder) borders.push([x,y])
  }

  const m=grid.length,n=grid[0].length
  const originColor=grid[row][col]
  const visited = new Array(m).fill(0).map(i=>new Array(n).fill(0))
  const borders = []
  dfs(row,col)
  
  // 对边界着色
  for(let b of borders){
      grid[b[0]][b[1]]=color
  }
  return grid
};
// @lc code=end

