/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  // 排序后取前k个，O(nlogn)
  arr.sort((a,b)=>a-b)
  return arr.slice(0,k)
};