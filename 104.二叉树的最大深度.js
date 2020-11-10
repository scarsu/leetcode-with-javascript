/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (75.29%)
 * Likes:    733
 * Dislikes: 0
 * Total Accepted:    301.1K
 * Total Submissions: 399.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // 方法一 递归/深度优先遍历
  // 左右子树深度为l,r的二叉树，其深度为max(l,r)+1
  // O(n)
  const dps = (node, level)=>{
    if(node===null) return level
    return Math.max(dps(node.left, level),dps(node.right, level)) + 1
  }
  return root!==null ? dps(root, 0) : 0
};
// @lc code=end

