/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.08%)
 * Likes:    1443
 * Dislikes: 0
 * Total Accepted:    358K
 * Total Submissions: 458.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  // 回溯
  const len=nums.length
  const ret=[]
  const stack=[]
  if(len===0) return ret
  const backtrack = (stack)=>{
      if(stack.length===len){
          ret.push(stack)
          return
      }else{
          // 全排列
          for(let i=0;i<len;i++){
              // 因题干“无重复数字”
              // 所以直接判断stack中是否包含nums[i]
              if(!stack.includes(nums[i])){
                  stack.push(nums[i]) // 做选择
                  backtrack(stack.slice())
                  stack.pop(nums[i])  // 撤销选择/回溯
              }
          }
      }
  }
  backtrack(stack)
  return ret
};
// @lc code=end

