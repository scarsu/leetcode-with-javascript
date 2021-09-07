/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 *
 * https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/description/
 *
 * algorithms
 * Easy (80.26%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    59.8K
 * Total Submissions: 71.7K
 * Testcase Example:  '"RLRRLLRLRL"'
 *
 * 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。
 * 
 * 给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 
 * 注意：分割得到的每个字符串都必须是平衡字符串。
 * 
 * 返回可以通过分割得到的平衡字符串的 最大数量 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "RLRRLLRLRL"
 * 输出：4
 * 解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "RLLLLRRRLR"
 * 输出：3
 * 解释：s 可以分割为 "RL"、"LLLRRR"、"LR" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "LLLLRRRR"
 * 输出：1
 * 解释：s 只能保持原样 "LLLLRRRR".
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "RLRRRLLRLL"
 * 输出：2
 * 解释：s 可以分割为 "RL"、"RRRLLRLL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s[i] = 'L' 或 'R'
 * s 是一个 平衡 字符串
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let ret=0
  let diff=0  // 遇到L+1 遇到R-1
  let i=0
  while(i<s.length){
      diff+=s[i]==='L'?1:-1
      if(diff===0) ret++
      i++
  }
  return ret
};
// @lc code=end

