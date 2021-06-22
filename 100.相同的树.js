/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (60.20%)
 * Likes:    638
 * Dislikes: 0
 * Total Accepted:    214.8K
 * Total Submissions: 355K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：p = [1,2,3], q = [1,2,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：p = [1,2], q = [1,null,2]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：p = [1,2,1], q = [1,1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两棵树上的节点数目都在范围 [0, 100] 内
 * -10^4 
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // dfs 递归
  if(p===null && q===null) return true
  if(p===null || q===null) return false
  if(p.val!==q.val) return false
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
// @lc code=end

