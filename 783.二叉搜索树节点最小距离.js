/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
 *
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/description/
 *
 * algorithms
 * Easy (55.62%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    30.5K
 * Total Submissions: 53.5K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 
 * 注意：本题与
 * 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * 相同
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [2, 100] 内
 * 0 
 * 
 * 
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
var minDiffInBST = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1
  const dfs = (node) => {
    if (node === null) {
      return;
    }
    // 因为是二叉搜索树
    // 所以最小差值 一定存在于相邻节点之间
    // 所以用中序遍历 并判断相邻节点差值
    dfs(node.left);
    if (pre == -1) {
      pre = node.val;
    } else {
      ans = Math.min(ans, Math.abs(node.val - pre));
      pre = node.val;
    }
    dfs(node.right);
  }
  dfs(root);
  return ans
};

// @lc code=end

