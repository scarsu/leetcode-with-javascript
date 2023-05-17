/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    // 二分查找 找到最后一个负整数位置&第一个正整数位置
    // O(logn)
    let lastNeg
    let l=0
    let r=nums.length-1
    while(l<=r){
        const mid=(l+r)/2|0
        console.log('lastNeg',l,r,mid)
        if(nums[mid]>=0){
            r=mid-1
        }else if(mid===nums.length-1||nums[mid+1]>=0){
            lastNeg=mid
            break
        }else{
            l=mid+1
        }
    }
    if(lastNeg===nums.length) return nums.length
    const negCount=lastNeg>=0?lastNeg+1:0
    let firstPos
    l=lastNeg||0
    r=nums.length-1
    while(l<=r){
        const mid=(l+r)/2|0
        console.log('firstPos',l,r,mid)
        if(nums[mid]<=0){
            l=mid+1
        }else if(mid===0||nums[mid-1]<=0){
            firstPos=mid
            break
        }else{
            r=mid-1
        }
    }
    const posCount=firstPos>=0?nums.length-firstPos:0
    return Math.max(posCount,negCount)
};
