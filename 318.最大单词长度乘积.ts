/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (68.34%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 54.1K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j])
 * 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16 
 * 解释: 这两个单词为 "abcw", "xtfn"。
 * 
 * 示例 2:
 * 
 * 
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4 
 * 解释: 这两个单词为 "ab", "cd"。
 * 
 * 示例 3:
 * 
 * 
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0 
 * 解释: 不存在这样的两个单词。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * 1 
 * words[i] 仅包含小写字母
 * 
 * 
 */

// @lc code=start
function maxProduct(words: string[]): number {
  // 位运算
  // 每一个字符串 都可以用26位2进制来表示
  // 判断两个字符串无公共字母：按位与结果=0
  let ret=0
  const wordsBits = words.map(s=>{
      const bits=new Array(26).fill(0)
      for(let i=0;i<s.length;i++){
          bits[s[i].charCodeAt(0)-'a'.charCodeAt(0)]=1
      }
      return parseInt(bits.join(''), 2)
  })
  for(let i=0;i<words.length;i++){
      for(let j=i+1;j<words.length;j++){
          if((wordsBits[i]&wordsBits[j])===0){
              ret=Math.max(ret, words[i].length*words[j].length)
          }
      }
  }
  return ret
};
// @lc code=end

