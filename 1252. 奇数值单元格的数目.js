/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    // 模拟
    // const matrix=new Array(m).fill(0).map(i=>new Array(n).fill(0))
    // for(let indice of indices){
    //     const [r,c]=indice
    //     for(let i=0;i<n;i++){
    //         matrix[r][i]++
    //     }
    //     for(let i=0;i<m;i++){
    //         matrix[i][c]++
    //     }
    // }
    // let ret=0
    // for(let i=0;i<m;i++){
    //     for(let j=0;j<n;j++){
    //         if(matrix[i][j]%2===1) ret++
    //     }
    // }
    // return ret

    // 空间优化
    // const rows=new Array(m).fill(0)
    // const columns=new Array(n).fill(0)
    // indices.map(i=>i[0]).forEach(r=>rows[r]++)
    // indices.map(i=>i[1]).forEach(c=>columns[c]++)
    // let ret=0
    // for(let i=0;i<m;i++){
    //     for(let j=0;j<n;j++){
    //         if((rows[i]+columns[j])%2===1) ret++
    //     }
    // }
    // return ret

    // 计数优化
    const rows=new Array(m).fill(0)
    const columns=new Array(n).fill(0)
    indices.map(i=>i[0]).forEach(r=>rows[r]++)
    indices.map(i=>i[1]).forEach(c=>columns[c]++)
    // 奇数+偶数=奇数
    let ret=0
    let colOdd=0
    for(let i=0;i<n;i++){
        if(columns[i]%2===1) colOdd++
    }
    for(let i=0;i<m;i++){
        if(rows[i]%2===0){
            ret+=colOdd
        }else{
            ret+=n-colOdd
        }
    }
    return ret
};
