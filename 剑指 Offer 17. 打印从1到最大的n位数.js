/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  // 遍历
  // const ret=[]
  // let i=1
  // while(i<10**n){
  //     ret.push(i)
  //     i++
  // }
  // return ret

  // js语法，效率最高
  return new Array(10**n-1).fill(0).map((i,index)=>index+1)

  // 考虑大数字，返回数字的字符串格式
  // n位[0,9]的全排列，用dfs
  // 要按顺序输出，所以配合遍历  每个长度位数调用一次dfs生成全排列
  // const ret=[]
  // const dfs=(str,len)=>{
  //     if(str.length===len){
  //         ret.push(str)
  //         return
  //     }
  //     for(let i=0;i<10;i++){
  //         dfs(str+i, len)
  //     }
  // }

  // // 两层遍历  外层控制位数，内层控制字符串的首位
  // for(let i=1;i<=n;i++){
  //     for(let j=1;j<10;j++){
  //         dfs(j+'', i)
  //     }
  // }
  // return ret
};