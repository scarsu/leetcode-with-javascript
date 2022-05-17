/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 *
 * https://leetcode-cn.com/problems/verifying-an-alien-dictionary/description/
 *
 * algorithms
 * Easy (55.30%)
 * Likes:    144
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 41.5K
 * Testcase Example:  '["hello","leetcode"]\n"hlabcdefgijkmnopqrstuvwxyz"'
 *
 * 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
 * 
 * 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回
 * false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * 输出：true
 * 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
 * 
 * 示例 2：
 * 
 * 
 * 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * 输出：false
 * 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
 * 
 * 示例 3：
 * 
 * 
 * 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 * 输出：false
 * 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中
 * '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * order.length == 26
 * 在 words[i] 和 order 中的所有字符都是英文小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // 每两个word之间比较
  const isTwoSorted=(a, b)=>{
      let i=0,j=0
      while(i<a.length && j<b.length){
          const diff=order.indexOf(a[i])-order.indexOf(b[j])
          if(diff<0){
              return true
          }else if(diff===0){
              i++
              j++
          }else{
              return false
          }
      }
      if(i<a.length && j===b.length) return false
      return true
  }
  for(let i=0;i<words.length-1;i++){
      if(!isTwoSorted(words[i], words[i+1])){
          return false
      }
  }
  return true


  // 每个word都表示成一个 二十六进制数字(不行，数值太大)
  // const values = words.map(word=>{
  //     let value=0
  //     let bit=0
  //     for(let i=word.length-1;i>=0;i--){
  //         const cur=order.indexOf(word[i])+1
  //         value+=cur*(26**bit)
  //         bit++
  //     }
  //     return value
  // })
  // console.log(values)
};
// @lc code=end

