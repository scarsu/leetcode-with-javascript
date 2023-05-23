/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    // 排序 + 遍历
    // 时间O(n)  空间O(1)
    // nums.sort((a,b)=>a-b)
    // let i=0
    // let diff=0
    // let ret=0
    // while(i<nums.length){
    //     nums[i]-=diff
    //     if(nums[i]>0){
    //         diff+=nums[i]
    //         ret++
    //         i++
    //     }else{
    //         i++
    //     }
    // }
    // return ret


    // 贪心 + 哈希集合
    // 最少操作数=数组中不同值的个数
    // 时间O(n)  空间O(logn)
    const set =new Set()
    for(let num of nums){
        if(num>0) set.add(num)
    }
    return set.size
};
