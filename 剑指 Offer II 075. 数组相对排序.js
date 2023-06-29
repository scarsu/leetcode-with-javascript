/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // // 自定义排序 比较排序 O(m*nlogn) 50% 77%
    // arr1.sort((a,b)=>{
    //     const ai=arr2.indexOf(a)
    //     const bi=arr2.indexOf(b)
    //     if(ai===-1&&bi===-1) return a-b
    //     if(ai===-1&&bi>-1) return 1
    //     if(ai>-1&&bi===-1) return -1
    //     return ai-bi
    // })
    // return arr1

    // 先构造哈希表 再排序 O(m+nlogn) 96% 83%
    const map=new Map()
    for(let i=0;i<arr2.length;i++){
        map.set(arr2[i], i)
    }
    arr1.sort((a,b)=>{
        const ai=map.get(a)
        const bi=map.get(b)
        if(ai===undefined&&bi===undefined) return a-b
        if(ai===undefined&&bi!==undefined) return 1
        if(ai!==undefined&&bi===undefined) return -1
        return ai-bi
    })
    return arr1

    // 计数排序，arr[i]的元素都在0-1000之间 33% 12%
    // const arrMap=new Array(1001).fill(0)
    // for(num of arr1){
    //     arrMap[num]++
    // }
    // const ret=[]
    // for(num of arr2){
    //     const count=arrMap[num]
    //     if(count>0){
    //         ret.push(...new Array(count).fill(num))
    //     }
    //     arrMap[num]=0
    // }
    // for(let i=0;i<arrMap.length;i++){
    //     const count=arrMap[i]
    //     if(count>0){
    //         ret.push(...new Array(count).fill(i))
    //     }
    // }
    // return ret
};
