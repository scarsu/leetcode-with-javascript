/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    // O(2^n) 20% 45%
    let sum=0
    const dfs = (i, cur) => {
        if (i >= nums.length) {
            sum+=cur
            return
        }
        dfs(i + 1, cur^nums[i])
        dfs(i + 1, cur)
    }
    dfs(0, 0)
    return sum
};
