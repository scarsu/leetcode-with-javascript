/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map=new Map()
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,1)
        }else{
            map.set(num,map.get(num)+1)
        }
    }
    nums.sort((a,b)=>{
        if(map.get(a)===map.get(b)){
            return b-a
        }else{
            return map.get(a) - map.get(b)
        }
    })
    return nums
};
