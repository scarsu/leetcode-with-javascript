/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n=grid.length
    const ret=[]
    for(let i=0;i<=n-3;i++){
        ret.push([])
        for(let j=0;j<=n-3;j++){
            // 以i，j为起点的3*3矩阵的最大值
            const max=Math.max(
                grid[i][j],
                grid[i][j+1],
                grid[i][j+2],
                grid[i+1][j],
                grid[i+1][j+1],
                grid[i+1][j+2],
                grid[i+2][j],
                grid[i+2][j+1],
                grid[i+2][j+2],
            )
            ret[i].push(max)
        }
    }
    return ret
};
