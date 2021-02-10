/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (37.72%)
 * Likes:    262
 * Dislikes: 0
 * Total Accepted:    62.4K
 * Total Submissions: 155.7K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * 示例1:
 * 
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // 滑动窗口
  let charsALL=Array(26).fill(0)
  for(let i=0;i<s1.length;i++){
    charsALL[s1[i].charCodeAt()-'a'.charCodeAt()]++
  }
  let chars=charsALL.slice()
  const n=s2.length
  let l=0,r=0
  const isDone=()=>{
    return chars.reduce((p,c)=>p+c,0)===0
  }
  while(r<n){
    let ri=s2[r].charCodeAt()-'a'.charCodeAt()
    if(chars[ri]>0){
      chars[ri]--
      if(isDone()) return true
      r++
    }else{
      while(l<r && s2[l]!==s2[r]){
        chars[s2[l].charCodeAt()-'a'.charCodeAt()]++
        l++
      }
      if(s2[l]===s2[r]){
        l++
        r++
      }else{
        l=r+1
        r++
        chars=charsALL.slice()
      }
    }
  }
  return isDone()
};
// @lc code=end

