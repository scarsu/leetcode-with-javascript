/*
 * @lc app=leetcode.cn id=839 lang=javascript
 *
 * [839] 相似字符串组
 *
 * https://leetcode-cn.com/problems/similar-string-groups/description/
 *
 * algorithms
 * Hard (35.54%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    7.9K
 * Total Submissions: 16.1K
 * Testcase Example:  '["tars","rats","arts","star"]'
 *
 * 如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y
 * 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。
 * 
 * 例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与
 * "tars"，"rats"，或 "arts" 相似。
 * 
 * 总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts"
 * 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。
 * 
 * 给你一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个字母异位词。请问 strs 中有多少个相似字符串组？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["tars","rats","arts","star"]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["omv","ovm"]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * sum(strs[i].length) 
 * strs[i] 只包含小写字母。
 * strs 中的所有单词都具有相同的长度，且是彼此的字母异位词。
 * 
 * 
 * 
 * 
 * 备注：
 * 
 * 字母异位词（anagram），一种把某个字符串的字母的位置（顺序）加以改换所形成的新词。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const n=strs.length
  const uf=new UnionFind(n)
  const isSimilar=(x,y)=>{
    if(x===y) return true
    const l=x.length
    if(x.length!==y.length) return false
    let diff=[]
    for(let i=0;i<l;i++){
      if(x[i]!==y[i]) diff.push(i)
    }
    if(diff.length!==2) return false
    return x[diff[0]]===y[diff[1]] && x[diff[1]]===y[diff[0]]
  }
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      if(!uf.isUnioned(i,j) && isSimilar(strs[i],strs[j])){
        uf.union(i,j)
      }
    }
  }
  return uf.getCount()
};

class UnionFind{
  constructor(n){
    this.parents=Array(n).fill(0).map((e,i)=>i)
    this.ranks=Array(n).fill(0)
  }
  find(x){
    while(x!==this.parents[x]) x=this.parents[x]
    return x
  }
  union(x,y){
    const rootx=this.find(x)
    const rooty=this.find(y)
    if(rootx!==rooty){
      const t=this.ranks[rootx]-this.ranks[rooty]
      if(t>=0){
        this.parents[rootx]=rooty
        if(t===0) this.ranks[rooty]++
      }else{
        this.parents[rooty]=rootx
      }
    }
  }
  isUnioned(x,y){
    return this.find(x)===this.find(y)
  }
  getCount(){
    return this.parents.filter((e,i)=>e===i).length
  }
}
// @lc code=end

