/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (63.40%)
 * Likes:    751
 * Dislikes: 0
 * Total Accepted:    186.8K
 * Total Submissions: 294.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  // 与46思路相同，利用迭代+回溯
  // 但是本题不能重复
  // 因此在迭代的过程中，要考虑到重复的条件，充分剪枝
  // 另外去重 可以先排序 使相同的数字相邻
  const len=nums.length,ret=[]
  const used=[] // 访问标记

  nums.sort((a,b)=>a-b)
  
  const backTrace=(deepStack)=>{
      if(deepStack.length===len){
          // 得到结果
          ret.push(deepStack.slice())
          return
      }
      for(let i=0;i<len;i++){
          // 剪枝 情况1
          // 如果当前项和上一项相同，且上一项未被使用过
          // 说明上一项已经被回溯过
          // 则忽略迭代这一项
          if(i-1>=0 && nums[i]===nums[i-1] && !used[i-1]) continue
          
          // 剪枝 情况2
          // 如果当前项使用过
          // 则忽略迭代这一项
          if(used[i]) continue
          
          // 将这一项加入stack中，继续迭代
          deepStack.push(nums[i])
          used[i]=true
          backTrace(deepStack)

          // 回溯
          deepStack.pop()
          used[i]=false //记得重置状态
      }
  }
  backTrace([])
  return ret
};
// @lc code=end

