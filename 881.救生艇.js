/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 *
 * https://leetcode-cn.com/problems/boats-to-save-people/description/
 *
 * algorithms
 * Medium (47.62%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    23.3K
 * Total Submissions: 46.1K
 * Testcase Example:  '[1,2]\n3'
 *
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
 * 
 * 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
 * 
 * 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：people = [1,2], limit = 3
 * 输出：1
 * 解释：1 艘船载 (1, 2)
 * 
 * 
 * 示例 2：
 * 
 * 输入：people = [3,2,2,1], limit = 3
 * 输出：3
 * 解释：3 艘船分别载 (1, 2), (2) 和 (3)
 * 
 * 
 * 示例 3：
 * 
 * 输入：people = [3,5,3,4], limit = 5
 * 输出：4
 * 解释：4 艘船分别载 (3), (3), (4), (5)
 * 
 * 提示：
 * 
 * 
 * 1 <= people.length <= 50000
 * 1 <= people[i] <= limit <= 30000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  //贪心
  //先排序
  //遍历
      //取最大数max
      //     >=limit 则+1船
      //     <limit 找出满足pair<=limit-max的pair最大值 +1船
      //            若找不到 +1船
  // let ret=0
  // const n=people.length
  // const visited=new Array(n).fill(0)
  // people=people.sort((a,b)=>b-a)
  // for(let i=0;i<n;i++){
  //     if(visited[i]===1) continue
  //     let max=people[i]
  //     if(max>=limit){
  //         ret++
  //         visited[i]=1
  //     }else{
  //         let j=i+1
  //         for(;j<n;j++){
  //             if(visited[j]===1) continue
  //             if(people[j]+max<=limit){
  //                 ret++
  //                 visited[j]=1
  //                 break
  //             }
  //         }
  //         if(j===n){
  //             ret++
  //             visited[i]=1
  //         }
  //     }
  // }
  // return ret
  
  // 上述方法需要两层循环 效率低 
  // 可以用双指针优化
  let ret=0
  const n=people.length
  people=people.sort((a,b)=>a-b)
  let l=0,r=n-1
  while(l<r){
      if(people[r]+people[l]>limit){
          r--
      }else{
          r--
          l++
      }
      ret++
  }
  if(l===r) ret++
  return ret
};
// @lc code=end

