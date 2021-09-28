/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (54.37%)
 * Likes:    676
 * Dislikes: 0
 * Total Accepted:    194.6K
 * Total Submissions: 358.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 * 
 * 
 */

// @lc code=start
// 方法一 20% 5%
// 位运算：二进制求和a+b = a^b异或 + a&b进位<<1
// var addBinary = function(a, b) {
//     // 1 <= a.length, b.length <= 10^4
//     // 最大10000位，不能用普通的number相加求解
    
//     const getXor=(a,b)=>{
//         const n=Math.max(a.length,b.length)
//         let ret=''
//         for(let i=0;i<n;i++){
//             // 从倒数第i位开始计算
//             let x=i<a.length?a[a.length-i-1]:'0'
//             let y=i<b.length?b[b.length-i-1]:'0'
//             ret={
//                 '00':'0',
//                 '01':'1',
//                 '10':'1',
//                 '11':'0',
//             }[x+y]+ret
//         }
//         return ret
//     }
//     const getCarry=(a,b)=>{
//         const n=Math.max(a.length,b.length)
//         let ret=''
//         for(let i=0;i<n;i++){
//             let x=i<a.length?a[a.length-i-1]:'0'
//             let y=i<b.length?b[b.length-i-1]:'0'
//             ret = ((x==='1'&&y==='1') ? '1' : '0') + ret
//         }
//         // 左移一位
//         return ret+'0'
//     }
//     const isZero=a=>{
//         let i=0
//         while(i<a.length){
//             if(a[i]!=='0') return false
//             i++
//         }
//         return true
//     }
//     const trimStartZero=a=>{
//         return a.replace(/^0+(?=\d+)/,'')
//     }
//     while(!isZero(b)){
//         let carry=getCarry(a,b)
//         a=getXor(a,b)
//         b=carry
//     }
//     return trimStartZero(a)
// };

// 方法二：模拟 60%
var addBinary = function(a, b) {
  const n=Math.max(a.length,b.length)
  let ret=''
  let carry=0
  for(let i=0;i<n;i++){
      // 从倒数第i位开始计算
      let x=i<a.length ? parseInt(a[a.length-i-1]) : 0
      let y=i<b.length ? parseInt(b[b.length-i-1]) : 0
      ret=(x^y^carry)+''+ret
      carry=(x+y+carry)>1?1:0
  }
  if(carry===1){
      ret='1'+ret
  }
  return ret
}
// @lc code=end

