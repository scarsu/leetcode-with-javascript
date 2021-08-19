/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (51.82%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    85K
 * Total Submissions: 162.2K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："hello"
 * 输出："holle"
 * 
 * 
 * 示例 2：
 * 
 * 输入："leetcode"
 * 输出："leotcede"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 元音字母不包含字母 "y" 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // 元音aeiou
  const isVowel = c=>{
      return /^[aeiouAEIOU]{1}$/.test(c)
  }
  // 双指针
  let i=0
  let j=s.length-1
  const arr=s.split('')
  while(i<j){
      const vi=isVowel(arr[i])
      const vj=isVowel(arr[j])
      if(!vi){
          i++
          continue
      }
      if(!vj){
          j--
          continue
      }
      let tmp=arr[i]
      arr[i]=arr[j]
      arr[j]=tmp
      i++
      j--
  }
  return arr.join('')
};
// @lc code=end

