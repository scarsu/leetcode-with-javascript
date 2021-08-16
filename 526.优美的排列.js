/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 *
 * https://leetcode-cn.com/problems/beautiful-arrangement/description/
 *
 * algorithms
 * Medium (65.51%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    21.8K
 * Total Submissions: 30.7K
 * Testcase Example:  '2'
 *
 * 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N)
 * 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：
 * 
 * 
 * 第 i 位的数字能被 i 整除
 * i 能被第 i 位上的数字整除
 * 
 * 
 * 现在给定一个整数 N，请问可以构造多少个优美的排列？
 * 
 * 示例1:
 * 
 * 
 * 输入: 2
 * 输出: 2
 * 解释: 
 * 
 * 第 1 个优美的排列是 [1, 2]:
 * ⁠ 第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除
 * 
 * 第 2 个优美的排列是 [2, 1]:
 * ⁠ 第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除
 * 
 * 
 * 说明:
 * 
 * 
 * N 是一个正整数，并且不会超过15。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var countArrangement = function(n) {
//   let ret=0
//   const visit=new Array(n+1).fill(0)
//   // 全排列问题
//   // 回溯
//   const backTrace=(arr)=>{
//       // 得到结果
//       if(arr.length===n){
//           ret++
//           return
//       }
//       for(let i=1;i<=n;i++){
//           // 剪枝  不能重复取元素
//           if(visit[i]===1) continue
//           let idx = arr.length+1
//           if(
//               i%idx===0 ||
//               idx%i===0
//           ){
//               arr.push(i)
//               visit[i]=1
//               backTrace(arr.slice())
//               visit[i]=0
//               arr.pop()
//           }else{
//               // 剪枝   不满足条件
//               continue
//           }
//       }
//   }
//   backTrace([])
//   return ret
// };


// 优化
// 优化前时间46%，空间29%
// 在每一次回溯中，数组的内容对当前状态没有作用，唯一用到的就是数组下一位的索引
// 因此可以优化为传递索引
var countArrangement = function(n) {
  let ret=0
  const visit=new Array(n+1).fill(0)
  // 全排列问题
  // 回溯
  const backTrace=(next)=>{
      // 得到结果
      if(next>n){
          ret++
          return
      }
      for(let i=1;i<=n;i++){
          // 剪枝  不能重复取元素
          if(visit[i]===1) continue
          if(
              i%next===0 ||
              next%i===0
          ){
              visit[i]=1
              backTrace(next+1)
              visit[i]=0
          }else{
              // 剪枝   不满足条件
              continue
          }
      }
  }
  backTrace(1)
  return ret
};
// 优化后时间81%，空间84%
// @lc code=end

