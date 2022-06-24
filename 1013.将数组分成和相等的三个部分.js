/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 *
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (39.77%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    53.3K
 * Total Submissions: 136.3K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
 * 
 * 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] +
 * arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length
 * - 1]) 就可以将数组三等分。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  // 先求前n项和sum[i]
  // 再找处是否有i,j满足sum[i]=1/3sum[n-1],sum[j]=2/3sum[n-1]
  const sum=arr.reduce((i,j)=>i+j,0)
  let first=false
  let cur=0
  for(let i=0;i<arr.length-1;i++){
      cur+=arr[i]
      if(cur===sum/3*2 && first){
          return true
      }else if(cur===sum/3){
          first=true
      }
  }
  return false

};
// @lc code=end

