/*
 * @lc app=leetcode.cn id=1736 lang=javascript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 *
 * https://leetcode-cn.com/problems/latest-time-by-replacing-hidden-digits/description/
 *
 * algorithms
 * Easy (40.49%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    14.1K
 * Total Submissions: 32.3K
 * Testcase Example:  '"2?:?0"'
 *
 * 给你一个字符串 time ，格式为  hh:mm（小时：分钟），其中某几位数字被隐藏（用 ? 表示）。
 * 
 * 有效的时间为 00:00 到 23:59 之间的所有时间，包括 00:00 和 23:59 。
 * 
 * 替换 time 中隐藏的数字，返回你可以得到的最晚有效时间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：time = "2?:?0"
 * 输出："23:50"
 * 解释：以数字 '2' 开头的最晚一小时是 23 ，以 '0' 结尾的最晚一分钟是 50 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：time = "0?:3?"
 * 输出："09:39"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：time = "1?:22"
 * 输出："19:22"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * time 的格式为 hh:mm
 * 题目数据保证你可以由输入的字符串生成有效的时间
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
 var maximumTime = function(time) {
  // ab:cd
  // a [0,1,2]
  // b [0,9] [0,9] [0,3]
  // c [0,5]
  // d [0,9]
  let arr=time.split('')
  for(let i=0;i<arr.length;i++){
      if(arr[i]==='?'){
          if(i===0){
              arr[0]=(arr[1]!=='?' && parseInt(arr[1])>3)?'1':'2'
          }else if(i===1){
              arr[1]= arr[0]==='2'? '3':'9'
          }else if(i===3){
              arr[3]='5'
          }else{
              arr[4]='9'
          }
      }
  }
  return arr.join('')
}; 
// @lc code=end

