/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m=grid.length
    let n=grid[0].length
    let ret=0
    for(let i=0;i<m;i++){
        // for(let j=0;j<n;j++){
        //     if(grid[i][j]<0){
        //         // 当前元素右下的全部元素均是负数
        //         ret+=(n-j)*(m-i)
        //         // 更新n边界
        //         n=j
        //         break
        //     }
        // }
        // 二分查找 找到第i行中第一个负数
        let l=0
        let r=n-1
        while(l<r){
            let mid=(l+r)/2|0
            if(grid[i][mid]<0){
                r=mid
            }else{
                l=mid+1
            }
        }
        if(l<n&&grid[i][l]<0){
            // 当前元素右下的全部元素均是负数,无需向右下遍历
            ret+=(n-l)*(m-i)
            // 更新n边界
            n=l
        }
    }
    return ret
};
