/*
 * @lc app=leetcode.cn id=1218 lang=javascript
 *
 * [1218] 最长定差子序列
 *
 * https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference/description/
 *
 * algorithms
 * Medium (42.11%)
 * Likes:    150
 * Dislikes: 0
 * Total Accepted:    27.5K
 * Total Submissions: 54.9K
 * Testcase Example:  '[1,2,3,4]\n1'
 *
 * 给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于
 * difference 。
 * 
 * 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：arr = [1,2,3,4], difference = 1
 * 输出：4
 * 解释：最长的等差子序列是 [1,2,3,4]。
 * 
 * 示例 2：
 * 
 * 
 * 输入：arr = [1,3,5,7], difference = 1
 * 输出：1
 * 解释：最长的等差子序列是任意单个元素。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
 * 输出：4
 * 解释：最长的等差子序列是 [7,5,3,1]。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 
 * 
 */

// @lc code=start
function longestSubsequence(arr: number[], difference: number): number {
  // 1.先思考暴力思路
      // 以第i位为开头的满足条件子序列:
          // next[0]=arr[i]
          // 其后每一位的值是固定的:next=next[i-1]+diff
          // 记录所有子序列，找出最长的
      // 外层遍历i 范围0~n
      // 内层遍历i+1~n
      // 时间复杂度 O(n^2) 会超时
  // const n=arr.length
  // if(n===1) return 1
  // let max=0
  // for(let i=0;i<n;i++){
  //     let cur=arr[i]
  //     let length=1
  //     for(let j=i+1;j<n;j++){
  //         if(arr[j]===cur+difference){
  //             length++
  //             cur+=difference
  //         }
  //     }
  //     max=Math.max(max,length)
  // }
  // return max

  // 2.动态规划
  // 设子串0~i中 满足条件的最大子序列长度为dp[i]
  // dp[arr[i]]=dp[arr[i]-d]+1
  // 转换思路 不要想到动态规划就设dp为数组，dp也可以是哈希表，
  // 数组dp 适合解决 能列出dp[i]&dp[i-1]方程的问题
  // 其他场景 例如 本题的dp[v]&dp[v-d] 更适合于哈希表dp
  const n=arr.length
  if(n===1) return 1
  const dp=new Map()
  let max=1
  for(let i=0;i<n;i++){
      dp.set(arr[i], (dp.get(arr[i]-difference)||0) + 1)
      max=Math.max(max, dp.get(arr[i]))
  }
  return max
};
// @lc code=end

