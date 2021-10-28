/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 *
 * https://leetcode-cn.com/problems/reordered-power-of-2/description/
 *
 * algorithms
 * Medium (55.14%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    12.1K
 * Total Submissions: 19.6K
 * Testcase Example:  '1'
 *
 * 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
 * 
 * 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：1
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：10
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：16
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：24
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 输入：46
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  // 1.回溯求全排列+位运算
  // const isValid=n=>{
  //     // return Math.log2(n)%1===0
  //     // 位运算 2的幂n满足 n和n-1按位与结果是0
  //     return (n&(n-1))===0
  // }
  // const nums=Array.from(''+n)
  // const len=nums.length
  // const visit=new Array(len).fill(false)
  
  // // 全排列 用回溯
  // const backTrace=(i,cur)=>{
  //     // console.log(i,cur)
  //     if(i===len){
  //         // 为了省去每次parseInt的开销，将cur存储字符串转为存储当前数字
  //         if(isValid(cur))return true
  //     }
  //     for(let j=0;j<len;j++){
  //         // 不可含有前导0 剪枝
  //         if(cur===0 && nums[j]==='0') continue

  //         // 元素不可重复 剪枝
  //         if(visit[j]) continue

  //         // 前一个相同元素被跳过 说明已经选中过 剪枝
  //         if(j>0 && !visit[j-1] && nums[j-1]===nums[j]) continue

  //         visit[j]=true   // 选中
  //         if(backTrace(i+1,cur*10+nums[j]*1)){
  //             return true
  //         }
  //         visit[j]=false //回溯
  //     }
  // }
  // return !!backTrace(0,0)

  // 2.预处理+哈希集合
  // 整数N满足1 <= N <= 10^9
  // console.log(Math.log2(1e9))
  // 10^9=2^29.9
  // 所以处在其间的2的幂,有0,1,2..29
  // 列出每个幂 及其包含的数字数量,看n的每个数字数量是否满足即可

  const countDigits=n=>{
      let counts=new Array(10).fill(0)
      while(n){
          counts[n%10]+=1
          n=(n/10)|0
      }
      return counts.join('')
  }

  const powerOf2Digits=new Set()
  // for(let i=0;i<=29;i++){
  //     set.add(countDigits(2**i))
  // }
  // 用位运算 左移一位 代表下一个2的幂
  for(let i=1;i<1e9;i<<=1){
      powerOf2Digits.add(countDigits(i))
  }
  return powerOf2Digits.has(countDigits(n))
};
// @lc code=end

