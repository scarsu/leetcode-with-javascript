/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 *
 * https://leetcode-cn.com/problems/reverse-pairs/description/
 *
 * algorithms
 * Hard (29.32%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 45.1K
 * Testcase Example:  '[1,3,2,3,1]'
 *
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 
 * 你需要返回给定数组中的重要翻转对的数量。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,3,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,4,3,5,1]
 * 输出: 3
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数组的长度不会超过50000。
 * 输入数组中的所有数字都在32位整数的表示范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力O(N^2) nums长度范围50000 估计会超时
// var reversePairs = function(nums) {
//   let ret=0
//   for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//       if(nums[i]>2*nums[j]) ret++
//     }
//   }
//   return ret
// };

// 归并排序
// 归并的核心是 先拆分，再依序合并
var reversePairs = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return reversePairsRecursive(nums, 0, nums.length - 1);
};

const reversePairsRecursive = (nums, left, right) => {
  if (left === right) {
    return 0;
  } else {
    // 区间分两半
    const mid = Math.floor((left + right) / 2);
    // 找出两部分各自的符合条件的数量
    const n1 = reversePairsRecursive(nums, left, mid);
    const n2 = reversePairsRecursive(nums, mid + 1, right);
    let ret = n1 + n2;

    // 找出 i在[left,mid) j在[mid,right] 范围内符合条件的数量
    let i = left;
    let j = mid + 1;
    while (i <= mid) {
      while (j <= right && nums[i] > 2 * nums[j]) {
        j++;
      }
      ret += j - mid - 1;
      i++;
    }

    // sorted：排序合并left和right
    const sorted = new Array(right - left + 1);
    let p1 = left, p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = nums[p2++];
      } else if (p2 > right) {
        sorted[p++] = nums[p1++];
      } else {
        if (nums[p1] < nums[p2]) {
          sorted[p++] = nums[p1++];
        } else {
          sorted[p++] = nums[p2++];
        }
      }
    }
    for (let k = 0; k < sorted.length; k++) {
      nums[left + k] = sorted[k];
    }
    return ret;
  }
}
// @lc code=end

