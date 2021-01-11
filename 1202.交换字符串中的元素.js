/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 *
 * https://leetcode-cn.com/problems/smallest-string-with-swaps/description/
 *
 * algorithms
 * Medium (34.47%)
 * Likes:    158
 * Dislikes: 0
 * Total Accepted:    14.7K
 * Total Submissions: 31.4K
 * Testcase Example:  '"dcab"\n[[0,3],[1,2]]'
 *
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0
 * 开始）。
 * 
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入：s = "dcab", pairs = [[0,3],[1,2]]
 * 输出："bacd"
 * 解释： 
 * 交换 s[0] 和 s[3], s = "bcad"
 * 交换 s[1] 和 s[2], s = "bacd"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "dcab", pairs = [[0,3],[1,2],[0,2]]
 * 输出："abcd"
 * 解释：
 * 交换 s[0] 和 s[3], s = "bcad"
 * 交换 s[0] 和 s[2], s = "acbd"
 * 交换 s[1] 和 s[2], s = "abcd"
 * 
 * 示例 3：
 * 
 * 输入：s = "cba", pairs = [[0,1],[1,2]]
 * 输出："abc"
 * 解释：
 * 交换 s[0] 和 s[1], s = "bca"
 * 交换 s[1] 和 s[2], s = "bac"
 * 交换 s[0] 和 s[1], s = "abc"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * 0 <= pairs.length <= 10^5
 * 0 <= pairs[i][0], pairs[i][1] < s.length
 * s 中只含有小写英文字母
 * 
 * 
 */

// @lc code=start
/**
 * 并查集类
 */
class UnionFind {
  constructor (n) {
      this.parents = new Uint32Array(n) // parents[i]是 索引i节点 的树根节点
      this.ranks = new Uint32Array(n)  // ranks[i]是 索引i节点 在其集合树中的深度
      while (n--) this.parents[n] = n 
  }
  // 合并x,y节点所在集合
  union (x, y) {
      const rootX = this.find(x), rootY = this.find(y)
      if (rootX !== rootY) { // x,y属于不同集合,需要合并
          const t = this.ranks[rootX] - this.ranks[rootY]
          if (t <= 0) { //rooty比rootx深
              this.parents[rootX] = rootY // 将rootx的父节点设置为rooty
              if (t === 0) this.ranks[rootY]++  // 如果深度相同,rooty的深度需要+1
          } else //rootx比rooty深
              this.parents[rootY] = rootX // 将rooty的父节点设置为rootx
      }
  }
  // 查找x节点所在的根
  find (x) {
      while (x !== this.parents[x]) x = this.parents[x]
      return x
  }
  // 并查集树结构 转 map
  // 存分类的集合 key是每个集合根节点的索引 value是所有集合元素
  getMap(){
    let m = new Map,n=this.parents.length,i=0
    while (i < n) {
      const rootI = this.find(i)
      if (!m.has(rootI)) m.set(rootI, [])
      m.get(rootI).push(i)
      i++
    }
    return m
  }
}

/**
* @param {string} s
* @param {number[][]} pairs
* @return {string}
*/
var smallestStringWithSwaps = function(s, pairs) {
// 包含重复节点的pairs,其交换有传递性，01&12=>012可以随意交换
// 所以需要合并pairs：找出同属于一个'可交换组'的所有字符，例如上述的012是一组
// 符合并查集特性
// 把每个'可交换字符组'按照字符的 ASCII 值升序排序即可
let n = s.length,
  unionFind = new UnionFind(n), 
  i = pairs.length, 
  r = Array(n)

// 并查集操作：合并集合
while (i--) unionFind.union(pairs[i][0], pairs[i][1])

// 并查集树结构 转 map
map = unionFind.getMap()

// 排序
map.forEach(v => {
    const n = v.slice().sort((a, b) => s.charCodeAt(a) - s.charCodeAt(b))
    for (let j = 0; j < v.length; j++) r[v[j]] = s[n[j]]
})
return r.join('')
};
// @lc code=end

