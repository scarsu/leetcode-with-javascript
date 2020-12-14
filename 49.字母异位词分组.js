/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (63.90%)
 * Likes:    550
 * Dislikes: 0
 * Total Accepted:    129.1K
 * Total Submissions: 200.4K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 哈希 质数乘积唯一
var groupAnagrams = function(strs) {
  let map=new Map(),ret=[]
  const primes = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n, 101n]
  strs.forEach(s=>{
    let score = 1n
    for(let i=0;i<s.length;i++){
      score*=primes[s[i].charCodeAt(0)-'a'.charCodeAt(0)]
    }
    if(!map.has(score)) map.set(score,[])
    map.get(score).push(s)
  })
  for(let i of map.values()){
    ret.push(i)
  }
  return ret
};
// @lc code=end

