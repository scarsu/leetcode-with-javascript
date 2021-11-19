/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 *
 * https://leetcode-cn.com/problems/integer-replacement/description/
 *
 * algorithms
 * Medium (37.78%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    34.5K
 * Total Submissions: 82.1K
 * Testcase Example:  '8'
 *
 * 给定一个正整数 n ，你可以做如下操作：
 * 
 * 
 * 如果 n 是偶数，则用 n / 2替换 n 。
 * 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
 * 
 * 
 * n 变为 1 所需的最小替换次数是多少？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 8
 * 输出：3
 * 解释：8 -> 4 -> 2 -> 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 7
 * 输出：4
 * 解释：7 -> 8 -> 4 -> 2 -> 1
 * 或 7 -> 6 -> 3 -> 2 -> 1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
function integerReplacement(n: number): number {
  // 动态规划会内存超出限制
  // const min:number[] = new Array(n+1).fill(0)
  // min[1]=0
  // min[2]=1
  // for(let i=3;i<=n;i++){
  //     if(i%2===1){
  //         // 奇数
  //         min[i]=Math.min(
  //             min[i-1]+1,
  //             min[(i+1)/2]+2
  //         )
  //         if(min[i-1]+1 > min[(i+1)/2]+2){
  //             console.log(i.toString(2))
  //         }
  //     }else{
  //         // 偶数
  //         min[i]=min[i/2]+1
  //     }
  // }
  // return min[n]

  // n是偶数就/2 是奇数就+1或-1 直至0
  // 关键就在于遇到奇数 是+1还是-1?
  // 可以通过动态规划 输出需要+1的数字,找规律：
  // +1或-1后，得到的数，应该能整除更多次2，才能更快地逼近1
  // 上述情况有一个特例，就是3
  // let ret=0
  // while(n>1){
  //     if(n%2===0){
  //         n/=2
  //     }else{
  //         let a=n-1,b=n+1
  //         while(a%1===0 && b%1===0){
  //             a/=2
  //             b/=2
  //         }
  //         if(b%1===0 && n!=3){
  //             n+=1
  //         }else{
  //             n-=1
  //         }
  //     }
  //     ret++
  // }
  // return ret

  // 贪心
  // /2的问题，可以往位运算上思考
  // 推演，找规律(动态规划解法中直接输出二进制)
  // 发现：如果+1后/2能更快逼近1，说明+1后有进位，使二进制表示中的1更少，1更少代表操作步数越少
  // 例如：15是1111，加1变10000(还需要4步) 减1变1110(至少还需要5步)
  // 想要+1后比-1后的步骤少，二进制表示尾部至少需要3个连续的1，
  // 111+1=1000 使得进位后能减少二进制中两个1
  // 动态规划输出的二进制中，还包含部分1011结尾的数字，
  // 例如1011 +1变1100 -1变1010
  // 推测+1 可以使数字末尾连续的1更多，后续更容易产生111+1=1000的进位
  // 因此遇到1011结尾的数字 也要+1
  let ret=0
  while(n>1){
      if(n%2===0){
          n/=2
      }else{
          if(
              /^[01]+111$/.test((n).toString(2)) ||
              /^[01]+1011$/.test((n).toString(2))
          ){
              n+=1
          }else{
              n-=1
          }
      }
      ret++
  }
  return ret

  // 递归
  // if(n===1) return 0
  // if(n===2) return 1
  // if(n%2===0){
  //     return integerReplacement(n/2)+1
  // }else{
  //     return Math.min(
  //         integerReplacement(n+1)+1,
  //         integerReplacement(n-1)+1
  //     )
  // }

};
// @lc code=end

