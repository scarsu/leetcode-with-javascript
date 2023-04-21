/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let ret=0
    const dfs=(index, arr)=>{
        // console.log(index,arr)
        if(arr.length>=3){
            ret++
            return
        }
        if(index>=nums.length) return
        if(arr.length + nums.length - index < 3) return
        if(arr.length===0){
            dfs(index+1, [nums[index]])
            dfs(index+1, [])
        }else{
            if(nums[index]-arr[arr.length-1]>diff){
                return
            }
            if(nums[index]-arr[arr.length-1]===diff){
                dfs(index+1, [...arr, nums[index]])
            }else{
                dfs(index+1, arr)
            }
        }
    }
    dfs(0, [])
    return ret
};
