/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 *
 * https://leetcode-cn.com/problems/total-hamming-distance/description/
 *
 * algorithms
 * Medium (52.27%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 30.8K
 * Testcase Example:  '[4,14,2]'
 *
 * 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。
 * 
 * 计算一个数组中，任意两个数之间汉明距离的总和。
 * 
 * 示例:
 * 
 * 
 * 输入: 4, 14, 2
 * 
 * 输出: 6
 * 
 * 解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
 * 所以答案为：
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2
 * + 2 + 2 = 6.
 * 
 * 
 * 注意:
 * 
 * 
 * 数组中元素的范围为从 0到 10^9。
 * 数组的长度不超过 10^4。
 * 
 * 
 */

// @lc code=start

// 每一比特位上的汉明距离 与其他位互不影响
// 因此可以逐位计算汉明距离 再求和
// 数的范围在0-10^9，而10^9 < 2^30,因此需要计算29个比特位
// nums中每个数的第i位上，如果有count1个0，那么就有n-count1个1
// 那么根据排列组合原理，第i位的汉明距离就是count1*(n-count1)
var totalHammingDistance = function(nums) {
  let ret=0
  const n=nums.length
  for(let i=0;i<30;i++){
    let count1 = 0
    for(let num of nums){
      // num右移i位，和1按位与，得到第i位的结果
      count1 += (num >> i) & 1
    }
    ret += count1 * (n-count1)
  }
  return ret
}

// 暴力 超时
// var totalHammingDistance = function(nums) {
//   const n=nums.length
//   let ret=0
//   for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//       ret+=hammingDistance(nums[i],nums[j])
//     }
//   }
//   return ret
// };

// var hammingDistance = function(a, b) {
//   let n=a^b,ret=0
//   while(n>0){
//     n&=n-1
//     ret++
//   }
//   return ret
// };


// @lc code=end

