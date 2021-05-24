/*
 * @lc app=leetcode.cn id=664 lang=javascript
 *
 * [664] 奇怪的打印机
 *
 * https://leetcode-cn.com/problems/strange-printer/description/
 *
 * algorithms
 * Hard (48.06%)
 * Likes:    131
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 12.3K
 * Testcase Example:  '"aaabbb"'
 *
 * 有台奇怪的打印机有以下两个特殊要求：
 * 
 * 
 * 打印机每次只能打印由 同一个字符 组成的序列。
 * 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
 * 
 * 
 * 给你一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aaabbb"
 * 输出：2
 * 解释：首先打印 "aaa" 然后打印 "bbb"。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "aba"
 * 输出：2
 * 解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 动态规划
// f[i][j] 表示[i,j]区间内 最少打印的次数，i<=j
// 状态转移方程：
//  如果s[i]=s[j], f[i][j]=f[i][j-1]
//    （无后效性:每个状态需要依赖j-1状态的值，因此j要从小到大遍历
//  如果s[i]!=s[j]，将[i,j]区间拆分两半[i,k],[k+1,j]，k要从i到j-1遍历，f[i][j]=min(f[i][k] + f[k+1][j])
//    （无后效性:每个状态需要依赖[k][j]的值(k>i)，因此i要从小到大遍历
// 临界点：i=j，即f[i][i]=1

var strangePrinter = function(s) {
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {  // 从大到小遍历i
    f[i][i] = 1;
    for (let j = i + 1; j < n; j++) { // 从小到大遍历j
      if (s[i] == s[j]) {
        f[i][j] = f[i][j - 1];
      } else {
        let minn = Number.MAX_SAFE_INTEGER;
        for (let k = i; k < j; k++) { // 将[i,j]区间从k处拆分两半，找出使结果最小的k
          minn = Math.min(minn, f[i][k] + f[k + 1][j]);
        }
        f[i][j] = minn;
      }
    }
  }
  return f[0][n - 1];
};
// @lc code=end

