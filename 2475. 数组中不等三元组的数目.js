/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    // dfs 
    // let ret=0
    // const dfs=(cur,i)=>{
    //     if(cur.length===3){
    //         ret++
    //         return 
    //     }
    //     if(i>=nums.length) return
    //     if(cur.indexOf(nums[i])===-1){
    //         dfs([...cur,nums[i]],i+1)
    //         dfs(cur,i+1)
    //     }else{
    //         dfs(cur,i+1)
    //     }

    // }
    // dfs([],0)
    // return ret


    // 哈希表 O(n)
    const map=new Map()
    for(let num of nums){
        map.set(num, (map.get(num)||0)+1)
    }
    if(map.size<3) return 0
    // 数学
    let ret=0,pre=0,after=nums.length
    for(let val of map.values()){
        after-=val
        ret+=pre*val*after
        pre+=val
    }
    return ret
};
