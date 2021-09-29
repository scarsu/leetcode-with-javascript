/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (51.59%)
 * Likes:    1125
 * Dislikes: 0
 * Total Accepted:    465.1K
 * Total Submissions: 899.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m
 * 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 解释：需要合并 [1] 和 [] 。
 * 合并结果是 [1] 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
 * 输出：[1]
 * 解释：需要合并的数组是 [] 和 [1] 。
 * 合并结果是 [1] 。
 * 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
 * 
 */

// @lc code=start

// 方法一 合并后排序 80% 83%
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,n,...nums2)
//     nums1.sort((a,b)=>a-b)
// };

// 方法二 双指针 80% 88% O(m+n) O(m+n)
// var merge = function(nums1, m, nums2, n) {
//     const sorted=[]
//     let l=0,r=0
//     while(l<m || r<n){
//         if(l===m){
//             sorted.push(nums2[r++])
//         }else if(r===n){
//             sorted.push(nums1[l++])
//         }else if(nums1[l]<=nums2[r]){
//             sorted.push(nums1[l++])
//         }else{
//             sorted.push(nums2[r++])
//         }
//     }
//     // 最终要返回nums
//     for(let i=0;i<m+n;i++){
//         nums1[i]=sorted[i]
//     }
//     return nums1
// };

// 方法三  反向 双指针 O(m+n) O(1)
// 双指针逆向遍历 并将每次比较的结果 从nums1末尾开始存储
var merge = function(nums1, m, nums2, n) {
  let l=m-1
  let r=n-1
  let insert=m+n-1
  while(l>=0 || r>=0){
      if(l===-1){
          nums1[insert--]=nums2[r--]
      }else if(r===-1){
          nums1[insert--]=nums1[l--]
      }else if(nums1[l]<=nums2[r]){
          nums1[insert--]=nums2[r--]
      }else{
          nums1[insert--]=nums1[l--]
      }
  }
  return nums1
};
// @lc code=end

