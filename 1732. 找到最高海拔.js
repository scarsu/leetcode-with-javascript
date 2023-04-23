/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const height=new Array(gain.length+1).fill(0)
    let max=0
    for(let i=1;i<=gain.length;i++){
        height[i]=height[i-1]+gain[i-1]
        if(height[i]>max) max=height[i]
    }
    return max
};
