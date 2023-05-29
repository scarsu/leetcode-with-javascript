/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    // 时间O(n) 空间O(n)
    const map=new Map()
    for(let num of nums){
        map.set(num,map.get(num)!==undefined?!map.get(num):false)
    }
    console.log(map)
    for(let val of map.values()){
        if(!val) return false
    }
    return true
};
