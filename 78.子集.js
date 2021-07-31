/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.93%)
 * Likes:    1260
 * Dislikes: 0
 * Total Accepted:    280.3K
 * Total Submissions: 350.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  //回溯
  const ret=[]
  dfs=(arr,start)=>{
      // 遍历结束
      if(start===nums.length){
          ret.push(arr.slice())
          return
      }
      // dfs递归，每个元素都有选/不选两个状态
      // 两种状态都要遍历
      arr.push(nums[start])//选
      dfs(arr,start+1)
      arr.pop()//不选
      dfs(arr,start+1)
  }
  dfs([],0)
  return ret
};
// @lc code=end

