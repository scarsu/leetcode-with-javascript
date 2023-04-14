/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    // 1 先排序再遍历，60%，35%,O(nlogn)
    // arr.sort((a,b)=>a-b)
    // let diff
    // for(let i=0;i<arr.length-1;i++){
    //     if(i===0){
    //         diff=arr[i]-arr[i+1]
    //     }else if(diff!==arr[i]-arr[i+1]){
    //         return false
    //     }
    // }
    // return true

    // 2 先计算出等差，再遍历，77% 96%,O(n)
    const min=Math.min(...arr)
    const max=Math.max(...arr)
    const diff=(max-min)/(arr.length-1)
    let cur=min
    while(cur<max){
        cur+=diff
        if(!arr.includes(cur)){
            return false
        }
    }
    return true
};
