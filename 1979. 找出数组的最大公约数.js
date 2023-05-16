/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    // O(logM)  M是nums中最大值
    const gcd=(a,b)=>{
        // 辗转相除法（欧几里得算法）：gcd(a,b)===gcd(b,a%b) (a>=b)
        if(a<b) [a,b]=[b,a]
        if(b===0) return a
        return gcd(b, a%b)
    }
    // O(n)
    return gcd(Math.max(...nums), Math.min(...nums))
};
