/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 *
 * https://leetcode-cn.com/problems/reorganize-string/description/
 *
 * algorithms
 * Medium (43.06%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    20.9K
 * Total Submissions: 45.3K
 * Testcase Example:  '"aab"'
 *
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
 * 
 * 若可行，输出任意可行的结果。若不可行，返回空字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: S = "aab"
 * 输出: "aba"
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: S = "aaab"
 * 输出: ""
 * 
 * 
 * 注意:
 * 
 * 
 * S 只包含小写字母并且长度在[1, 500]区间内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// 只要数量最多的字母之间能被剩余字母隔开即可
// 用剩余字母排好序往最多字母中间插空即可
var reorganizeString = function(S) {
  if(S.length===0) return ''
  let ret=''
  let letters=new Array(24).fill(undefined)
  // 出现次数统计
  for(let i=0;i<S.length;i++){
    let idx=S[i].charCodeAt()-'a'.charCodeAt()
    if(letters[idx]===undefined){
      letters[idx]=[S[i],1]
    }else{
      letters[idx][1]++
    }
  }
  // 出现次数降序排序
  letters=letters.filter(i=>i).sort((a,b)=>b[1]-a[1])
  // 数量最多的字母
  let max=letters[0][1]
  let mostLetter = letters[0][0]
  let restLen=S.length-max  // 其他字母的数量
  if(max-1>restLen) return '' // 其他字母不足够给max差缝，则不可行

  // 构造矩阵
  // a a a a a
  // b b b b c
  // c c d d d
  // e e f
  let curLetterIdx=0
  let row=Math.ceil(restLen/max)+1
  let col=restLen%max
  let matrix=new Array(row)
  for(let i=0;i<row;i++){
    matrix[i]=new Array(max).fill('')
    for(let j=0;j<max;){
      let curLetter=letters[curLetterIdx]
      if(curLetter!=undefined && curLetter[1]>0){
        matrix[i][j] = curLetter[0]
        curLetter[1]--
        j++
      }else if(i===row-1 && j===col && col!==0){
        break // 字母已经排完
      }else{
        curLetterIdx++
      }
    }
  }
  // 纵向遍历矩阵
  // a      a     a     a     a
  // b      b     b     b     c
  // c      c     d     d     d
  // e      e     f
  // abce   abce  abdf  abd   acd
  for(let i=0;i<max;i++){
    for(let j=0;j<row;j++){
      ret+=matrix[j][i]
    }
  }
  return ret
};
// @lc code=end

