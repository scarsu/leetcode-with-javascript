/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  const n=arr.length

  // 边界
  if(arr[0]>arr[1]) return 0
  if(arr[n-1]>arr[n-2]) return n-1

  // 二分查找
  let l=0,r=n-1
  while(l<=r){
      let mid=(l+r)/2|0
      if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]){
          return mid
      }else if(arr[mid-1]<arr[mid]){
          l=mid
      }else{
          r=mid
      }
  }
};