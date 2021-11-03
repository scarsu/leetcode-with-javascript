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
function trap(height: number[]): number {
  // 对于柱子i，最大接水高度取决于min(max左边柱子, max右边柱子)
  
  // 1.对每个柱子两边进行扫描，分别找出最大高度
      // 双层遍历，时间复杂度O(n^2)
      // 空间复杂度O(1)

  // 2.动态规划，时间复杂度O(n)
      // 从前向后扫面height数组，维护leftMax数组，leftMax[i]代表柱子i左边最大高度
      // leftMax[0]=height[0]
      // leftMax[i]=max(leftMax[i-1], height[i])
      // 同理维护rightMax数组
      // rightMax[n-1]=height[n-1]
      // rightMax[i]=max(rightMax[i+1],height[i])
      // 时间复杂度O(n)，三次遍历 21%
      // 空间复杂度O(n)，维护两个长度n数组 47%
  // const n=height.length
  // const leftMax:number[]=new Array(n).fill(0)
  // leftMax[0]=height[0]
  // for(let i=1;i<n;i++){
  //     leftMax[i]=Math.max(leftMax[i-1],height[i])
  // }
  // const rightMax:number[]=new Array(n).fill(0)
  // rightMax[n-1]=height[n-1]
  // for(let i=n-2;i>=0;i--){
  //     rightMax[i]=Math.max(rightMax[i+1],height[i])
  // }
  // return height.reduce((p,c,i)=>{
  //     return p + Math.min(leftMax[i],rightMax[i]) - c
  // },0)

  // 3.单调栈
      // 维护一个单调递减栈
          // 栈中元素是height数组下标
          // 满足从栈底到栈顶下标对应的height递减
          // 当前遍历的元素如果不满足递减 那么不断将栈顶元素出栈 直到满足递减后 将当前元素入栈
      // 理解：
          // 只有凹陷处能存水，凹陷也就是高度先减后增
          // 在遍历到“增”的位置时，前面减的地方一定能储水
          // 那么 将凹陷处出栈，可以计算出部分储水量：
          // 当前遍历的元素下标是i，当前栈顶top是凹陷处，top下的元素left
          // 有 height[left]>height[top]<height[i]
          // 储水量 = 宽(i-left-1) * 高( min(height[i],height[left]) - height[top])
          // 要不断将top出栈 并计算储水量，
          // 直到栈顶元素top和i满足递减
      // 时间复杂度O(n) n个元素中每个最多出栈、入栈一次 89%
      // 空间复杂度O(n) 单调栈数组最大长度n 30%
  // const stack:number[]=[]
  // const n=height.length
  // let ret=0
  // for(let i=0;i<n;i++){
  //     while(stack.length && height[i]>height[stack[stack.length-1]]){
  //         const top=stack.pop()
  //         if(!stack.length) break
  //         const left=stack[stack.length-1]
  //         ret+= (i-left-1) * (Math.min(height[left], height[i]) - height[top])
  //     }
  //     stack.push(i)
  // }
  // return ret

  // 4.双指针
      // 没看懂题解..我是傻批






};
// @lc code=end

