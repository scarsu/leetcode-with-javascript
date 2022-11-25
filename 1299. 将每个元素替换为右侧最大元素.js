/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    arr.push(-1)
    for(let i=arr.length-2;i>=0;i--){
        arr[i]=Math.max(arr[i+1], arr[i])
    }
    arr.shift()
    return arr
};
