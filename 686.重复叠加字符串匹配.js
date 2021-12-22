/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 *
 * https://leetcode-cn.com/problems/repeated-string-match/description/
 *
 * algorithms
 * Medium (35.51%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    29.9K
 * Total Submissions: 78K
 * Testcase Example:  '"abcd"\n"cdabcdab"'
 *
 * 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。
 * 
 * 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：a = "abcd", b = "cdabcdab"
 * 输出：3
 * 解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。
 * 
 * 
 * 示例 2：
 * 
 * 输入：a = "a", b = "aa"
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 输入：a = "a", b = "a"
 * 输出：1
 * 
 * 
 * 示例 4：
 * 
 * 输入：a = "abc", b = "wxyz"
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= a.length <= 10^4
 * 1 <= b.length <= 10^4
 * a 和 b 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
//  利用string.repeat()方法
var repeatedStringMatch = function(a, b) {
  const max=Math.ceil(b.length/a.length)
  if(a.repeat(max).includes(b)){
      return max
  }else if(a.repeat(max+1).includes(b)){
      return max+1
  }else{
      return -1
  }
}
//  正则暴力
// var repeatedStringMatch = function(a, b) {
//     // b的结构必定是 a尾部子串(长度可能是0) + 若干个a(可能是0个) + a头部子串(长度可能是0)
//     if(a===b) return 1
//     const match=[...b.matchAll(new RegExp(`(${a})\\1*`,'g'))]
//     if(match.length>0){
//         const left=b.slice(0,match[0].index)
//         const right=b.slice(match[0].index+match[0][0].length,b.length)
//         console.log(left,right)
//         if(
//             new RegExp(left+'$').test(a)
//             && new RegExp('^'+right).test(a)
//         ) return (left?1:0) + match[0][0].replace(new RegExp(a,'g'),'*').length + (right?1:0)
//         return -1
//     }else if(new RegExp(b+'$').test(a) || new RegExp('^'+b).test(a)){
//         return 1
//     }else if(new RegExp(b).test(a)){
//         return 1
//     }else if(isSub(a,b)){
//         return 2
//     }else{
//         return -1
//     }

//     function isSub(a,b){
//         // "abababaaba" "aabaaba"
//         // "aaabbb" "bba"
//         // b的前半截是a的尾部子串
//         // b的后半截是a的头部子串
//         for(let i=0;i<b.length;i++){
//             const left=b.slice(0,i+1)
//             const right=b.slice(i+1,b.length)
//             // if(i===3)console.log(left,right)
//             if(
//                 new RegExp(left+'$').test(a)
//                 && new RegExp('^'+right).test(a)
//             ){
//                 return true
//             }
//         }
//         return false
//     }
// };
// @lc code=end

