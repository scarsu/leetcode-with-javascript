/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    // O(1) O(1)
    // 等差数列求和
    const sumDiff=(i)=>{
        const count=Math.floor(n/i)
        const sum=(i+count*i)*count/2
        return sum
    }

    return sumDiff(3) + sumDiff(5) + sumDiff(7) - sumDiff(15) - sumDiff(21) - sumDiff(35) + sumDiff(105)
};
