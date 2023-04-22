/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // O(n) O(1)
    let ret=0
    for(let i=1;i<points.length;i++){
        ret+=Math.max(
            Math.abs(points[i][0]-points[i-1][0]),
            Math.abs(points[i][1]-points[i-1][1])
        )
    }
    return ret
};
