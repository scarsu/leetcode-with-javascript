/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 *
 * https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/description/
 *
 * algorithms
 * Hard (59.20%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    11.8K
 * Total Submissions: 18K
 * Testcase Example:  '["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]\n[[],[1],[],[3],[],[7],[],[2],[],[6],[]]'
 *
 *  给你一个由非负整数 a1, a2, ..., an 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。
 * 
 * 实现 SummaryRanges 类：
 * 
 * 
 * 
 * 
 * SummaryRanges() 使用一个空数据流初始化对象。
 * void addNum(int val) 向数据流中加入整数 val 。
 * int[][] getIntervals() 以不相交区间 [starti, endi] 的列表形式返回对数据流中整数的总结。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals",
 * "addNum", "getIntervals", "addNum", "getIntervals", "addNum",
 * "getIntervals"]
 * [[], [1], [], [3], [], [7], [], [2], [], [6], []]
 * 输出：
 * [null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7,
 * 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]
 * 
 * 解释：
 * SummaryRanges summaryRanges = new SummaryRanges();
 * summaryRanges.addNum(1);      // arr = [1]
 * summaryRanges.getIntervals(); // 返回 [[1, 1]]
 * summaryRanges.addNum(3);      // arr = [1, 3]
 * summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3]]
 * summaryRanges.addNum(7);      // arr = [1, 3, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3], [7, 7]]
 * summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 3], [7, 7]]
 * summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 3], [6, 7]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= val <= 10^4
 * 最多调用 addNum 和 getIntervals 方法 3 * 10^4 次
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：如果存在大量合并，并且与数据流的大小相比，不相交区间的数量很小，该怎么办?
 * 
 */

// @lc code=start
var SummaryRanges = function() {
  this.intervals=[]
};

/** 
* @param {number} val
* @return {void}
*/
SummaryRanges.prototype.addNum = function(val) {
  const n=this.intervals.length
  for(let i=0;i<n;i++){
      const [l,r]=this.intervals[i]
      if(val<l-1){
          // val形成单独区间
          this.intervals.splice(i,0,[val,val])
          return
      }else if(val===l-1){
          // val=l-1，左边界-1，该区间变成[l-1,r]
          this.intervals[i]=[l-1,r]
          return
      }else if(l<=val && val<=r){
          // val包含于某一区间 结果不变
          return
      }else if(r+1===val){
          // val=r+1，右边界+1，该区间变成[l,r+1]
          // 需要判断是否与后一区间合并
          if(i<n-1 && val===this.intervals[i+1][0]-1){
              this.intervals.splice(i,2,[l,this.intervals[i+1][1]])
              return
          }else{
              this.intervals[i]=[l,r+1]
              return
          }
      }
  }
  // 4. val在末尾形成单独区间
  this.intervals.push([val,val])
};

/**
* @return {number[][]}
*/
SummaryRanges.prototype.getIntervals = function() {
  return this.intervals
};

/**
* Your SummaryRanges object will be instantiated and called as such:
* var obj = new SummaryRanges()
* obj.addNum(val)
* var param_2 = obj.getIntervals()
*/
// @lc code=end

