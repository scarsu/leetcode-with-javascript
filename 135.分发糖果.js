/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 *
 * https://leetcode-cn.com/problems/candy/description/
 *
 * algorithms
 * Hard (44.92%)
 * Likes:    341
 * Dislikes: 0
 * Total Accepted:    40.8K
 * Total Submissions: 88.2K
 * Testcase Example:  '[1,0,2]'
 *
 * 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
 * 
 * 你需要按照以下要求，帮助老师给这些孩子分发糖果：
 * 
 * 
 * 每个孩子至少分配到 1 个糖果。
 * 相邻的孩子中，评分高的孩子必须获得更多的糖果。
 * 
 * 
 * 那么这样下来，老师至少需要准备多少颗糖果呢？
 * 
 * 示例 1:
 * 
 * 输入: [1,0,2]
 * 输出: 5
 * 解释: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,2]
 * 输出: 4
 * 解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
 * ⁠    第三个孩子只得到 1 颗糖果，这已满足上述两个条件。
 * 
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  // 左遍历 存left数组，ratings[i+1]>ratings[i]时，left[i]=left[i-1]+1
  // 右遍历 存right数组，rating[i-1]>ratings[i]时，right[i-1]=right[i]+1
  // 图解：https://scarsu.oss-cn-shanghai.aliyuncs.com/picgo20201224101537.png
  // 取两次遍历各个节点的最大值 得到结果
  const l=ratings.length
  const left=new Array(l).fill(0)
  const right=new Array(l).fill(0)
  for(let i=0;i<l;i++){
    if(i>0 && ratings[i]>ratings[i-1]){
      left[i]=left[i-1]+1
    }else{
      left[i]=1 // 至少一个
    }
  }
  for(let i=l-1;i>-1;i--){
    if(i<l-1 && ratings[i]>ratings[i+1]){
      right[i]=right[i+1]+1
    }else{
      right[i]=1 // 至少一个
    }
  }
  return left.reduce((p,c,i)=>p+Math.max(c,right[i]),0)
};
// @lc code=end

