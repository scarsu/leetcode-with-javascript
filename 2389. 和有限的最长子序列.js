/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    // nums排序后 求前缀和数组
    // O(nlogn)
    const minSubSum=nums.sort((a,b)=>a-b).reduce((p,c)=>{
        p.push(p[p.length-1]+c)
        return p
    }, [0])
    // 二分查找到<query[i]的最大数组元素
    // O(mlogn)
    return queries.reduce((p,c)=>{
        p.push(binarySearch(minSubSum,c)-1)
        return p
    },[])
    // 最终时间复杂度是O((m+n)*logn)
};

const  binarySearch = (arr, target) => {
    let low = 1, high = arr.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
