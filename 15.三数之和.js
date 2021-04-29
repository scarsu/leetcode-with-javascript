/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (29.98%)
 * Likes:    3290
 * Dislikes: 0
 * Total Accepted:    495.9K
 * Total Submissions: 1.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
var threeSum = function(nums) {

  // 排序(便于去重)
  nums.sort((a,b)=>a-b)
  
  const n=nums.length
  const ret=[]

  // 外层循环 遍历nums
  for(let i=0;i<n-2;i++){
    // 如果外层循环的数>0，后面的数都>0，无解，直接返回
    if(nums[i]>0) break

    // 外层循环去重
    if(i>0 && nums[i]===nums[i-1]){
      continue
    }

    // 内层循环 双指针 夹逼求和（注意去重）
    let l=i+1
    let r=n-1
    while(l<r){
      // 求和
      let sum=nums[l]+nums[r]+nums[i]
      if(sum===0){
        // 得到一个解
        ret.push([nums[i],nums[l],nums[r]])
        // 移动两端指针(去重)
        while(nums[l]===nums[l+1]) l++
        while(nums[r]===nums[r-1]) r--
        l++
        r--
      }else if(sum<0){
        // 和偏小 右移左指针
        l++
      }else{
        // 和偏大 左移右指针
        r--
      }
    }
  }
  return ret
};
// @lc code=end

