/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 深度递归遍历 O(logn) 90% 72%
    const dfs=(left, right)=>{
        if(right<0) return null
        const tree=new TreeNode()
        if(right===left){
            tree.val=nums[left]
            return tree
        }
        const mid=(right+left+1)/2|0
        tree.val=nums[mid]
        tree.left=dfs(left,mid-1)
        if(right-left>1){
            tree.right=dfs(mid+1,right)
        }
        return tree
    }
    return dfs(0,nums.length-1)
};
