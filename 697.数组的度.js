/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 *
 * https://leetcode-cn.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (54.83%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 57.9K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
 * 
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[1, 2, 2, 3, 1]
 * 输出：2
 * 解释：
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：[1,2,2,3,1,4,2]
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums.length 在1到 50,000 区间范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  // 用哈希表找到最大度的数字x（同时记录count,第一次出现的索引,最后一次出现的索引
  // 子数组长度：x最大索引-x最小索引+1
  const map=new Map()
  nums.forEach((e,i)=>{
    if(!map.has(e)){
      map.set(e,[1,i,i])
    }else{
      map.set(e,[map.get(e)[0]+1,map.get(e)[1],i])
    }
  })

  let minLen=0,maxCount=0
  for(let [count,left,right] of map.values()){
    if(count>maxCount){
      minLen=right-left+1
      maxCount=count
    }else if(count===maxCount){
      minLen=Math.min(minLen, right-left+1)
    }
  }

  return minLen
};
// @lc code=end

