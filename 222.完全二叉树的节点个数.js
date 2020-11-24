/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (73.27%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    60.4K
 * Total Submissions: 79.4K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给出一个完全二叉树，求出该树的节点个数。
 * 
 * 说明：
 * 
 * 
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第
 * h 层，则该层包含 1~ 2^h 个节点。
 * 
 * 示例:
 * 
 * 输入: 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 * 
 * 输出: 6
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

/* 递归，时间复杂度和空间复杂度都是 O(n) 
var countNodes = function(root) {
  let ret=0
  const bfs=node=>{
    if(node!==null){
      ret++
      bfs(node.left)
      bfs(node.right)
    }
  }
  bfs(root)
  return ret
};
*/


// 这道题规定了给出的是完全二叉树，因此可以利用完全二叉树的特性计算节点个数
/* 二分查找 + 位运算
  完全二叉树可以通过遍历左子数得到深度level
  二分查找：
    第h层节点序号在 [2^h , 2^(h+1)-1]之间
    用位运算可以得到范围：low = 1 << h, high = (1 << (h + 1)) - 1;
    可以通过二分查找来判断节点是否存在 [low,high] = exsit(mid) ? [mid,high] : [low,mid]
  位运算：
    完全二叉树 第h层的节点 可以通过h+1位二进制表示出来，
    第一位是1，代表root层，
    其后位于左子树则为0，右子树为1
*/
const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
}

var countNodes = function(root) {
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
    level++;
    node = node.left;
  } // 遍历左子树得到深度level O(h) = O(logn)
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  // low:1左移level位，代表最下层的最左节点
  // high:1左移level+1位 - 1，代表最下层最右节点
  while (low < high) {
    // 找到中间节点
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) { // 判断mid节点是否存在
      low = mid; // 存在则在[mid,high]之间查找
    } else {
      high = mid - 1; // 不存在则在[low,mid]之间查找
    }
  }
  return low;
};
// @lc code=end

