/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
//   O(n^2)
    const n=grid.length
    for(let i=0;i<n;i++){
        if(
            grid[i][i]===0 ||
            grid[i][n-i-1]===0
        ) return false
        for(let j=0;j<n;j++){
            if((j===i||j===n-i-1)){
                if(grid[i][j]===0) return false
                continue
            }
            if(grid[i][j]!==0) return false
        }
    }
    return true
}; 
