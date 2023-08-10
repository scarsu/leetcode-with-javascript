/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // O(m*n)
    // return [
    //     [...new Set(nums1.filter(i=>nums2.find(j=>j===i)===undefined))],
    //     [...new Set(nums2.filter(i=>nums1.find(j=>j===i)===undefined))],
    // ]

    // O(m+n)
    const set1=new Set(nums1)
    const set2=new Set(nums2)
    const ret1=[],ret2=[]
    for(let num of set1){
        if(!set2.has(num)) ret1.push(num)   // O(1)
    }
    for(let num of set2){
        if(!set1.has(num)) ret2.push(num)
    }
    return [ret1,ret2]
};
