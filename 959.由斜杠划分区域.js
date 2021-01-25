/*
 * @lc app=leetcode.cn id=959 lang=javascript
 *
 * [959] 由斜杠划分区域
 *
 * https://leetcode-cn.com/problems/regions-cut-by-slashes/description/
 *
 * algorithms
 * Medium (67.57%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    6.3K
 * Total Submissions: 8.7K
 * Testcase Example:  '[" /","/ "]'
 *
 * 在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。
 * 
 * （请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。
 * 
 * 返回区域的数目。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * [
 * " /",
 * "/ "
 * ]
 * 输出：2
 * 解释：2x2 网格如下：
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * [
 * " /",
 * "  "
 * ]
 * 输出：1
 * 解释：2x2 网格如下：
 * 
 * 
 * 示例 3：
 * 
 * 输入：
 * [
 * "\\/",
 * "/\\"
 * ]
 * 输出：4
 * 解释：（回想一下，因为 \ 字符是转义的，所以 "\\/" 表示 \/，而 "/\\" 表示 /\。）
 * 2x2 网格如下：
 * 
 * 
 * 示例 4：
 * 
 * 输入：
 * [
 * "/\\",
 * "\\/"
 * ]
 * 输出：5
 * 解释：（回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。）
 * 2x2 网格如下：
 * 
 * 
 * 示例 5：
 * 
 * 输入：
 * [
 * "//",
 * "/ "
 * ]
 * 输出：3
 * 解释：2x2 网格如下：
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length == grid[0].length <= 30
 * grid[i][j] 是 '/'、'\'、或 ' '。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  // 1. 并查集
  // 2. 将每个小格子用个斜杠划分成4个小三角形 上右下左序号为0123
    const n=grid.length
    const uf=new UnionFind(4*Math.pow(n,2))
    grid.forEach((row,i)=>{
      row.split('').forEach((col,j)=>{
        // 第i行第j个格子，前面有i*n+j个格子 0号三角序号是(i*n+j)*4
        // 每个小格 如果是空格 则0123连通
        // 每个小格 如果是/ 则03连通 12连通
        // 每个小格 如果是\\ 则01连通 23连通
        const first=(i*n+j)*4
        if(col==='/'){
          uf.union(first,first+3)
          uf.union(first+1,first+2)
        }else if(col==='\\'){
          uf.union(first,first+1)
          uf.union(first+2,first+3)
        }else{
          uf.union(first,first+1)
          uf.union(first+1,first+2)
          uf.union(first+2,first+3)
        }
  
        // 左右相邻格子 左1右3连通
        if(j<n-1){
          uf.union(first+1,first+7)
        }
        // 上下相邻格子 上2下0连通
        if(i<n-1){
          uf.union(first+2,((i+1)*n+j)*4)
        }
      })
    })
    return uf.getCount()
  };
  
  class UnionFind{
    constructor(n){
      this.parents=Array(n).fill(0).map((e,i)=>i)
      this.ranks=Array(n).fill(0)
    }
    find(x){
      while(x!==this.parents[x]) x=this.parents[x]
      return x
    }
    union(x,y){
      const rootx=this.find(x)
      const rooty=this.find(y)
      if(rootx!==rooty){
        const t=this.ranks[rootx]-this.ranks[rooty]
        if(t<=0){
          this.parents[rootx]=rooty
          if(t===0) this.ranks[rooty]++
        }else{
          this.parents[rooty]=rootx
        }
      }
    }
    getCount(){
      return this.parents.filter((e,i)=>e===i).length
    }
  }
// @lc code=end

