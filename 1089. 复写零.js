/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // 先找到新数组最末尾元素位于原数组的位置top
    const n=arr.length
    let count=0
    let top=0
    while(top<n){
        if(arr[top]===0){
            count+=2
        }else{
            count++
        }
        if(count>=n){
            break
        }
        top++
    }
    // 双指针，从top位置从后向前遍历修改
    let i=n-1
    // 特殊情况
    if(count>n&&arr[top]===0){
        arr[i]=0
        top--
        i--
    }
    console.log(top)
    while(i>=0){
        arr[i]=arr[top]
        if(arr[top]===0&&i>0){
            arr[--i]=0
        }
        top--
        i--
    }
};
