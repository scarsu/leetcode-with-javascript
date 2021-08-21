/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 *
 * https://leetcode-cn.com/problems/string-compression/description/
 *
 * algorithms
 * Medium (42.70%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    36.7K
 * Total Submissions: 83K
 * Testcase Example:  '["a","a","b","b","c","c","c"]'
 *
 * 给你一个字符数组 chars ，请使用下述算法压缩：
 * 
 * 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
 * 
 * 
 * 如果这一组长度为 1 ，则将字符追加到 s 中。
 * 否则，需要向 s 追加字符，后跟这一组的长度。
 * 
 * 
 * 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars
 * 数组中会被拆分为多个字符。
 * 
 * 请在 修改完输入数组后 ，返回该数组的新长度。
 * 
 * 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：chars = ["a","a","b","b","c","c","c"]
 * 输出：返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]
 * 解释：
 * "aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：chars = ["a"]
 * 输出：返回 1 ，输入数组的前 1 个字符应该是：["a"]
 * 解释：
 * 没有任何字符串被替代。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * 输出：返回 4 ，输入数组的前 4 个字符应该是：["a","b","1","2"]。
 * 解释：
 * 由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。
 * 注意每个数字在数组中都有它自己的位置。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= chars.length <= 2000
 * chars[i] 可以是小写英文字母、大写英文字母、数字或符号
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  //要求‘你必须设计并实现一个只使用常量额外空间的算法来解决此问题。’
  //因此需要原地修改
  
  //需要快慢双指针 一个快指针用于遍历 一个慢指针用于原地修改
  const len=chars.length
  let fast=0
  let slow=-1
  let count=0
  const addCount=(start,count)=>{
      if(count===1) return start
      let countArr=(''+count).split('')
      for(let i=0;i<countArr.length;i++){
          chars[start]=countArr[i]
          start++
      }
      return start
  }
  while(fast<len){
      if(slow===-1){
          slow++
          fast++
          count=1
      }else{
          if(chars[fast]===chars[slow]){
              // 字符重复
              fast++
              count++
          }else{
              // 字符重复结束
              slow=addCount(slow+1,count)
              // 新字符
              chars[slow]=chars[fast]
              fast++
              count=1
          }
      }
  }
  //结尾字符
  slow=addCount(slow+1,count)
  return slow
};
// @lc code=end

