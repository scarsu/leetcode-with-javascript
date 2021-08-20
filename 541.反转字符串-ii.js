/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode-cn.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (57.83%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    51.3K
 * Total Submissions: 86K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。
 * 
 * 
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由小写英文组成
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arr=s.split('')

  //抽出独立的反转函数
  //将区间[l,r]的字符反转
  const reversePart=(l,r)=>{
      while(l<r){
          let tmp=arr[l]
          arr[l]=arr[r]
          arr[r]=tmp
          l++
          r--
      }
  }

  //模拟
  let cur=0
  while(cur<arr.length){
      //(cur+1)%2k处于区间[1,k]?
          // 需要反转 
          // 剩余字符<k?
              // 反转 l=cur r=cur+k-1
              // 反转 l=cur r=arr.length-1
      let pos=(cur+1)%(2*k)
      if(pos>=1 && pos<=k){
          let left=cur
          let right=cur+k-1
          if(right>arr.length) right=arr.length-1
          reversePart(left,right)
      }
      // i进入下一轮
      cur+=2*k
  }

  return arr.join('')
};
// @lc code=end

