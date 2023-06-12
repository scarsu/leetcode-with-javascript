/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b)
    let sum=0
    const del=arr.length/20
    for(let i=del;i<arr.length-del;i++){
        sum+=arr[i]
    }
    return sum/(arr.length-del*2)
};
