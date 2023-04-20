/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    // O(n) 22% 90%
    // return nums.reduce((prev,cur)=>{
    //     prev+=cur
    //     while(cur>0){
    //         prev-=cur%10
    //         cur=Math.floor(cur/10)
    //     }
    //     return prev
    // },0)

    // O(n) 50% 80%
    let ret=0
    for(let num of nums){
        ret+=num
        while(num>0){
            ret-=num%10
            num=Math.floor(num/10)
        }
    }
    return ret
};
