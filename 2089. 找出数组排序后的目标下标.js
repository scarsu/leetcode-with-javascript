/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    // // 排序O(logn)
    // nums.sort((a,b)=>a-b)
    // const ret=[]
    // // 遍历O(n)
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===target){
    //         ret.push(i)
    //     }else if(nums[i]>target){
    //         break
    //     }
    // }
    // return ret

    // O(n)
    let count=0,left=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target) count++
        if(nums[i]<target) left++
    }
    const ret=[]
    for(let i=left;i<count+left;i++){
        ret.push(i)
    }
    return ret
};
