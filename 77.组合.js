/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.93%)
 * Likes:    635
 * Dislikes: 0
 * Total Accepted:    189.4K
 * Total Submissions: 246K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 
 * 你可以按 任何顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1, k = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const ret=[]
  const backTrace=(arr,start)=>{
      if(arr.length===k){
          ret.push(arr.slice())
          return
      }
      // 注意控制遍历范围
      for(let i=start;i<=n;i++){
          // 遍历
          arr.push(i)
          backTrace(arr,i+1)
          // 回溯
          arr.pop()
      }
  }
  backTrace([],1)
  return ret
};
// @lc code=end

