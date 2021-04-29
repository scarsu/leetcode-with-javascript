/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (53.05%)
 * Likes:    2202
 * Dislikes: 0
 * Total Accepted:    221.1K
 * Total Submissions: 401.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 方法一
// 对于每个柱子来讲
// 每个柱子加上水的高度=min(左侧最高柱子，右侧最高主子)
// water[i] = min(tallest(0,i), tallest(i,n))
var trap = function(height) {
  const n=height.length
  const tallest=(x,y)=>{
    let max=0
    for(let i=x;i<y;i++){
      max=Math.max(max,height[i])
    }
    return max
  }
  let ret=0
  height.forEach((e,i)=>{
    let min= (i===0||i===n-1) ? 0 : Math.min(tallest(0,i), tallest(i+1,n))
    ret += (min-e >= 0 ? min-e : 0)
  })
  return ret
};


// @lc code=end

