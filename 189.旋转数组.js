/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (43.46%)
 * Likes:    790
 * Dislikes: 0
 * Total Accepted:    194.5K
 * Total Submissions: 439.6K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  /** 时间O(kn) 空间O(1) */
  // const stepOne = () => {
  //   let last = nums[nums.length-1]
  //   for(let i=nums.length-1;i>0;i--){
  //     nums[i]=nums[i-1]
  //   }
  //   nums[0] = last
  // }
  // for(let i=0;i<k;i++){
  //   stepOne()
  // }
  // return



  /** 时间O(n+k) 空间O(k) */
  // const l = nums.length
  
  // // 边界处理
  // if(k<1) return
  // if(k>l) k=k%l

  // // 先用数组将末尾k个元素存起来
  // const tmp = nums.slice(k)
  // // 再向后移动
  // for(let i=l-1;i>=k;i--){
  //   nums[i] = nums[i-k]
  // }
  // // 再将tmp向头部填充
  // for(let i=0;i<k;i++){
  //   nums[i] = tmp[i]
  // }
  // return


  /** 数组翻转 时间O(n) 空间O(1)*/
  const l = nums.length
  
  // 边界处理
  if(k<1) return
  if(k>l) k=k%l

  const flip = (start=0, end=l-1) => {
    while(start<end){
      let tmp = nums[start]
      nums[start] = nums[end]
      nums[end] = tmp
      start++
      end--
    }
  }
  // 先将数组全部翻转
  flip()
  // 再各自翻转前k个 和 剩余l-k个元素
  flip(0,k-1)
  flip(k)
  return

  /** TODO 循环移位 */
};
// @lc code=end

