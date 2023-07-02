/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    const manhadon=points.map(i=>{
        if(i[0]!==x&&i[1]!==y) return Number.MAX_SAFE_INTEGER
        return Math.abs(i[0]-x) + Math.abs(i[1]-y)
    })
    const min=Math.min(...manhadon)
    if(min===Number.MAX_SAFE_INTEGER) return -1
    return manhadon.findIndex(i=>i===min)
};
