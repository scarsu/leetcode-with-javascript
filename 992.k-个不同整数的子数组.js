/*
 * @lc app=leetcode.cn id=992 lang=javascript
 *
 * [992] K 个不同整数的子数组
 *
 * https://leetcode-cn.com/problems/subarrays-with-k-different-integers/description/
 *
 * algorithms
 * Hard (31.62%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    10.4K
 * Total Submissions: 27.6K
 * Testcase Example:  '[1,2,1,2,3]\n2'
 *
 * 给定一个正整数数组 A，如果 A 的某个子数组中不同整数的个数恰好为 K，则称 A 的这个连续、不一定独立的子数组为好子数组。
 * 
 * （例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。）
 * 
 * 返回 A 中好子数组的数目。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1,2,1,2,3], K = 2
 * 输出：7
 * 解释：恰好由 2 个不同整数组成的子数组：[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2],
 * [1,2,1,2].
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [1,2,1,3,4], K = 3
 * 输出：3
 * 解释：恰好由 3 个不同整数组成的子数组：[1,2,1,3], [2,1,3], [1,3,4].
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 20000
 * 1 <= A[i] <= A.length
 * 1 <= K <= A.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// 对于任意一个右端点，能够与其对应的左端点们必然相邻
// 假设对于每个右端点r,符合条件的左端点的区间是(l1,l2)


var subarraysWithKDistinct = function(A, K) {
  const n=A.length
  // r:滑动窗口右端点
  // l1:第一个左指针 满足(l1,r)包含K个不同整数 的最大区间
  // l2:第二个左指针 满足(l2,r)包含K-1个不同整数 的最大区间
  let l1=0,l2=0,r=0,ret=0
  
  // 注意这个条件: 1 <= A[i] <= A.length
  // 可以用一个A.length+1长度的数组 作为哈希表 记录数字A[i]的出现次数
  let num1=Array(n+1).fill(0)
  let num2=Array(n+1).fill(0)

  // 记录不同数字个数
  let distinct1 = 0
  let distinct2 = 0

  // 对于每个r,找出l1和l2,最终结果等于每次l2-l1的汇总
  while(r<n){
    // 记录数字A[r]
    if(num1[A[r]]===0) distinct1++
    num1[A[r]]++
    if(num2[A[r]]===0) distinct2++
    num2[A[r]]++

    // 如果distinct1>K l1需要迭代右移
    while(distinct1>K){
      num1[A[l1]]--
      if(num1[A[l1]]===0) distinct1--
      l1++
    }
    while(distinct2>K-1){
      num2[A[l2]]--
      if(num2[A[l2]]===0) distinct2--
      l2++
    }

    // 累计结果
    ret+=l2-l1

    // r右移
    r++
  }
  return ret
};
// @lc code=end

