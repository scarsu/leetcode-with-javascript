/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ret=[]
    for(let i=1;i<=n/2;i++){
        ret.push(i,-i)
    }
    if(n%2===1) ret.push(0)
    return ret
};
