/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    // 想办法使nums中max与min的差值最小，得到最小差值
    // 如果max-min<=2*k 最小差值是0
    // 如果max-min>2*k  最小差值是max-min-2*k
    const max=Math.max(...nums)
    const min=Math.min(...nums)
    const diff=max-min
    return diff <= 2*k ? 0 : diff-2*k
};
