/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // 求前缀和最小值
    let sum=0
    let min=0
    for(let num of nums){
        sum+=num
        min=Math.min(min, sum)
    }
    return min<0?1-min:1
};
