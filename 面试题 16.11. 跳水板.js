/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    // 数学
    const ret=[]
    if(k===0) return ret
    if(shorter===longer) return [shorter*k]
    // 1.遍历 乘法
    // for(let i=k;i>=0;i--){
    //     const length=shorter*i+longer*(k-i)
    //     ret.push(length)
    // }
    // 2.遍历 加减法
    ret.push(shorter*k)
    for(let i=k-1;i>=0;i--){
        const length=ret[ret.length-1]+longer-shorter
        ret.push(length)
    }
    return ret
};
