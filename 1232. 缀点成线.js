/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length===2) return true

    // 第一个点平移至原点（能用for循环别用forEach）
    const deltaX=coordinates[0][0]
    const deltaY=coordinates[0][1]
    for(let i=1;i<coordinates.length;i++){
        coordinates[i][0]-=deltaX
        coordinates[i][1]-=deltaY
    }

    // 能用乘法别用除法，1有精度问题 2消耗大
    const A=coordinates[1][1]
    const B=coordinates[1][0]
    for(let i=2;i<coordinates.length;i++){
        if(coordinates[i][1]*B!==coordinates[i][0]*A) return false
    }
    return true
};
