/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 *
 * https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (42.64%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    7.1K
 * Total Submissions: 15.3K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。
 * 
 * 如果可以完成上述分割，则返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: [1,2,3,3,4,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3
 * 3, 4, 5
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入: [1,2,3,3,4,4,5,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入: [1,2,3,4,4,5]
 * 输出: False
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入的数组长度范围为 [1, 10000]
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 遍历数组中某个数x时，
// 先判断存不存在以x-1结尾的在子序列
  // 若存在一个，则在该子序列后添加x
  // 若存在多个，则选择长度最小的子序列，添加x
  // 若不存在，则以x为头，新建一个子序列

// 上述过程，最合适的数据结构：哈希表+最小堆
// {key(子序列末尾数字) : value(以key为结尾的长度最小的子序列))}

// 用数组来代替最小堆
var isPossible = function(nums) {
  let map=new Map()
  for(let i=0;i<nums.length;i++){
    let x=nums[i]
    if(!map.has(x-1) || map.get(x-1).length===0){
      let arr=map.has(x) ? map.get(x) : []
      map.set(x,arr.concat(1))
    } else{
      let arrPrev=map.get(x-1).sort((a,b)=>a-b)  // 存在 取最小数
      let min=arrPrev.shift() // 从x-1中删除最小数字
      map.set(x-1,arrPrev) // 从x-1中删除最小数字
      let arr=map.has(x) ? map.get(x) : [] // 获取x子序列
      map.set(x,arr.concat(min+1)) // x子序列中加入刚才的min+1
    }
  }
  // 判断map每个value数组中数字>=3
  for(let arr of map.values()){
    for(let i=0;i<arr.length;i++){
      if(arr[i]<3) return false
    }
  }
  return true
};
// @lc code=end

