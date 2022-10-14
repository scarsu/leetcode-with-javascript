/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m=grid.length
    const n=grid[0].length
    const arr=grid.flat()
    let idx=arr.length - k%arr.length
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(idx>arr.length-1){
                idx=0
            }
            grid[i][j]=arr[idx]
            idx++
        }
    }
    return grid
};
