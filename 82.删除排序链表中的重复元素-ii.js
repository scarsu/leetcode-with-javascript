/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (49.61%)
 * Likes:    519
 * Dislikes: 0
 * Total Accepted:    97.7K
 * Total Submissions: 191.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 返回同样按升序排列的结果链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 
 * 题目数据保证链表已经按升序排列
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 边界处理
  if(!head) return head

  // 因为头节点也可能被删除，因此向前创建一个哑节点
  let dummy = new ListNode(0,head)

  // 遍历
  let cur=dummy
  while(cur.next&&cur.next.next){
    // 因为链表已经排好序
    // 所以只需要判断cur的下一节点和下下节点值是否相等
    if(cur.next.val===cur.next.next.val){
      // 如果相等，则记下值x，一直向后找到不等于x的节点，将cur的next指向它
      let x=cur.next.val
      while(cur.next&&cur.next.val===x){
        cur.next=cur.next.next
      }
    }else{
      // 如果不相等，继续向后遍历
      cur=cur.next
    }
  }
  return dummy.next
};
// @lc code=end

