/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (56.69%)
 * Likes:    1067
 * Dislikes: 0
 * Total Accepted:    112.4K
 * Total Submissions: 196.9K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * 输出：3
 * 解释：和等于 8 的路径有 3 条，如图所示。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,1000]
 * -10^9  
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

// 遍历路径的思路是dfs
// 子路径求和的思路是前缀和
// 方法一：记录前缀数组(时间、空间效率较低)
// var pathSum = function(root, targetSum) {
//     // 遍历路径思路是dfs
//     // 子路径求和的思路是前缀和
//     const dfs=(node,prefixArr)=>{
//         if(node){
//             prefixArr.push(0)
//             prefixArr=prefixArr.map(i=>{
//                 if(i+node.val===targetSum) ret++
//                 return i+node.val
//             })
//             dfs(node.left, prefixArr.slice())
//             dfs(node.right, prefixArr.slice())
//         }
//     }
//     dfs(root,[])
//     return ret
// };

// 方法二：不需要维护前缀和顺序，用map记录前缀和 及其 数量
var pathSum = function(root, targetSum) {
  const prefixMap=new Map()
  prefixMap.set(0,1)  // 根节点前一个节点是null，前缀和是0
  return dfs(root,prefixMap,0,targetSum)
};

const dfs=(node,prefixMap,curSum,targetSum)=>{
  if(!node) return 0

  curSum+=node.val

  // 如果 curSum-某前缀和=target
  // 那么说明存在一个 以当前节点为尾节点的子路径 满足条件
  // 因此prefixMap.get(curSum-targetSum)即为满足条件的子路径的数量
  let ret=prefixMap.get(curSum-targetSum)||0

  // 更新前缀和map
  prefixMap.set(curSum, (prefixMap.get(curSum)||0)+1)

  // 递归
  ret+=dfs(node.left,prefixMap,curSum,targetSum)
  ret+=dfs(node.right,prefixMap,curSum,targetSum)

  // 当前节点左右子树遍历完之后，回溯
  prefixMap.set(curSum, (prefixMap.get(curSum)||0)-1)

  return ret
}
// @lc code=end

