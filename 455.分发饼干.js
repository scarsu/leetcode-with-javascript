/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 *
 * https://leetcode-cn.com/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (56.03%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    70.9K
 * Total Submissions: 124.9K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >=
 * g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: g = [1,2,3], s = [1,1]
 * 输出: 1
 * 解释: 
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释: 
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 贪心
  // 先对g升序排序，从胃口小的开始满足，能保证满足的尽量多
  // 对于每个g[i]去找到s中最小能满足的s[j]
  // g=g.sort((a,b)=>a-b)
  // s=s.sort((a,b)=>a-b)
  // let i=0
  // let rest=new Array(s.length).fill(1)
  // while(i<g.length){
  //   let j=s.findIndex((e,j)=>e>=g[i]&&rest[j]===1)
  //   if(j>=0){
  //     rest[j]=0 // 找到了，剩余标志0
  //     i++
  //   }else{
  //     break // 找不到，跳出
  //   }
  // }
  // return i

  // 双指针  
  g=g.sort((a,b)=>a-b)
  s=s.sort((a,b)=>a-b)
  let i=0,j=0,max=s[s.length-1]
  while(i<g.length && j<s.length){
    if(g[i]<=s[j]){
      i++
      j++
    }else if(g[i]>max){
      break
    }else {
      j++
    }
  }
  return i
};
// @lc code=end

