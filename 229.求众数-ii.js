/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (46.35%)
 * Likes:    441
 * Dislikes: 0
 * Total Accepted:    42.6K
 * Total Submissions: 88.1K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[3,2,3]
 * 输出：[3]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：[1,1,1,3,3,2,2,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  // 哈希计数 O(n) O(n)
  // const n=nums.length
  // const base=Math.floor(n/3)
  // const map=new Map()
  // for(let i=0;i<n;i++){
  //     if(!map.has(nums[i])){
  //         map.set(nums[i],1)
  //     }else{
  //         map.set(nums[i],map.get(nums[i])+1)
  //     }
  // }
  // return [...map.keys()].filter(i=>map.get(i)>base)

  // 摩尔计数 对拼消耗 O(n) O(1)
  // 169题的摩尔计数 对拼消耗思想，可以用于本题(每次从序列里选择两个不相同的数字删除掉（或称为「抵消」），最后剩下一个数字或几个相同的数字，就是出现次数大于n/2的那个元素。)
  // 但是在本题中，出现次数超过n/3的元素最多有两个
  // 所以需要选取两个元素计数 对拼消耗计数
  if(nums.length===1) return nums

  let ele1,ele2
  let vote1=0,vote2=0
  for(let num of nums){
      if(num===ele1){ // 计数+1
          vote1++
      }else if(num===ele2){   // 计数+1
          vote2++
      }else if(vote1===0){   // 选择ele1开始计数
          vote1=1
          ele1=num
      }else if(vote2===0){   // 选择ele2开始计数
          vote2=1
          ele2=num
      }else{  // 三个数均不相等，对拼消耗
          vote1--
          vote2--
      }
  }

  // 最后剩下的两个数 代表数组中最多的两个数，但是不一定满足其数量>n/3
  // 所以 对数量最多的两个数计数
  let count1=0,count2=0
  for(let num of nums){
      if(vote1>0&&num===ele1) count1++
      if(vote2>0&&num===ele2) count2++
  }

  // 获取结果
  const base=Math.floor(nums.length/3)
  const ret=[]
  if(count1>base) ret.push(ele1)
  if(count2>base) ret.push(ele2)
  return ret
  
};
// @lc code=end

