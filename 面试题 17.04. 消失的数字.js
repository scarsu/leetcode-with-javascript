/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 1. 数学
    // const n=nums.length
    // let sum=0
    // for(let num of nums){
    //     sum+=num
    // }
    // return n*(n+1)/2-sum

    // 2. 位运算  异或运算结合律
    // x⊕x=0 和 x⊕0=x
    // 在数组中一次加入数字0-n，数组中除了遗漏的数只出现一次，其他数字都出现两次
    // 再对数组中所有数进行异或运算，最后的结果，就是只出现一次的遗漏数字
    const n=nums.length
    for(let i=0;i<=n;i++){
        nums.push(i)
    }
    let ret=0
    for(let i=0;i<nums.length;i++){
        ret^=nums[i]
    }
    return ret
};
