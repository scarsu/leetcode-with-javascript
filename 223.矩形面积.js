/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 *
 * https://leetcode-cn.com/problems/rectangle-area/description/
 *
 * algorithms
 * Medium (46.20%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    23.9K
 * Total Submissions: 49.3K
 * Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
 *
 * 给你 二维 平面上两个 由直线构成的 矩形，请你计算并返回两个矩形覆盖的总面积。
 * 
 * 每个矩形由其 左下 顶点和 右上 顶点坐标表示：
 * 
 * 
 * 
 * 第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
 * 第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
 * 输出：45
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 =
 * 2
 * 输出：16
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -10^4 
 * 
 * 
 */

// @lc code=start
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const computeRect=(x1,y1,x2,y2)=>(y2-y1)*(x2-x1)
  const aArea=computeRect(ax1,ay1,ax2,ay2)
  const bArea=computeRect(bx1,by1,bx2,by2)

  let xdiff=0,ydiff=0
  if(bx1<=ax1 && bx2>=ax2){
      // b包含a
      xdiff=Math.abs(ax2-ax1)
  }else if(ax1<=bx1 && ax2>=bx2){
      // a包含b
      xdiff=Math.abs(bx2-bx1)
  }else if(ax1<=bx1 && bx1<ax2){
      // a左b右
      xdiff=Math.abs(ax2-bx1)
  }else if(bx1<=ax1 && ax1<bx2){
      // a右b左
      xdiff=Math.abs(bx2-ax1)
  }
  if(by1<=ay1 && by2>=ay2){
      ydiff=Math.abs(ay2-ay1)
  }else if(ay1<=by1 && ay2>=by2){
      ydiff=Math.abs(by2-by1)
  }else if(ay1<=by1 && by1<ay2){
      ydiff=Math.abs(ay2-by1)
  }else if(by1<=ay1 && ay1<by2){
      ydiff=Math.abs(by2-ay1)
  }
  return aArea+bArea-(xdiff*ydiff)
};
// @lc code=end

