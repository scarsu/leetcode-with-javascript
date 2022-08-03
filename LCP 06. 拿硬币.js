/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  return coins.reduce((p,c)=>{
      return p+Math.ceil(c/2)
  },0)
  // let ret=0
  // for(let i=0;i<coins.length;i++){
  //     ret+=Math.ceil(coins[i]/2)
  // }
  // return ret
};