/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 哈希表
  const map=new Map()
  const n=nums.length
  for(let i=0;i<n;i++){
    let num=nums[i]
    if(map.has(num)){
      map.set(num,map.get(num)+1)
    }else{
      map.set(num,1)
    }

    if(map.get(num)>(n/2)) return num
  }
  return -1
};