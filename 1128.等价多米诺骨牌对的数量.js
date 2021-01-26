/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 *
 * https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (46.55%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 24.8K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 * 
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 * 
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且
 * b==c。
 * 
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对
 * (i, j) 的数量。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  // 普通两次遍历的思路
  // const isEuqal = (x,y) => (( x[0]===y[0]&&x[1]===y[1] )||( x[0]===y[1]&&x[1]===y[0] ))
  // let ret=0
  // for(let i=0;i<dominoes.length;i++){
  //   for(let j=i+1;j<dominoes.length;j++){
  //     if(isEuqal(dominoes[i],dominoes[j])) ret++
  //   }
  // }
  // return ret

  // 将一个二元组 表示成一个二位十进制，再利用哈希表计算出现次数
  // 只需要一次遍历
  // 1 <= dominoes[i][j] <= 9 最大值是[9,9]
  const num = Array(100).fill(0)
  let ret=0
  for(const d of dominoes){
    let cur=d[0]>d[1] ? d[0]*10+d[1] : d[1]*10+d[0]
    ret+=num[cur]
    num[cur]++
  }
  return ret
};
// @lc code=end

