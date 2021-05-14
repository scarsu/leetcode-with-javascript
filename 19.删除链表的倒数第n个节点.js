/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (40.50%)
 * Likes:    1354
 * Dislikes: 0
 * Total Accepted:    387.6K
 * Total Submissions: 927.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 快慢指针
  // 快指针先走n+1步(为了方便处理只有一个节点的情况，前面加一个哨兵节点)
  // 快慢指针再一起走，直到快指针走到头，慢指针此时在倒数第n+1个节点上
  // 删除慢指针节点的后继节点
  let dumbHead = new ListNode()
  dumbHead.next=head
  let fast=dumbHead,slow=dumbHead
  while(n--){
    fast=fast.next
  }
  while(fast&&fast.next){
    slow=slow.next
    fast=fast.next
  }
  slow.next=slow.next.next
  return dumbHead.next
};
// @lc code=end

