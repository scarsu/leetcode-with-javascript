/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 *
 * https://leetcode-cn.com/problems/longest-turbulent-subarray/description/
 *
 * algorithms
 * Medium (42.44%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    25K
 * Total Submissions: 54.5K
 * Testcase Example:  '[9,4,2,10,7,8,8,1,9]'
 *
 * 当 A 的子数组 A[i], A[i+1], ..., A[j] 满足下列条件时，我们称其为湍流子数组：
 * 
 * 
 * 若 i <= k < j，当 k 为奇数时， A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
 * 或 若 i <= k < j，当 k 为偶数时，A[k] > A[k+1] ，且当 k 为奇数时， A[k] < A[k+1]。
 * 
 * 
 * 也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。
 * 
 * 返回 A 的最大湍流子数组的长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[9,4,2,10,7,8,8,1,9]
 * 输出：5
 * 解释：(A[1] > A[2] < A[3] > A[4] < A[5])
 * 
 * 
 * 示例 2：
 * 
 * 输入：[4,8,12,16]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 输入：[100]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 40000
 * 0 <= A[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  // 滑动窗口
  // flag max left=right=0
  // flag 窗口右1升降序标识
  // true升序 false降序
  const n=arr.length
  if(n<2) return n
  let max=1,left=0,right=0,flag
  while(right<n-1){
    // 判断相等: arr[right]===arr[right+1] 右滑窗口
    if(arr[right]===arr[right+1]){
      right++
      left=right
      flag=undefined
    }else{
      let curFlag = arr[right+1]>arr[right]
      if(flag===undefined){
        // 初始：长度为2的湍流子数组
        flag = curFlag
        max=Math.max(max, 2)
        right++
      }else{
        // 判断翻转: curFlag+flag===1
        if(curFlag+flag===1){
          // 符合条件则更新max 更新flag
          max=Math.max(max, right-left+2)
          flag = curFlag
          right++
        }else{
          // 不符合则 右滑窗口
          left=right
          right++
          flag = curFlag
        }
      }
    }
  }
  return max
};
// @lc code=end

