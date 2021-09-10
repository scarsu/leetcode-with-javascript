/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const sum=chalk.reduce((p,c)=>p+c,0)
  k=k%sum
  let i
  for(i=0;i<chalk.length;i++){
      k-=chalk[i]
      if(k<0) return i
  }
  return i+1
};