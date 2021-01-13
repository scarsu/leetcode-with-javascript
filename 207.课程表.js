/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 *
 * https://leetcode-cn.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (54.44%)
 * Likes:    682
 * Dislikes: 0
 * Total Accepted:    89.2K
 * Total Submissions: 163K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
 * 
 * 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 2, [[1,0]] 
 * 输出: true
 * 解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
 * 
 * 示例 2:
 * 
 * 输入: 2, [[1,0],[0,1]]
 * 输出: false
 * 解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵 。详情请参见图的表示法。
 * 你可以假定输入的先决条件中没有重复的边。
 * 1 <= numCourses <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // -1未搜索 0搜索中 1搜索完成
  const visit=Array(numCourses).fill(-1)
  let ret = true

  // 映射存储为map结构
  const adj = new Map()
  prerequisites.forEach(e=>{
    if(!adj.has(e[0])) adj.set(e[0],[])
    adj.get(e[0]).push(e[1])
  })

  // dfs
  const dfs = u=>{
    visit[u]=0  // 搜索中
    const adjs = adj.get(u) || []
    for(let i=0;i<adjs.length;i++){
      const v=adjs[i]
      if(visit[v]===0) ret=false // 有环
      if(visit[v]===-1) dfs(v)
      if(!ret) return
    }
    visit[u]=1 // 已搜索
  }

  for(let i=0;i<numCourses;i++){
    if(visit[i]===-1) dfs(i)
  }
  return ret
};
// @lc code=end

