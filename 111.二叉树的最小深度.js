/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (48.49%)
 * Likes:    596
 * Dislikes: 0
 * Total Accepted:    271.5K
 * Total Submissions: 558.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明：叶子节点是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数的范围在 [0, 10^5] 内
 * -1000 
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  const dfs=(node,prevH=0,minH=Number.MAX_SAFE_INTEGER)=>{
      if(node){
          if(!node.left&&!node.right){
              // 到达叶子节点
              return Math.min(minH,prevH+1)
          }
          let lh=Number.MAX_SAFE_INTEGER,rh=Number.MAX_SAFE_INTEGER
          if(node.left) lh=dfs(node.left,prevH+1,minH)
          if(node.right) rh=dfs(node.right,prevH+1,minH)
          return Math.min(lh,rh)
      }else{
          return Math.min(minH,prevH)
      }
  }
  return dfs(root)
};
// @lc code=end

