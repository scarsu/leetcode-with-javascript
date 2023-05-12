/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function(demand) {
    const n=demand.length
    // 二维数组
    const charMap=new Array(26).fill(0).map(i=>new Array(n).fill(0))
    for(let i=0;i<demand.length;i++){
        for(let c of demand[i]){
            const idx=c.charCodeAt(0)-'a'.charCodeAt(0)
            charMap[idx][i]++
        }
    }
    return charMap.reduce((p,c)=>p+Math.max(...c),0)
};
