/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    // 归并排序（双指针）,O(m+n)
    let i=0,j=0
    const ret=[]
    while(i<nums1.length||j<nums2.length){
        if(i===nums1.length){
            ret.push(nums2[j])
            j++
            continue
        }
        if(j===nums2.length){
            ret.push(nums1[i])
            i++
            continue
        }
        const [id1,val1]=nums1[i]
        const [id2,val2]=nums2[j]
        if(id1===id2){
            ret.push([id1, val1+val2])
            i++
            j++
        }else if(id1<id2){
            ret.push([id1,val1])
            i++
        }else{
            ret.push([id2,val2])
            j++
        }
    }
    return ret
};
