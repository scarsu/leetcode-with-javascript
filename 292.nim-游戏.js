/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 *
 * https://leetcode-cn.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (69.62%)
 * Likes:    474
 * Dislikes: 0
 * Total Accepted:    92.3K
 * Total Submissions: 131.8K
 * Testcase Example:  '4'
 *
 * 你和你的朋友，两个人一起玩 Nim 游戏：
 * 
 * 
 * 桌子上有一堆石头。
 * 你们轮流进行自己的回合，你作为先手。
 * 每一回合，轮到的人拿掉 1 - 3 块石头。
 * 拿掉最后一块石头的人就是获胜者。
 * 
 * 
 * 假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：false 
 * 解释：如果堆中有 4 块石头，那么你永远不会赢得比赛；
 * 因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 2
 * 输出：true
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
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 数学推理
  // 剩余1，2，3先手会赢
  // 剩余4先手一定会输
  // 剩余5，6，7 先手只要留下4就会赢
  // 剩余8 不管先手拿几个 对手剩余4是最优选 先手会输
  // ...只要剩余是4的倍数，对手会在每一轮维持4的倍数，直到剩余4 先手定会输
  // ...只要剩余不是4的倍数，先手每轮拿走1/2/3个 使剩余是4的倍数 让对手面对4 对手定会输

  // 巴什博奕，n%(m+1)!=0时，先手总是会赢

  return n%4!==0
};
// @lc code=end

