/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    // O(mn) O(1)
    const ret=[0,0]
    for(let i=0;i<mat.length;i++){
        // const count=mat[i].filter(j=>j===1).length
        let count=0
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]===1) count++
        }
        if(count>ret[1]){
            ret[0]=i
            ret[1]=count
        }
    }
    return ret
};
