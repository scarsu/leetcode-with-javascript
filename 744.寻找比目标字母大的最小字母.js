/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 *
 * https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/description/
 *
 * algorithms
 * Easy (45.91%)
 * Likes:    226
 * Dislikes: 0
 * Total Accepted:    88.5K
 * Total Submissions: 179.5K
 * Testcase Example:  '["c","f","j"]\n"a"'
 *
 * 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母
 * target，请你寻找在这一有序列表里比目标字母大的最小字母。
 * 
 * 在比较时，字母是依序循环出现的。举个例子：
 * 
 * 
 * 如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: letters = ["c", "f", "j"]，target = "a"
 * 输出: "c"
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: letters = ["c","f","j"], target = "c"
 * 输出: "f"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: letters = ["c","f","j"], target = "d"
 * 输出: "f"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= letters.length <= 10^4
 * letters[i] 是一个小写字母
 * letters 按非递减顺序排序
 * letters 最少包含两个不同的字母
 * target 是一个小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  // 遍历
  // for(let i=0;i<letters.length;i++){
  //     if(letters[i]>target){
  //         return letters[i]
  //     }
  // }
  // return letters[0]

  // 二分
  if(letters[letters.length-1]<=target) return letters[0]
  let low=0,high=letters.length-1
  while(low<high){
      const mid=(low+high)/2|0
      if(letters[mid]>target){
          // 继续往前找
          high=mid
      }else{
          low=mid+1
      }
  }
  // 最终low=high=位于最前的大于target的字符
  return letters[high]
};
// @lc code=end

