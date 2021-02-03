/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 *
 * https://leetcode-cn.com/problems/sliding-window-median/description/
 *
 * algorithms
 * Hard (36.15%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    14.8K
 * Total Submissions: 35.2K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。
 * 
 * 例如：
 * 
 * 
 * [2,3,4]，中位数是 3
 * [2,3]，中位数是 (2 + 3) / 2 = 2.5
 * 
 * 
 * 给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1
 * 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。
 * 
 * 
 * 窗口位置                      中位数
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       1
 * ⁠1 [3  -1  -3] 5  3  6  7      -1
 * ⁠1  3 [-1  -3  5] 3  6  7      -1
 * ⁠1  3  -1 [-3  5  3] 6  7       3
 * ⁠1  3  -1  -3 [5  3  6] 7       5
 * ⁠1  3  -1  -3  5 [3  6  7]      6
 * 
 * 
 * 因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设 k 始终有效，即：k 始终小于输入的非空数组的元素个数。
 * 与真实值误差在 10 ^ -5 以内的答案将被视作正确答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  // 1. 硬解(超出时间限制)  每次滑动O(n-k) 重新排序O(k) 求中位数 O(n^2-k^2)
  // const n=nums.length
  // const ret=[]
  // const getMid=arr=>{
  //   let n=arr.length
  //   if(n%2===0){
  //     return (arr[n/2]+arr[n/2-1])/2
  //   }else{
  //     return arr[(n-1)/2]
  //   }
  // }
  // for(let i=0;i<=n-k;i++){
  //   let subArr=nums.slice(i,i+k).sort((a,b)=>a-b)
  //   ret.push(getMid(subArr))
  // }
  // return ret

  // 2. 优化思考
  // 每次都重新slice sort得到滑动窗口数组浪费性能，只需要每次加入一个数，移出一个数即可
  // 设计一个数据结构
  //    用数组存储元素，维持升序排序
  //    实现add方法 用二分查找，找到应插入的位置，用splice插入
  //    实现remove 用indexOf查找 用splice移除
  //    实现getMid方法
  // 符合优先队列 Priority Queue 的特征，先进先出，单调排序
  const pq = new PriorityQueue()
  const ret=[]
  for(let i=0;i<nums.length;i++){
    pq.add(nums[i])
    if(i>k-1) pq.remove(nums[i-k])
    if(i>=k-1) ret.push(pq.getMid(k&1===1))
  }
  return ret
};

class PriorityQueue{
  constructor(){
    this.queue=[]
  }
  add(x){
    const n=this.queue.length
    // 二分查找
    let left=0,right=n-1
    while(left<=right){
      let mid=left+((right-left)/2|0) //向下取整
      if(this.queue[mid]>=x){
        right=mid-1
      }else{
        left=mid+1
      }
    }
    this.queue.splice(left, 0, x)
  }
  remove(x){
    let idx=this.queue.indexOf(x)
    this.queue.splice(idx,1)
  }
  getMid(idOdd){
    let mid=(this.queue.length/2)|0
    return idOdd ? this.queue[mid] : (this.queue[mid-1]+this.queue[mid])/2
  }
}
// @lc code=end

