/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let i=m-1
  let j=n-1
  let last=m+n-1
  while(j>=0){
      if(i===-1 || B[j]>A[i]){
          A[last]=B[j]
          last--
          j--
      }else if(B[j]===A[i]){
          A[last]=B[j]
          A[last-1]=B[j]
          last-=2
          j--
          i--
      }else{
          A[last]=A[i]
          last--
          i--
      }
  }
};