/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 *
 * https://leetcode-cn.com/problems/longest-repeating-character-replacement/description/
 *
 * algorithms
 * Medium (49.08%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 38.5K
 * Testcase Example:  '"ABAB"\n2'
 *
 * 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k
 * 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
 * 
 * 注意：字符串长度 和 k 不会超过 10^4。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ABAB", k = 2
 * 输出：4
 * 解释：用两个'A'替换为两个'B',反之亦然。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "AABABBA", k = 1
 * 输出：4
 * 解释：
 * 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
 * 子串 "BBBB" 有最长重复字母, 答案为 4。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  // 边界
  if(s.length<=1 || k>=s.length) return s.length

  // 双指针
  // 双指针/滑动窗口 常用于 子串查找问题
  // 通常只需要一次遍历 O(n)时间复杂度
  const n=s.length
  let chars=Array(26).fill(0) //字母计数
  let max=0 // 字母最大出现次数
  let left=0,right=0
  while(right<n){
    // 添加当前right指针的字符
    chars[s[right].charCodeAt()-'A'.charCodeAt()]++
    // 重新计算最大出现次数
    max=Math.max(max, chars[s[right].charCodeAt()-'A'.charCodeAt()])
    // 判断：除了出现次数最多的字符外，剩余字符数量>K,说明k不够替换
    // 则left指针右移，以保证区间长度(即结果)不变
    // 即使left右移一位后，区间内字符串不满足条件，也不影响结果
    // 因为结果要的是 最大的 区间长度
    // 后续只有出现满足条件 且 区间长度更大的情况
    // 才会更新结果
    if(right-left+1-max>k){
      chars[s[left].charCodeAt()-'A'.charCodeAt()]--
      left++
    }
    right++
  }
  return right-left
};
// @lc code=end

