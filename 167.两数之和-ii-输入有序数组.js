/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (58.65%)
 * Likes:    595
 * Dislikes: 0
 * Total Accepted:    296.2K
 * Total Submissions: 504.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <=
 * answer[0] < answer[1] <= numbers.length 。
 * 
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= numbers.length <= 3 * 10^4
 * -1000 <= numbers[i] <= 1000
 * numbers 按 非递减顺序 排列
 * -1000 <= target <= 1000
 * 仅存在一个有效答案
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 未排序的两数之和，可以使用哈希表一次遍历
  // 时间O(n) 空间O(n)
  // const map=new Map()
  // for(let i=0;i<numbers.length;i++){
  //     let cur=target-numbers[i]
  //     if(map.has(numbers[i])){
  //         return [map.get(numbers[i])+1,i+1]
  //     }else{
  //         map.set(cur, i)
  //     }
  // }

  // 排序的两数之和，再使用上述方法，无法利用到“排序”特性
  // 双指针 夹逼求和 时间O(n) 空间O(1)
  let l=0,r=numbers.length-1
  while(l<r){
      const sum=numbers[l]+numbers[r]
      if(sum===target){
          return [l+1,r+1]
      }else if(sum<target){
          l++
      }else{
          r--
      }
  }
};
// @lc code=end

