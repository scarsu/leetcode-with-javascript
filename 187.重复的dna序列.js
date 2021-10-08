/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 *
 * https://leetcode-cn.com/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (48.36%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    46.8K
 * Total Submissions: 95K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA
 * 中的重复序列有时会对研究非常有帮助。
 * 
 * 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出：["AAAAACCCCC","CCCCCAAAAA"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "AAAAAAAAAAAAA"
 * 输出：["AAAAAAAAAA"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s[i] 为 'A'、'C'、'G' 或 'T'
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const n=s.length

  if(n<10) return []

  const ret=new Set()
  const set=new Set()
  for(let i=0;i<n-9;i++){
      const cur=s.substr(i,10)
      if(set.has(cur)){
          ret.add(cur)
      }else{
          set.add(cur)
      }
  }
  return [...ret]
};
// @lc code=end

