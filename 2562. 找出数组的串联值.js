/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    // O(n)
    let i=0,j=nums.length-1
    let ret=0
    while(i<=j){
        if(i===j){
            ret+=nums[i]
            break
        }else{
            ret+=parseInt(nums[i]+''+nums[j])
        }
        i++
        j--
    }
    return ret
};
