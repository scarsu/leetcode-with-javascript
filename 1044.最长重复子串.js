/*
 * @lc app=leetcode.cn id=1044 lang=javascript
 *
 * [1044] 最长重复子串
 *
 * https://leetcode-cn.com/problems/longest-duplicate-substring/description/
 *
 * algorithms
 * Hard (20.95%)
 * Likes:    243
 * Dislikes: 0
 * Total Accepted:    13.5K
 * Total Submissions: 44.9K
 * Testcase Example:  '"banana"'
 *
 * 给你一个字符串 s ，考虑其所有 重复子串 ：即，s 的连续子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。
 * 
 * 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "banana"
 * 输出："ana"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd"
 * 输出：""
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= s.length <= 3 * 10^4
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start

// 这是官方题解的二分+ Rabin-Karp字符编码算法，大致思路我懂了，但是其中关键步骤细节搞不懂，从java代码照着敲来的，什么地方有问题，答案还没调对-_-无语
// var longestDupSubstring = function(s) {
//     // 题意拆解
//     // 1. 二分
//     // 设重复子串的长度L，L的范围是[1,n-1]，可以通过二分 查找符合条件的最长L
//     // 2. 字符编码
//     // 如何 高效判断s中是否有长度为L的重复子串？
//     // 使用 Rabin-Karp 算法对固定长度的字符串进行编码。
//     // 当两个字符串的编码相同时，则这两个字符串也相同。
    
//     // 由于本题中字符串都是小写字母，可以通过ASCII码转换成0-25之间的数，
//     // 假设将字符串都看作一个26进制的数，那么字符串对应的10进制数就可以作为它的编码。
//     // 例如长度为3的子串，那么字符串'abc'对应的编码就是h1=0*26^1 + 1*26^2 + 2*26^3
//     // 1.在求字符串'bcd'的编码时，可以利用'abc'的编码值，h2=(h1-0*26^1)*26 + 3*26^0
//     // 2.由于本题中26^L可能很大，因此要对结果取模处理 防止溢出，但是取模可能在判断重复时，会带来哈希碰撞的问题(即不同字符串 但是编码相同)，因此可以可以使用"双哈希"，即两套进制和模。


//     // 相对所有字符进行编码
//     const arr=[...s].map(e=>e.charCodeAt(0)-'a'.charCodeAt(0))

//     // 生成两个随机进制，进制取值位于[26,100]之间
//     const radix1=getRandBetween(26,100)
//     const radix2=getRandBetween(26,100)
//     // 生成两个随机进制和两个模，模一般取编码信息量的平方的数量级
//     // 题目中字符串长度是3 * 10^4，其平方10^8不适合做哈希模，取奇数10^9+7能避免哈希碰撞
//     // 因此模可以取[10^9+7, 2^31-1]之间的随机数
//     const mod1=getRandBetween(10**9+7,Number.MAX_SAFE_INTEGER)
//     const mod2=getRandBetween(10**9+7,Number.MAX_SAFE_INTEGER)

//     // 二分查找范围是[1,n-1]
//     const n=s.length
//     let retStart=-1,retLength=0
//     let l=1,r=n-1
//     while(l<=r){
//         let mid=(l+r)/2|0
//         const idx=checkRight(arr, mid, radix1, radix2, mod1, mod2)
//         if(idx!=-1){
//             // s中有长度为mid的重复子串
//             retStart=idx
//             retLength=mid
//             // 由于要找到最大的，所以右移左边界
//             l=mid+1
//         }else{
//             // 左移右边界
//             r=mid-1
//         }
//     }
//     return retStart===-1?'':s.substr(retStart,retLength)
// };

// function getRandBetween(a,b){
//     return Math.floor(Math.random()*(b-a+1)) + a + 1
// }

// function checkRight(arr, len, radix1, radix2, mod1, mod2){
//     console.log(len,'---------------')
//     const n=arr.length
//     let h1=0,h2=0
//     for(let i=0;i<len;++i){
//         // 此处可能涉及指数 取模 加法 转换，没看懂
//         // 按道理 h = h + arr[i]*(radix1**i)
//         // 取模后 h = (h + arr[i]*(radix1**i)) % mod
//         h1 = (h1 * radix1 % mod1 + arr[i]) % mod1
//         h2 = (h2 * radix2 % mod2 + arr[i]) % mod2
//         if (h1 < 0) h1 += mod1
//         if (h2 < 0) h2 += mod2
//     }

//     //利用哈希集合判断重复 
//     const seen=new Set()
//     // 将h1和h2也组合成一个编码 便于判断
//     seen.add(h1*mod2+h2)
//     const radixL1 = pow(radix1, len, mod1);
//     const radixL2 = pow(radix2, len, mod2);
//     for (let start=1;start<=n-len;++start) {
//         h1 = (h1 * radix1 % mod1 - arr[start - 1] * radixL1 % mod1 + arr[start + len - 1]) % mod1;
//         h2 = (h2 * radix2 % mod2 - arr[start - 1] * radixL2 % mod2 + arr[start + len - 1]) % mod2;
//         if (h1 < 0) h1 += mod1
//         if (h2 < 0) h2 += mod2
//         const num = h1 * mod2 + h2;
//         console.log(h1,h2,num,seen,arr[start],'@')
//         // 如果重复，则返回重复串的起点
//         if(!seen.add(num)){
//             return start;
//         }
//     }
//     // 没有重复，则返回-1
//     return -1
// }

// // 取余快速幂
// function pow(radix,power,mod){
//     let ret = 1
//     let contribute = radix
//     while (power > 0) {
//         if (power % 2 == 1) {
//             ret = ret * contribute % mod
//             if (ret < 0) {
//                 ret += mod
//             }
//         }
//         contribute = contribute * contribute % mod
//         if (contribute < 0) {
//             contribute += mod
//         }
//         power /= 2
//     }
//     return ret
// }




// 这是另一个大佬的滑动窗口解法，我看不懂，无语了-_- cv了事
var longestDupSubstring = function (s) {
  let maxStr = '',curStr = '';
  for (let i = 0, j = 0; i < s.length; i++) {
    curStr = curStr.replace(s[i - 1], '');
    while (curStr.length <= maxStr.length && j < s.length) {
      curStr += s[j], j++;
      if (curStr.length > maxStr.length && s.lastIndexOf(curStr) > i) maxStr = curStr;
    }
  }
  return maxStr;
};









// @lc code=end

