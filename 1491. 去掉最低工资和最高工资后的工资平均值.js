/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min=Number.MAX_SAFE_INTEGER
    let max=1000
    let sum=0
    for(let i=0;i<salary.length;i++){
        min=Math.min(min,salary[i])
        max=Math.max(max,salary[i])
        sum+=salary[i]
    }
    return (sum-min-max)/(salary.length-2)
};
