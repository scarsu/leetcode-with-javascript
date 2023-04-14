/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // 一次遍历 逐行取数 O(n)
    const n=mat.length
    let ret=0
    for(let i=0;i<n;i++){
        ret+=mat[i][i]
        if(i!==n-i-1) ret+=mat[i][n-i-1]
    }
    return ret
};
