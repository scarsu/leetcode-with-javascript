/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (55.17%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 41.9K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 示例 1:
 * 
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 * 
 * 示例 2:
 * 
 * 输入: [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 * 
 * 说明:
 * 
 * 
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 常规sort */
// var maximumGap = function(nums) {
//   if(nums.length<2) return 0
//   let max=0
//   nums.sort((a,b)=>a-b)
//   for(let i=0;i<nums.length-1;i++){
//     max = Math.max(max, Math.abs(nums[i+1]-nums[i]))
//   }
//   return max
// };

/* 快速排序、归并排序等均需要 O(N*logN) 的时间复杂度 */

/* 基数排序O(n) */
// var maximumGap = function(nums) {
//   const n = nums.length;
//   if (n < 2) {
//     return 0;
//   }
//   let exp = 1;  //基数（起始为 个位数
//   const buf = new Array(n).fill(0);
//   const maxVal = Math.max(...nums); //O(n)

//   while (maxVal >= exp) { // 基数起始位个位数，循环直至基数>最大值
//     const cnt = new Array(10).fill(0);
//     for (let i = 0; i < n; i++) {
//       // 取基数位的值 存至cnt数组
//       let digit = Math.floor(nums[i] / exp) % 10;
//       cnt[digit]++;
//     }
//     // 将nums原数组按照 cnt和基数排序 得到buf作为新的nums
//     for (let i = 1; i < 10; i++) {
//       cnt[i] += cnt[i - 1];
//     }
//     for (let i = n - 1; i >= 0; i--) {
//       let digit = Math.floor(nums[i] / exp) % 10;
//       buf[cnt[digit] - 1] = nums[i];
//       cnt[digit]--;
//     }
//     nums.splice(0, n, ...buf); // 用buf替换nums，进行下一轮基数排序
//     exp *= 10;  //基数*10
//   }
  
//   let ret = 0;
//   for (let i = 1; i < n; i++) {
//     ret = Math.max(ret, nums[i] - nums[i - 1]);
//   }
//   return ret;
// };

/* 桶排序O(n) */
// 长度为n的数组 最大值最小值为max,min，则最大间距的最小值d为 max-min/(n-1)
// 将数组[min,max] 划分为长度为d的桶，则桶的尺寸bucketSize = (max-min/n)+1
var maximumGap = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  const d = Math.max(1, Math.floor(maxVal - minVal) / (n - 1));
  const bucketSize = Math.floor((maxVal - minVal) / d) + 1;

  // bucket桶的初始值 [[-1,-1], [-1,-1], ..... []]
  const bucket = new Array(bucketSize).fill(0).map(x => new Array(2).fill(-1));

  // bucket桶的结构   [[min0,max0], [min1,max2], ..... []]
  for (let i = 0; i < n; i++) {
    const idx = Math.floor((nums[i] - minVal) / d);
    if (bucket[idx][0] === -1) {
      bucket[idx][0] = bucket[idx][1] = nums[i];
    } else {
      bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
      bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
    }
  }

  let ret = 0;
  let prev = -1;
  // 遍历找出 相邻桶之间的最大差值(后桶min-前桶max)
  for (let i = 0; i < bucketSize; i++) {
    if (bucket[i][0] == -1) {
      continue;
    }
    if (prev != -1) {
      ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
    }
    prev = i;
  }
  return ret;
};

// @lc code=end

