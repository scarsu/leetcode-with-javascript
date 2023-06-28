/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    // 遍历 用乘法代替除法 计算除数和被除数 1/(a+1/b)=b/(ab+1) 
    // O(n)
    const n=cont.length
    let dividend=cont[n-1]  // 被除数
    let divisor=1   // 除数
    for(let i=n-2;i>=0;i--){
        const temp=divisor
        divisor=dividend
        dividend=cont[i]*dividend+temp
    }
    // 不需要求除数和被除数的最大公约数
    // const gcd=getGcd(divisor,dividend)
    // return [dividend/gcd, divisor/gcd]
    return [dividend, divisor]
};

// const getGcd=function(a,b){
//     // 辗转相除法
//     if(a<b) [a,b]=[b,a]
//     const mod=a%b
//     if(mod===0) return b
//     return getGcd(b,mod)
// }
