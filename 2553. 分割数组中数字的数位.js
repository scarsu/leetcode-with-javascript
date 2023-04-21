/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    // 22% 88%
    // const ret=[]
    // for(let num of nums){
    //     const cur=[]
    //     while(num>0){
    //         cur.unshift(num%10)
    //         num=Math.floor(num/10)
    //     }
    //     ret.push(...cur)
    // }
    // return ret


    // 6% 15%
    // return nums.reduce((prev,cur)=>{
    //     return [...prev,...cur.toString().split('')]
    // }, [])


    // 27% 52%
    return nums.join('').split('')
};
