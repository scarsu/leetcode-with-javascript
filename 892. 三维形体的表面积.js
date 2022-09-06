/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const n=grid.length
    let total=0
    let stickSurface=0
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            const cur=grid[i][j]
            total+=cur
            if(cur>1){
                stickSurface+=cur-1
            }
            if(j+1<n){
                stickSurface+=Math.min(cur, grid[i][j+1])
            }
            if(i+1<n){
                stickSurface+=Math.min(cur, grid[i+1][j])
            }
        }
    }
    return total*6-stickSurface*2
};
