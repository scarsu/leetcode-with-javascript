/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function(gem, operations) {
    // 模拟 遍历O(n)
    for(let op of operations){
        const [x,y]=op
        const diff=gem[x]/2|0
        gem[x]-=diff
        gem[y]+=diff
        // console.log(gem)
    }
    return Math.max(...gem)-Math.min(...gem)
};
