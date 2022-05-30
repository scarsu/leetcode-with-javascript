/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  // TODO 二分


  // 遍历 找到第一个非增的位置
  for(let i=1;i<numbers.length;i++){
      if(numbers[i-1]>numbers[i]){
          return numbers[i]
      }
  }
  return numbers[0]
};