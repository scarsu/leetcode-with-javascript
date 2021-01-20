/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (50.20%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    41.1K
 * Total Submissions: 80.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,3]
 * 输出: 6
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,3,4]
 * 输出: 24
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 
// var maximumProduct = function(nums) {
//   const triMul = (a,b,c)=>a*b*c
//   const mulArr = arr=> triMul(arr[0],arr[1],arr[2])
//   if(nums.length===3) return mulArr(nums)
//   let pos = nums.filter(i=>i>0).sort((a,b)=>b-a)
//   let neg = nums.filter(i=>i<=0).sort((a,b)=>b-a)
//   if(pos.length>=3){
//     let ret=mulArr(pos)
//     if(neg.length>=2){
//       return Math.max(ret, triMul(pos[0],neg[neg.length-2],neg[neg.length-1]))
//     }
//     return ret
//   }else if(pos.length>=1){
//     return triMul(pos[0],neg[neg.length-2],neg[neg.length-1])
//   }else{
//     return triMul(neg[0],neg[1],neg[2])
//   }
// };

// 贪心 
// 结果一定是以下中的一个
// 两个最小数*最大数
// 三个最大数相乘
var maximumProduct = function(nums) {
  nums=nums.sort((a,b)=>a-b)
  let l=nums.length
  let min1=nums[0],min2=nums[1]
  let max1=nums[l-1],max2=nums[l-2],max3=nums[l-3]
  return Math.max(min1*min2*max1,max1*max2*max3)
};
// @lc code=end

