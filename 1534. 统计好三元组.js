/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    // O(n^3)
    let ret=0
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            // 提前判断终止内层的计算
            if(Math.abs(arr[j]-arr[i])<=a){
                for(let k=j+1;k<arr.length;k++){
                    if(Math.abs(arr[j]-arr[k])<=b&&Math.abs(arr[i]-arr[k])<=c){
                        ret++
                    }
                }
            }
        }
    }
    return ret
};
