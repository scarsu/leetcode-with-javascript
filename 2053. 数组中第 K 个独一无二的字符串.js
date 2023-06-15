/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    // 时间O(n) 空间O(n)
    const map=new Map()
    for(let str of arr){
        map.set(str, (map.get(str)||0)+1)
    }
    let cur=0
    for(let str of arr){
        if(map.get(str)===1&&++cur===k){
            return str
        }
    }
    return ""
};
