/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode-cn.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Medium (68.51%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    48.7K
 * Total Submissions: 70.5K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 
 * 
 * 示例：
 * 输入：S = "a1b2"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入：S = "3z4"
 * 输出：["3z4", "3Z4"]
 * 
 * 输入：S = "12345"
 * 输出：["12345"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S 的长度不超过12。
 * S 仅由数字和字母组成。
 * 
 * 
 */

// @lc code=start
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const target=licensePlate.replace(/[0-9 ]/g,'').toLowerCase()
  const count=new Array(26).fill(0)
  for(let c of target){
      count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
  }

  let min=Number.MAX_SAFE_INTEGER
  let ret
  for(let word of words){
      const curCount=new Array(26).fill(0)
      for(let c of word){
          curCount[c.charCodeAt(0)-'a'.charCodeAt(0)]++
      }

      let isComplete=true
      for(let i=0;i<26;i++){
          if(count[i]>curCount[i]){
              isComplete=false
              break
          }
      }
      if(isComplete && word.length<min){
          ret=word
          min=word.length
      }
  }
  return ret
};
// @lc code=end

