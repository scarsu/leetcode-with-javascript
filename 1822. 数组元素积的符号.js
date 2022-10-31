/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let flag=1
    for(let num of nums){
        if(num===0) return 0
        if(num<0){
            flag=-flag
        }
    }
    return flag
};
