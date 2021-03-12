/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 *
 * https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (45.78%)
 * Likes:    190
 * Dislikes: 0
 * Total Accepted:    14.4K
 * Total Submissions: 30.5K
 * Testcase Example:  '"9,3,4,#,#,1,#,#,2,#,6,#,#"'
 *
 * 序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。
 * 
 * ⁠    _9_
 * ⁠   /   \
 * ⁠  3     2
 * ⁠ / \   / \
 * ⁠4   1  #  6
 * / \ / \   / \
 * # # # #   # #
 * 
 * 
 * 例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。
 * 
 * 给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。
 * 
 * 每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。
 * 
 * 你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 "1,,3" 。
 * 
 * 示例 1:
 * 
 * 输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: "1,#"
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入: "9,#,#,1"
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const n=preorder.length
  let i=0
  let slots=1 // slots标识剩余槽位 初始为1 即只容纳一个根节点
  while (i<n) {
    if(slots<1) return false  // 槽位不够
    if(preorder[i]===','){
      i++
    }else if(preorder[i]==='#'){  // 空节点 消耗一个槽位
      slots--
      i++
    }else{
      while(preorder[i]!==','&&i<n){  // 数字节点 消耗一个槽位 又增加两个槽位
        i++
      }
      slots++
    }
  }
  return slots===0
};
// @lc code=end

