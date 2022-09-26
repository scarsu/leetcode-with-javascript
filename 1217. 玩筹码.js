/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    // 所有奇数位 都可以无代价转移至第1位
    // 所有偶数位 都可以无代价转移至第2位
    // 最后统计奇数位、偶数位中较少的个数 返回
    if(position.length===1) return 0
    let odd=0
    let even=0
    for(let i=0;i<position.length;i++){
        if(position[i]%2===0){
            even++
        }else{
            odd++
        }
    }
    return Math.min(odd, even)
};
