/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones-iii/description/
 *
 * algorithms
 * Medium (54.62%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    25.8K
 * Total Submissions: 44.1K
 * Testcase Example:  '[1,1,1,0,0,0,1,1,1,1,0]\n2'
 *
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * 
 * 返回仅包含 1 的最长（连续）子数组的长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * 输出：6
 * 解释： 
 * [1,1,1,0,0,1,1,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
 * 
 * 示例 2：
 * 
 * 输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * 输出：10
 * 解释：
 * [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 20000
 * 0 <= K <= A.length
 * A[i] 为 0 或 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  // 滑动窗口
  const n = A.length
  let left = 0, right = 0 // 滑动窗口指针left right
  let lsum = 0, rsum = 0 // 分别记录left right指针对应的前缀和
  let ret = 0
  while(right<n){
    rsum += 1 - A[right]  // 维护前缀和，1-A[right] 是为了翻转0,1，便于与K比较
    while (lsum < rsum - K) {
      lsum += 1 - A[left] // 移动left指针
      ++left
    }
    ret = Math.max(ret, right - left + 1)
    right++
  }
  return ret
};
// @lc code=end

