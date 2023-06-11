/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    // 暴力 O(n^2) O(1)
    // let ret=0
    // for(let i=0;i<colors.length;i++){
    //     let max=0
    //     for(let j=colors.length-1;j>i;j--){
    //         if(colors[j]!==colors[i]){
    //             max=j-i
    //             break
    //         }
    //     }
    //     ret=Math.max(ret,max)
    // }
    // return ret


    // 贪心  题解
    // 因为至少存在2种颜色，所以必然有与第0号不同的颜色，也必然有与第len-1号不同的颜色，因而可以得到(至少包含1个端点的)2个答案，最优答案必为两者之一。
    // 证明思路(反证法)：
    // 如果开始和结束位置颜色不同，则可直接得出最优解中至少包含一个端点的结论。
    // 当首尾位置颜色相同，则假设最优答案中的两个位置为i，j (i < j且i != 0, j != len - 1)。如果开始位置与i位置颜色相同，则(0,j)一定比(i,j)更优；如果开始位置与i位置颜色不同，那么结束位置与i位置也不同，则(i, len-1)一定比(i, j)更优。
    const n=colors.length
    // 获得colors[0]最优解
    let max0=0
    for(let i=n-1;i>0;i--){
       if(colors[0]!==colors[i]){
           max0=i
           break
       } 
    }
    // 获得colors[n-1]最优解
    let maxn=0
    for(let i=0;i<n;i++){
       if(colors[n-1]!==colors[i]){
           maxn=n-1-i
           break
       } 
    }
    return Math.max(max0,maxn)
};
