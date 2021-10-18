/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 *
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (74.06%)
 * Likes:    507
 * Dislikes: 0
 * Total Accepted:    159.6K
 * Total Submissions: 212.4K
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数为 n 。
 * 1 
 * 0 
 * 
 * 
 * 
 * 
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  //  1.中序遍历 递归
  //     const ldr=(node,arr,target)=>{
  //         if(node!==null){
  //             const l=ldr(node.left,arr,k)
  //             if(l!==undefined) return l
  //             arr.push(node.val)
  //             if(arr.length===target) return node.val
  //             const r=ldr(node.right,arr,k)
  //             if(r!==undefined) return r
  //         }
  //     }
  //     return ldr(root,[],k)
  
  // 2.中序遍历 迭代
      // 用迭代、栈实现中序遍历的重点是 节点入栈的顺序
      const stack=[]
      while(root || stack.length>0){
          // 将当前节点、左子树递归加入stack
          while(root){
              stack.push(root)
              root=root.left
          }
          // 取stack最上一个的值
          root=stack.pop()
          --k
          if(k===0) break
          // 遍历当前节点右子树
          root=root.right
      }
      return root.val
  };
  
  //TODO 优化，记录每个节点左子树的容量
  
// @lc code=end

