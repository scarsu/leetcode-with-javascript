/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function(time, fruits, limit) {
    return fruits.reduce((prev,cur)=>prev+Math.ceil(cur[1]/limit)*time[cur[0]],0)
};
