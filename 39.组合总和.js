/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (72.55%)
 * Likes:    1451
 * Dislikes: 0
 * Total Accepted:    294.7K
 * Total Submissions: 405.8K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target
 * 的唯一组合。
 * 
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
 * 
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: candidates = [2,3,6,7], target = 7
 * 输出: [[7],[2,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: candidates = [2,3,5], target = 8
 * 输出: [[2,2,2,2],[2,3,3],[3,5]]
 * 
 * 示例 3：
 * 
 * 
 * 输入: candidates = [2], target = 1
 * 输出: []
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入: candidates = [1], target = 1
 * 输出: [[1]]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入: candidates = [1], target = 2
 * 输出: [[1,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * candidate 中的每个元素都是独一无二的。
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
 var combinationSum = function(candidates, target) {
  // 回溯+剪枝
  const ret=[]
  const backTrace=(arr,sum,last)=>{
      if(sum>target) return
      if(sum===target){
          ret.push(arr.slice())
          return
      }
      // 如果从i=0开始遍历
      // 遍历后面的数时，会再次使用前面的数
      // 会导致重复
      // 因此要记录上次遍历的数的索引last，从last开始遍历，避免重复
      for(let i=last;i<candidates.length;i++){
          sum+=candidates[i]
          arr.push(candidates[i])
          backTrace(arr.slice(),sum,i)
          // 回溯
          sum-=candidates[i]
          arr.pop()
      }
  }
  backTrace([],0,0)
  return ret
};
// @lc code=end

