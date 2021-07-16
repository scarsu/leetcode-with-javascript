/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (40.55%)
 * Likes:    747
 * Dislikes: 0
 * Total Accepted:    182K
 * Total Submissions: 435.1K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// log n首先想到二分法
// 思路 伪代码
/*
  if(nums[mid]<target){
    // 搜索[mid+1,r]
  }
  if(nums[mid]>target){
    // 搜索[l,mid-1]
  }
  if(nums[mid]===target){
    // 左边界一定在[l,mid]之间
    // 右边界一定在[mid+1,r]之间
    // 此时，开始位置和结束位置有可能在两边，不便于继续循环
    // 因此可以将左边界和右边界分开搜索
  }
  // 搜索左边界
  if(nums[mid]>=target){
    // 搜索[l,mid]
  }else if(nums[mid]<target){
    // 搜索[mid+1,r]
  }
  // 搜索右边界
  if(nums[mid]<=target){
    // 搜索[mid,r]
  }else if(nums[mid]>target){
    // 搜索[l,mid-1]
  }
*/

// var searchRange = function(nums, target) {
//   let ret = [-1,-1]
//   if(nums.length === 0) return ret

//   // 左
//   let l=0,r=nums.length-1
//   while(l<r) {
//     let mid = Math.floor((l+r)/2)
//     if(nums[mid]>=target){
//       r=mid
//     }else{
//       l=mid+1
//     }
//     // 循环结束left=mid=right-1
//   }
//   if(nums[l]===target){
//     ret[0]=l
//   }

//   //右
//   l=0,r=nums.length-1
//   while(l<r) {
//     let mid = Math.ceil((l+r)/2)
//     // 下取整可能导致死循环 [1,2,3]->[2,3]->[2,3]->...
//     // 上取整没问题 [1,2,3]->[2,3]->[2,3]->...
//     if(nums[mid]<=target){
//       l=mid
//     }else{
//       r=mid-1
//     }
//     // 循环结束left=mid=right-1
//   }
//   if(nums[l]===target){
//     ret[1]=l
//   }

//   return ret
// };

/* 总结
1. log n的题，第一反应就是二分

2. 二分的套路 就是不断判断mid和target关系，然后重新定义搜索区间为[l,mid]或[mid,r]，要特别注意的是，mid中间值的求法：
  - 上取整Math.ceil((l+r)/2) 还是 下取整Math.floor((l+r)/2)
  - 取决于区间重新定义的行为
  - 可以先写出区间重新定义的逻辑，再使用[1,2,3]数组简单演练即可
  - 如果用反了，会导致死循环

3. 范围/区间查找，分解成左右边界分别查找
*/



// 二刷
var searchRange = function(nums, target) {
  // 已排序，用二分
  // 两次二分，一次查找target第一个出现的位置，一次查找第一个大于target的位置
  // 为了代码复用，定义一个通用的binarySearch
  // lower true:查找第一个>target
  // lower false:查找第一个>=target
  const binarySearch = (nums, target, lower)=>{
      let left=0,right=nums.length-1
      let ret=nums.length
      while(left<=right){
          let mid=Math.floor((right+left)/2)
          if(nums[mid]>target || (lower&&nums[mid]>=target)){
              right=mid-1
              ret=mid
          }else{
              left=mid+1
          }
      }
      return ret
  }
  let leftIdx=binarySearch(nums,target,true)
  let rightIdx=binarySearch(nums,target)-1
  if(
      rightIdx>=leftIdx &&
      nums[leftIdx]===target &&
      nums[rightIdx]===target &&
      rightIdx<nums.length
  ){
      return [leftIdx,rightIdx]
  }
  return [-1,-1]
};

// @lc code=end

