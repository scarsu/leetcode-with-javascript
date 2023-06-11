/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 动态规划 O(n) O(1)
    // const dp=new Array(cost.length+1).fill(0)
    // dp[0]=cost[0]
    // dp[1]=cost[1]
    // for(let i=2;i<=cost.length;i++){
    //     dp[i]=Math.min(dp[i-1]+(cost[i]||0), dp[i-2]+(cost[i]||0))
    // }
    // return dp[cost.length]

    // dp[n]只与dp[n-1],dp[n-2]有关，所以可以使用动态数组降低空间复杂度到O(1)
    let last2=cost[0]
    let last1=cost[1]
    for(let i=2;i<=cost.length;i++){
        const cur=Math.min(last1+(cost[i]||0), last2+(cost[i]||0))
        last2=last1
        last1=cur
    }
    return last1
};
