/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (41.86%)
 * Likes:    1033
 * Dislikes: 0
 * Total Accepted:    102.6K
 * Total Submissions: 244.3K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 
 * 
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 * 
 * 
 * 
 * 
 * 
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // 本题是单调栈数据结构的经典例题

  // 首先过一遍暴力解法：
  // 遍历柱子，对每个柱子，向两边遍历/扩散，直到找到比它小的柱子，即可计算面积

  // 单调栈的思路
  // 维护一个单调递增栈，前面加一个height=-1的虚拟节点
    // 栈内要存索引，便于计算宽度
  // 遍历heights，h=heights[i]入栈时
    // 如果h大于栈顶元素，入栈
    // 否则，栈顶元素可以计算面积并出栈了(重复此过程直至栈顶元素<h)
  // 遍历完heights，遍历栈顶：计算面积，弹出，直至栈为空
  let stack=[],max=0
  heights=[0,...heights,0] // 头尾增加两个士兵柱子便于判断
  // 数组的开头即stack[0]作为栈顶
  for(let i=0;i<heights.length;i++){
    while (heights[i] < heights[stack[0]]) { // 当前柱子比栈顶柱子矮
      const topIdx = stack.shift() // 栈顶元素可以计算面积了，出栈
      max = Math.max(
        max,
        heights[topIdx] * (i - stack[0] - 1) // 计算出面积
      )
    }
    stack.unshift(i)  // 入栈
  }
  return max
};
largestRectangleArea([5,4,1,2])
// @lc code=end

