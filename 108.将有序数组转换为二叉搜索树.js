/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (76.01%)
 * Likes:    849
 * Dislikes: 0
 * Total Accepted:    191.7K
 * Total Submissions: 252.1K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-10,-3,0,5,9]
 * 输出：[0,-3,9,-10,null,5]
 * 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,3]
 * 输出：[3,1]
 * 解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * nums 按 严格递增 顺序排列
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 中序遍历
  const dfs=(node,l,r)=>{
      if(l>r) return
      const mid=(l+r)/2|0
      node.val=nums[mid]
      if(l<mid){
          node.left=new TreeNode()
          dfs(node.left,l,mid-1)
      }
      if(mid<r){
          node.right=new TreeNode()
          dfs(node.right,mid+1,r)
      }
  }
  const root=new TreeNode()
  dfs(root,0,nums.length-1)
  return root
};
// @lc code=end

