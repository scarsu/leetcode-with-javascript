/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (54.97%)
 * Likes:    729
 * Dislikes: 0
 * Total Accepted:    339.5K
 * Total Submissions: 606K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给你两个整数数组 nums1 和 nums2
 * ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 哈希表  空间复杂度较高  时间复杂度On
// var intersect = function(nums1, nums2) {
//     const ret=[]
//     const map=new Map()
//     for(let i=0;i<nums1.length;i++){
//         if(!map.has(nums1[i])){
//             map.set(nums1[i], 1)
//         }else{
//             map.set(nums1[i], map.get(nums1[i])+1)
//         }
//     }
//     for(let i=0;i<nums2.length;i++){
//         if(map.has(nums2[i]) && map.get(nums2[i])>0){
//             map.set(nums2[i], map.get(nums2[i])-1)
//             ret.push(nums2[i])
//         }
//     }
//     return ret
// };
// 排序 + 双指针  时间复杂度瓶颈在于排序，空间复杂度较低
var intersect = function(nums1, nums2) {
  const ret=[]
  nums1.sort((a,b)=>a-b)
  nums2.sort((a,b)=>a-b)

  let i=0,j=0
  const m=nums1.length
  const n=nums2.length
  
  while(i<m&&j<n){
      if(nums1[i]<nums2[j]){
          i++
      }else if(nums1[i]>nums2[j]){
          j++
      }else{
          ret.push(nums1[i])
          i++
          j++
      }
  }
  return ret
};
// @lc code=end

