/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)
    let minDiff=Number.MAX_SAFE_INTEGER
    let ret=[]
    for(let i=0;i<arr.length-1;i++){
        const diff=arr[i+1]-arr[i]
        if(diff<minDiff){
            ret=[[arr[i],arr[i+1]]]
            minDiff=diff
        }else if(diff===minDiff){
            ret.push([arr[i],arr[i+1]])
        }
    }
    return ret
};
