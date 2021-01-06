/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 *
 * https://leetcode-cn.com/problems/evaluate-division/description/
 *
 * algorithms
 * Medium (55.16%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    20.6K
 * Total Submissions: 35.8K
 * Testcase Example:  '[["a","b"],["b","c"]]\n[2.0,3.0]\n[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
 *
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和
 * values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj
 * = ? 的结果作为答案。
 * 
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。
 * 
 * 
 * 
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries =
 * [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * 解释：
 * 条件：a / b = 2.0, b / c = 3.0
 * 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
 * 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0],
 * queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
 * 输出：[3.75000,0.40000,5.00000,0.20000]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：equations = [["a","b"]], values = [0.5], queries =
 * [["a","b"],["b","a"],["a","c"],["x","y"]]
 * 输出：[0.50000,2.00000,-1.00000,-1.00000]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * equations[i].length == 2
 * 1 i.length, Bi.length 
 * values.length == equations.length
 * 0.0 < values[i] 
 * 1 
 * queries[i].length == 2
 * 1 j.length, Dj.length 
 * Ai, Bi, Cj, Dj 由小写英文字母与数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

// 1.
// 注意审题：每个 Ai 或 Bi 是一个表示单个变量的字符串。
// 即a/b  ac/bc是两个不同的字符串对
// 不用考虑公因子

// 2.
// equations, values最适合的数据结构是有向图
// 应该考虑倒数，因此是双向有向图

var calcEquation = function(equations, values, queries) {

  // 用邻接表来实现有向图
  // map{point1:[[point2,value]]}
  // 其中point是字符串，value是point1/point2的商
  let map = new Map()
  equations.forEach((pair,i)=>{
    const [a,b] = pair,v=values[i]
    if(!map.has(a)){
      map.set(a,[[b,v]])
    }else{
      map.set(a,[...map.get(a),[b,v]])
    }
    // 倒数
    if(!map.has(b)){
      map.set(b,[[a,1/v]])
    }else{
      map.set(b,[...map.get(b),[a,1/v]])
    }
  })

  // 深度优先遍历
  let visit = new Map() // 用visit标识避免访问的节点重复 或死循环
  const dfs = (src, des) => {
    // 找到了des返回1
    if(src===des) return 1

    // 遍历邻接表 能达到des 返回边权的乘积
    let adjs = map.get(src)
    for(let i=0;i<adjs.length;i++){
      let [node, val] = adjs[i]
      if(!visit.get(node)){
        visit.set(node, true)
        let ret = dfs(node, des)
        visit.set(node, false)
        if(ret!==-1) return val*ret
      }
    }
    
    // 遍历完也没找到返回-1
    return -1
  }

  let ret = []
  for(let pair of queries){
    const [a,b] = pair
    if(map.has(a) && map.has(b)){
      visit.set(a,true)
      ret.push(dfs(a,b))
      visit.set(a,false)
    }else{
      ret.push(-1)
    }
  }
  return ret
};
// @lc code=end

