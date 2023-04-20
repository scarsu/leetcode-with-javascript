/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    // 将每一行行排序，对每一列的最大值求和
    const m=grid.length
    const n=grid[0].length
    let ret=0
    for(let i=0;i<m;i++){
        grid[i].sort((a,b)=>a-b)
    }
    for(let i=0;i<n;i++){
        let max=0
        for(let j=0;j<m;j++){
            max=Math.max(max, grid[j][i])
        }
        ret+=max
    }
    return ret
};
