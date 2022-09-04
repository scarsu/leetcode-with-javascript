/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows=mat.length
    const cols=mat[0].length
    const rowSpePos=new Array(rows)
    const colSpePos=new Array(cols)
    for(let i=0;i<rows;i++){
        let pos=-1
        for(let j=0;j<cols;j++){
            if(pos===-1&&mat[i][j]===1){
                pos=j
            }else if(pos>-1&&mat[i][j]===1){
                pos=-1
                break
            }
        }
        rowSpePos[i]=pos
    }
    for(let j=0;j<cols;j++){
        let pos=-1
        for(let i=0;i<rows;i++){
            if(pos===-1&&mat[i][j]===1){
                pos=i
            }else if(pos>-1&&mat[i][j]===1){
                pos=-1
                break
            }
        }
        colSpePos[j]=pos
    }
    // console.log(rowSpePos, colSpePos)

    let ret=0
    for(let i=0;i<rows;i++){
        if(rowSpePos[i]===-1) continue
        if(colSpePos[rowSpePos[i]]===i) ret++
    }
    return ret
};
