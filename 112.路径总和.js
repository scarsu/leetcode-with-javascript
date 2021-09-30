/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (52.56%)
 * Likes:    681
 * Dislikes: 0
 * Total Accepted:    269.5K
 * Total Submissions: 512.3K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点
 * 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 
 * 叶子节点 是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,2], targetSum = 0
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [0, 5000] 内
 * -1000 
 * -1000 
 * 
 * 
 */

// @lc code=start
// // dfs
// var hasPathSum = function(root, targetSum) {
//     const dfs=(node,prevSum,targetSum)=>{
//         if(node){
//             if(!node.left && !node.right){
//                 // 叶子节点
//                 return prevSum+node.val===targetSum
//             }
//             let retL=false
//             let retR=false
//             if(node.left) retL=dfs(node.left,(prevSum||0)+node.val,targetSum)
//             if(node.right) retR=dfs(node.right,(prevSum||0)+node.val,targetSum)
//             return retL||retR
//         }else{
//             return prevSum===targetSum
//         }
//     }
//     return dfs(root,null,targetSum)
// };

// 递归
const hasPathSum = (root, sum) => {
  if (root == null) {
    return false;
  }
  // // 遍历到叶子节点
  if (root.left == null && root.right == null) {
    return sum - root.val === 0
  }
  // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
// @lc code=end

