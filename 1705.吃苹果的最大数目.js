/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 *
 * [1705] 吃苹果的最大数目
 *
 * https://leetcode-cn.com/problems/maximum-number-of-eaten-apples/description/
 *
 * algorithms
 * Medium (34.74%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    13.4K
 * Total Submissions: 32.3K
 * Testcase Example:  '[1,2,3,5,2]\n[3,2,1,4,2]'
 *
 * 有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i]
 * 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且
 * days[i] == 0 表示。
 * 
 * 你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。
 * 
 * 给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]
 * 输出：7
 * 解释：你可以吃掉 7 个苹果：
 * - 第一天，你吃掉第一天长出来的苹果。
 * - 第二天，你吃掉一个第二天长出来的苹果。
 * - 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。
 * - 第四天到第七天，你吃的都是第四天长出来的苹果。
 * 
 * 
 * 示例 2：
 * 
 * 输入：apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
 * 输出：5
 * 解释：你可以吃掉 5 个苹果：
 * - 第一天到第三天，你吃的都是第一天长出来的苹果。
 * - 第四天和第五天不吃苹果。
 * - 第六天和第七天，你吃的都是第六天长出来的苹果。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * apples.length == n
 * days.length == n
 * 1 <= n <= 2 * 10^4
 * 0 <= apples[i], days[i] <= 2 * 10^4
 * 只有在 apples[i] = 0 时，days[i] = 0 才成立
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
//  贪心 暴力 超时TLE
// var eatenApples = function(apples, days) {
//     // 贪心 每一天都选择剩余保质期最短的苹果吃
//     let ret=0
//     const n=apples.length
    
//     let left=[]  // [剩余数量, 剩余保质期]
//     let i=0
//     while(i===0 || i<n || left.length>0){
//         // 添加当日苹果
//         if(apples[i]>0) left.push([apples[i],days[i]])
//         i++

//         // 排序 选择保质期最短的苹果
//         if(left.length>0){
//             left.sort((a,b)=>a[1]-b[1])
//             left[0][0]--
//             ret++
//         }

//         // 剩余苹果保质期-1 删除过保的苹果
//         left=left.map(e=>{
//             e[1]--
//             return e
//         }).filter(e=>{
//             return e[0]>0 && e[1]>0
//         })
//     }
//     return ret
// };


// 优化 哈希表代替数组 照样TLE
// var eatenApples = function(apples, days) {
//     // 贪心 每一天都选择剩余保质期最短的苹果吃
//     let ret=0
//     const n=apples.length
    
//     // 哈希表 key保质期 value拥有该保质期的苹果
//     let leftMap=new Map()

//     let i=0
//     while(i===0 || i<n || leftMap.size>0){
//         // 添加当日苹果
//         if(apples[i]>0){
//             if(!leftMap.has(days[i])){
//                 leftMap.set(days[i], apples[i])
//             }else{
//                 leftMap.set(days[i], apples[i] + leftMap.get(days[i]))
//             }
//         }
//         i++

//         // 排序 选择保质期最短的苹果
//         if(leftMap.size>0){
//             const min=Math.min(...leftMap.keys())
//             leftMap.set(min, leftMap.get(min)-1)
//             ret++
//         }

//         // 剩余苹果保质期-1 删除过保的苹果
//         const newMap=new Map()
//         for(let [k,v] of leftMap){
//             // console.log(k,v)
//             if(k>1 && v>0){
//                 newMap.set(k-1, v)
//             }
//         }
//         leftMap=newMap
//         // console.log(leftMap)
//     }
//     return ret
// }

// 优化 贪心+优先队列
var eatenApples = function(apples, days) {
  // 贪心 每一天都选择剩余保质期最短的苹果吃
  const pq = new PriorityQueue()
  const n = apples.length
  let i = 0, ans = 0
  while(i < n || pq.size > 0){
      while(pq.size > 0 && pq.peek()[0] <= i) pq.poll()
      if(i < n && apples[i] > 0)
          pq.offer([i + days[i], apples[i]])
      if(pq.size > 0){
          ans++
          if(--pq.peek()[1]==0) pq.poll()
      }
      i++
  }
  return ans
}


class PriorityQueue {
constructor(
  compare = (a, b) => a[0] < b[0] 
  ){
  this.data = []
  this.size = 0
  this.compare = compare
}

peek() {
  return this.size === 0 ? null : this.data[0] 
}

offer(val) {
  this.data.push(val)
  this._shifUp(this.size++)
}

poll() {
  if(this.size === 0) { return null }
  this._swap(0, --this.size)
  this._shifDown(0)
  return this.data.pop()
}

_parent(index) {
  return index - 1 >> 1
}

_child(index) {
  return (index << 1) + 1
}

_shifDown(index) {
  while(this._child(index) < this.size) {
    let child = this._child(index)
    if(child + 1 < this.size 
      && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1
    }
    if(this.compare(this.data[index], this.data[child])){
      break
    }
    this._swap(index, child)
    index = child
  }
}

_shifUp(index) {
  while(this._parent(index) >= 0 
  && this.compare(this.data[index], this.data[this._parent(index)])) {
    this._swap(index, this._parent(index))
    index = this._parent(index)
  }
}

_swap(a, b) {
  [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
}
}
// @lc code=end

