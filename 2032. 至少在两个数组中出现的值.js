/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    // O(n1*n2+n1*n3+n2*n3)
    // let ret=[]
    // for(let num of nums1){
    //     if(nums2.includes(num)&&!ret.includes(num)){
    //         ret.push(num)
    //     }else if(nums3.includes(num)&&!ret.includes(num)){
    //         ret.push(num)
    //     }
    // }
    // for(let num of nums2){
    //     if(nums3.includes(num)&&!ret.includes(num)){
    //         ret.push(num)
    //     }
    // }
    // return ret

    // 哈希表 位运算 O(n1+n2+n3)
    const map=new Map()
    // 用三位二进制数来记录num在三个数组中的出现
    for(let num of nums1){
        map.set(num,1)
    }
    // 10 按位或
    for(let num of nums2){
        map.set(num,(map.get(num)||0)|2)
    }
    // 100 按位或
    for(let num of nums3){
        map.set(num,(map.get(num)||0)|4)
    }
    const ret=[]
    for(let [k,v] of map.entries()){
        if((v&(v-1))!==0) ret.push(k)
    }
    return ret
};
