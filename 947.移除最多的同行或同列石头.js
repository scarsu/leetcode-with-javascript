/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 *
 * https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/description/
 *
 * algorithms
 * Medium (53.50%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    10K
 * Total Submissions: 17.1K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]'
 *
 * n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。
 * 
 * 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。
 * 
 * 给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子
 * 的最大数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
 * 输出：5
 * 解释：一种移除 5 块石头的方法如下所示：
 * 1. 移除石头 [2,2] ，因为它和 [2,1] 同行。
 * 2. 移除石头 [2,1] ，因为它和 [0,1] 同列。
 * 3. 移除石头 [1,2] ，因为它和 [1,0] 同行。
 * 4. 移除石头 [1,0] ，因为它和 [0,0] 同列。
 * 5. 移除石头 [0,1] ，因为它和 [0,0] 同行。
 * 石头 [0,0] 不能移除，因为它没有与另一块石头同行/列。
 * 
 * 示例 2：
 * 
 * 
 * 输入：stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
 * 输出：3
 * 解释：一种移除 3 块石头的方法如下所示：
 * 1. 移除石头 [2,2] ，因为它和 [2,0] 同行。
 * 2. 移除石头 [2,0] ，因为它和 [0,0] 同列。
 * 3. 移除石头 [0,2] ，因为它和 [0,0] 同行。
 * 石头 [0,0] 和 [1,1] 不能移除，因为它们没有与另一块石头同行/列。
 * 
 * 示例 3：
 * 
 * 
 * 输入：stones = [[0,0]]
 * 输出：0
 * 解释：[0,0] 是平面上唯一一块石头，所以不可以移除它。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 i, yi 
 * 不会有两块石头放在同一个坐标点上
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
class UnionFind{
  constructor(n){
    this.parents=Array(n).fill(0).map((e,i)=>i)
    this.ranks=Array(n).fill(0)
  }
  union(x,y){
    let rootx=this.find(x)
    let rooty=this.find(y)
    if(rootx!==rooty){
      let t=this.ranks[rootx]-this.ranks[rooty]
      if(t<=0){
        this.parents[rootx]=rooty
        if(t===0) this.ranks[rooty]++
      }else{
        this.parents[rooty]=rootx
      }
    }
  }
  find(x){
    while(x!==this.parents[x]) x=this.parents[x]
    return x
  }
  // 计算连通分量的个数
  getRootCount(){
    let sum=0
    for(let i=0;i<this.parents.length;i++){
      if(i===this.parents[i]) sum++
    }
    return sum
    // return this.parents.filter((num,i)=>num===i).length
  }
}
var removeStones = function(stones) {
  const uf=new UnionFind(stones.length)
  // 找到所有匹配的石头 合并
  stones.forEach((s,i)=>{
    for(let j=i+1;j<stones.length;j++){
      if(s[0]===stones[j][0] || s[1]===stones[j][1]) uf.union(i,j)
    }
  })
  return stones.length-uf.getRootCount()
};
// @lc code=end

