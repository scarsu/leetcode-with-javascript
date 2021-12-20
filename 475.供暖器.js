/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 *
 * https://leetcode-cn.com/problems/heaters/description/
 *
 * algorithms
 * Medium (33.03%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 75.2K
 * Testcase Example:  '[1,2,3]\n[2]'
 *
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 * 
 * 在加热器的加热半径范围内的每个房屋都可以获得供暖。
 * 
 * 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
 * 
 * 说明：所有供暖器都遵循你的半径标准，加热的半径也一样。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: houses = [1,2,3], heaters = [2]
 * 输出: 1
 * 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: houses = [1,2,3,4], heaters = [1,4]
 * 输出: 1
 * 解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：houses = [1,5], heaters = [2]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  // 找出 距离heater最远的house
  const m=houses.length
  const n=heaters.length
  houses.sort((a,b)=>a-b)
  heaters.sort((a,b)=>a-b)
  let curHeater=0 // 供暖器指针
  let maxDis=0
  for(let i=0;i<m;i++){
      // 对于每个房屋 要么取其前面的 要么取其后面的加热器
      // 前面的加热器
      while(houses[i]>heaters[curHeater] && curHeater<n-1){
          curHeater++
      }
      let beforeDis=curHeater>0?Math.abs(houses[i]-heaters[curHeater-1]):Number.MAX_SAFE_INTEGER
      let nextDis=Math.abs(houses[i]-heaters[curHeater])
      maxDis=Math.max(maxDis, Math.min(beforeDis, nextDis))
  }
  return maxDis
};
// @lc code=end

