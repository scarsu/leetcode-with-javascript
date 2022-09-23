/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // 暴力
    // const hashMap=new Map()
    // let max=0
    // for(let num of deck){
    //     if(!hashMap.has(num)){
    //         hashMap.set(num, 1)
    //     }else{
    //         hashMap.set(num, hashMap.get(num)+1)
    //     }
    //     max=Math.max(max, hashMap.get(num))
    // }
    // const counts=[...hashMap.values()]
    // for(let i=2;i<=max;i++){
    //     if(counts.every(c=>c%i===0)){
    //         return true
    //     }
    // }
    // return false
    
    // 求所有数字出现次数的最大公约数
    const countArr=new Array(10000).fill(0)
    for(let num of deck){
        countArr[num]++
    }
    // 辗转相除法 求最大公约数
    const gcd=(x,y)=>{
        return x == 0 ? y : gcd(y % x, x);
    }
    let ret
    for(let i=0;i<countArr.length;i++){
        if(countArr[i]>0){
            ret=ret?gcd(ret, countArr[i]):countArr[i]
        }
    }
    return ret>1
};
