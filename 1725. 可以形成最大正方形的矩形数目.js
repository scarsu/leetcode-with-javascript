/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    // O(n) O(1)
    let max=0
    let maxCount=0
    for(let item of rectangles){
        const cur=Math.min(item[0],item[1])
        if(cur>max){
            max=cur
            maxCount=1
        }else if(cur===max){
            maxCount++
        }
    }
    return maxCount
};
