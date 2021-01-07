/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// n个城市
// 每个城市只可能属于一个省份
// 矩阵对角线对称 真正需要判断的次数 1+2+...+n-1=(n(n-1))/2
// 1 x x x x
// x 1
// x   1
// x     1
// x       1
var findCircleNum = function(isConnected) {
  let ret=0
  let n=isConnected.length
  let visit=new Array(n).fill(false)
  const dfs = node=>{
    visit[node]=true
    let adjs = isConnected[node]
    for(let i=0;i<adjs.length;i++){
      if(!visit[i] && adjs[i]===1){
        dfs(i)
      }
    }
  }
  const findNext = ()=>{
    let src = visit.findIndex(i=>!i)
    dfs(src)
  }
  while(visit.filter(i=>i).length<n){
    findNext()
    ret++
  }
  return ret
};