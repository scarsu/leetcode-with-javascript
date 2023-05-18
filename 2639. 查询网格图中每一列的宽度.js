/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const m=grid.length
    const n=grid[0].length
    const ret=new Array(n).fill(0)
    for(let i=0;i<n;i++){
        let max=-1
        for(let j=0;j<m;j++){
            // -10^9 <= grid[r][c] <= 10^9 九位长度不会触发科学记数法 可以用toString
            max=Math.max(max,grid[j][i].toString().length)
        }
        ret[i]=max
    }
    return ret
};
