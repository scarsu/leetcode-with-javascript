/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    // O(n) 哈希表
    const set=new Set()
    for(let num of nums){
        set.add(num)
    }
    let ret=-1
    for(let num of nums){
        if(set.has(-num)){
            ret=Math.max(ret, Math.abs(num))
        }
    }
    return ret
};
