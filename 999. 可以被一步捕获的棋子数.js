/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    // 找到R位置
    // 从R所在位置开始 向上下左右查找
    let rPos
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(board[i][j]==='R'){
                rPos=[i,j]
                break
            }
        }
        if(rPos) break
    }
    let ret=0
    // 方向数组
    const directions=[
        [-1,0],
        [1,0],
        [0,-1],
        [0,1],
    ]
    for([dx,dy] of directions){
        for(let step=0;;++step){
            const curX=rPos[0]+step*dx
            const curY=rPos[1]+step*dy
            if(curX<0||curX>=8||curY<0||curY>=8) break
            const cur=board[curX][curY]
            if(cur==='p'){
                ret++
                break
            }else if(cur==='B'){
                break
            }
        }
    }
    return ret
};
