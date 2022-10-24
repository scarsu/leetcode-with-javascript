/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // 哈希表
    // const map=new Map()
    // let sum=0
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         map.set(nums[i],map.get(nums[i])+1)
    //     }else{
    //         map.set(nums[i],1)
    //     }
    // }
    // for(let [key,value] of map.entries()){
    //     if(value===1) sum+=key
    // }
    // return sum

    // 一次遍历，标记数字出现状态：0未出现 1出现一次 2出现1次以上
    let sum=0
    const map=new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i]) && map.get(nums[i])===2){
            continue
        }else if(map.has(nums[i]) && map.get(nums[i])===1){
            sum-=nums[i]
            map.set(nums[i],2)
        }else{
            sum+=nums[i]
            map.set(nums[i],1)
        }
    }
    return sum
};
