/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (63.44%)
 * Likes:    644
 * Dislikes: 0
 * Total Accepted:    178.5K
 * Total Submissions: 281.8K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  const ret=[]
  // 想要不重复，先排序
  candidates.sort((a,b)=>a-b)
  const backTrace=(sum,arr,start)=>{
      if(sum>target) return
      if(sum===target){
          ret.push(arr.slice())
          return
      }
      for(let i=start;i<candidates.length;i++){
          // 回溯剪枝题的难点就在于剪枝
          // 剪枝
          // 上一个数和当前的数相同
          // 且上一个数已经被回溯过
          // 考虑[1,1,7,6] 8这种题面
          // 对于[1,7]这种结果 遍历第二个1的时候，start=0，处于第一轮回溯，可以判断到上一个1已经使用过，需要剪枝，能得到[1,7]
          // 对于[1,1,6]这种结果 遍历第二个1的时候，start=1，处于下一层回溯，不会判断到上一个1使用过，所以不需要剪枝，能得到[1,1,6]
          if(
              candidates[i-1]===candidates[i] &&
              start <= i-1
          ){
              continue
          }

          arr.push(candidates[i])
          backTrace(sum+candidates[i],arr.slice(),i+1)
          arr.pop()
      }
  }
  backTrace(0,[],0)
  return ret
};
// @lc code=end

