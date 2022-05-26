/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 这道题在原书上绝对不是简单级别啊！
  // 它考察的是程序员的沟通能力，先问面试官要时间/空间需求！！！
  // 只是时间优先就用字典，
  // 还有空间要求，就用指针+原地排序数组，
  // 如果面试官要求空间O(1)并且不能修改原数组，还得写成二分法！！！

  // 哈希集合 时间On 空间On
  // const set=new Set()
  // for(let i=0;i<nums.length;i++){
  //     if(set.has(nums[i])){
  //         return nums[i]
  //     }else{
  //         set.add(nums[i])
  //     }
  // }

  // 数组 时间On 空间On
  // const arr=new Array(nums.length).fill(0)
  // for(let i=0;i<nums.length;i++){
  //     if(arr[nums[i]]>0){
  //         return nums[i]
  //     }else{
  //         arr[nums[i]]++
  //     }
  // }

  // 原地修改 空间O1
  let i=0
  while(i<nums.length){
      if(i!==nums[i]){
          let temp=nums[nums[i]]
          if(temp===nums[i]) return nums[i]
          nums[nums[i]]=nums[i]
          nums[i]=temp
      }else{
          i++
      }
  }

};