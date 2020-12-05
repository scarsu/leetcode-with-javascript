/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 *
 * https://leetcode-cn.com/problems/task-scheduler/description/
 *
 * algorithms
 * Medium (51.30%)
 * Likes:    463
 * Dislikes: 0
 * Total Accepted:    40.6K
 * Total Submissions: 77.1K
 * Testcase Example:  '["A","A","A","B","B","B"]\n2'
 *
 * 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1
 * 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
 * 
 * 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 
 * 你需要计算完成所有任务所需要的 最短时间 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：tasks = ["A","A","A","B","B","B"], n = 2
 * 输出：8
 * 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B
 * ⁠    在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 
 * 
 * 示例 2：
 * 
 * 
 * 输入：tasks = ["A","A","A","B","B","B"], n = 0
 * 输出：6
 * 解释：在这种情况下，任何大小为 6 的排列都可以满足要求，因为 n = 0
 * ["A","A","A","B","B","B"]
 * ["A","B","A","B","A","B"]
 * ["B","B","B","A","A","A"]
 * ...
 * 诸如此类
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * 输出：16
 * 解释：一种可能的解决方案是：
 * ⁠    A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> (待命) -> (待命) -> A ->
 * (待命) -> (待命) -> A
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * tasks[i] 是大写英文字母
 * n 的取值范围为 [0, 100]
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  // 和 #767重构字符串有类似之处，#767 要求两相邻的字符不同，即间隔是1
  // 这道题间隔是n
  // #767要求给出排列结果，这道题只要计算排列长度即可

  // 间隔插缝的问题
  // 先找出数量最大的任务，假设其数量是count
  // 如果只有1个任务数量为count，间隔是n，剩余的任务往其中插空，则最小ret=(count-1)*(n+1)+1     
  // A->X->X-> A->X->X-> A
  // 如果有t个任务数量为count，则最小ret=(count-1)*(n+1)+t    
  // A->B->X-> A->B->X-> A->B
  
  if(tasks.length<0||n<1) return tasks.length
  // 用Array[26]存储任务长度
  let arr=new Array(26).fill(0)
  for(let i=0;i<tasks.length;i++){
    arr[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
  }

  // 排序
  arr.sort((a,b)=>b-a)
  let max=arr[0]
  let maxCount=arr.filter(i=>i===max).length

  // 求出满足间隔的最小值
  // 如果最小值算出来 比 tasks长度小
  // 说明任务能完全填满空位，不存在等待时间
  // 直接返回tasks.length即可
  return Math.max((max-1)*(n+1)+maxCount, tasks.length)
};
// @lc code=end

