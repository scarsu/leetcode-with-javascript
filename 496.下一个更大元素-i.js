/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode-cn.com/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (68.74%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    126.5K
 * Total Submissions: 180.6K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 * 
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * 
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 解释:
 * ⁠   对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
 * ⁠   对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
 * ⁠   对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出: [3,-1]
 * 解释:
 * 对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
 * ⁠   对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 哈希表
  // const nums2NextMap=new Map()
  // nums2.forEach((e,i)=>{
  //     for(let j=i+1;j<nums2.length;j++){
  //         if(nums2[j]>e){
  //             nums2NextMap.set(e,nums2[j])
  //             return
  //         }
  //     }
  //     nums2NextMap.set(e,-1)
  // })
  // return nums1.map(e=>nums2NextMap.get(e))

  // 单调栈+哈希表
  const n=nums2.length
  const nums2NextMap=new Map()
  let stack=[]
  // 从后向前遍历nums2
  for(let i=n-1;i>=0;i--){
      let cur=nums2[i]

      // 维护单调栈
      while(stack.length>0 && stack[0]<cur){
          stack.shift()
      }
      nums2NextMap.set(cur, stack[0]||-1)
      stack.unshift(cur)
  }
  return nums1.map(e=>nums2NextMap.get(e))
};
// @lc code=end

