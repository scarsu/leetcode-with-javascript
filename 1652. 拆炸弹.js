/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    // 两重遍历
    // const n=code.length
    // return code.map((num,idx)=>{
    //     if(k==0) return 0
    //     let ret=0
    //     const absK=Math.abs(k)
    //     for(i=1;i<=absK;i++){
    //         ret+=code[(idx+i*(k>0?1:-1)+n*2)%n]
    //     }
    //     return ret
    // })

    // 滑动窗口
    const n=code.length
    const ret=new Array(n).fill(0)
    if(k===0) return ret
    for(let i=0;i<n;i++){
        if(i===0){
            const absK=Math.abs(k)
            let sum=0
            for(j=1;j<=absK;j++){
                sum+=code[(i+j*(k>0?1:-1)+n*2)%n]
            }
            ret[0]=sum
        }else{
            const next=k>0?code[(i+k)%n]:code[i-1]
            const last=k>0?code[i]:code[(i+k+n-1)%n]
            ret[i]=ret[i-1]+next-last
        }
    }
    return ret
};
