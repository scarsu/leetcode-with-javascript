/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (71.95%)
 * Likes:    2049
 * Dislikes: 0
 * Total Accepted:    504.8K
 * Total Submissions: 701.8K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 不考虑题目 时间/空间复杂度的限制，有几种解法
  // 1. 集合 一次遍历 找到重复数字
  // 2. 哈希表 记录数字出现次数
  // 3. 集合 找到所有出现的数字 求和s1，对原数组求和s2，2*s1-s2即为结果
  // 4. 先排序，再一次遍历 对比相邻元素
  // nums.sort((a,b)=>a-b)
  // for(let i=0;i<nums.length;i+=2){
  //     if(i===nums.length-1) return nums[i]
  //     if(nums[i]!==nums[i+1]) return nums[i]
  // }
  // if(nums.length===1) return nums[0]

  // 题目要求 线性时间复杂度,不使用额外空间
  // 要利用到“异或运算”的性质
  // 1. 任何数和0做异或运算，结果仍然是原来的数，即a⊕0=a
  // 2. 任何数和其自身做异或运算，结果是0，即a⊕a=0
  // 3. 异或运算满足交换律和结合律，即a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b
  // 根据以上三点特性，将原数组所有数进行异或运算，运算结果即为题目结果
  let ret=0
  for(let i=0;i<nums.length;i++){
      ret^=nums[i]
  }
  return ret


};
// @lc code=end

