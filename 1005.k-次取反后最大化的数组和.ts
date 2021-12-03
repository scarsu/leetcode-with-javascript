/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 *
 * https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (53.46%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    32.8K
 * Total Submissions: 62K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 * 
 * 
 * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 * 
 * 
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 * 
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,2,3], k = 1
 * 输出：5
 * 解释：选择下标 1 ，nums 变为 [4,-2,3] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,-1,0,2], k = 3
 * 输出：6
 * 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [2,-3,-1,5,-4], k = 2
 * 输出：13
 * 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -100 <= nums[i] <= 100
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  // 反转顺序：
  // 先反转较小的负数
  // 遇到0，持续的反转0=>无需再反转
  // 如果没有0，剩余偶数次k 则重复反转同一个数=>无需再反转
  // 如果没有0，剩余奇数次k 则重复反转最小的正数=>最小正数反转一次后 无需再反转
  nums.sort((a,b)=>a-b)
  let i=0
  while(k>0){
      if(nums[i]<0){
          nums[i]=-nums[i]
          i++
          k--
      }else if(nums[i]===0){
          // 结束
          break
      }else if(k%2===0){
          // 结束
          break
      }else if(k%2===1){
          // 反转一次最小正数，结束
          if(
              (nums[i-1] && nums[i]>nums[i-1]) ||
              nums[i]===undefined
          ){
              nums[i-1]=-nums[i-1]
          }else{
              nums[i]=-nums[i]
          }
          break
      }
  }
  return nums.reduce((p,c)=>p+c,0)
};
// @lc code=end

