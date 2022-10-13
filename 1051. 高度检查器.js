/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    return heights.slice().sort((a,b)=>a-b).filter((h,i)=>h!==heights[i]).length
};
