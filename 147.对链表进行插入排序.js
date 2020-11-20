/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 *
 * https://leetcode-cn.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (65.53%)
 * Likes:    248
 * Dislikes: 0
 * Total Accepted:    48.2K
 * Total Submissions: 72.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 对链表进行插入排序。
 * 
 * 
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 
 * 
 * 插入排序算法：
 * 
 * 
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2：
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  // 一个哑节点dummy用于最终的return
  let dummy=new ListNode(),pre
  dummy.next = head

  // 外层循环 遍历所有节点, head已排序的最后节点,head.next下一个需要比较的节点
  while(head!==null && head.next!==null){
    if(head.val<=head.next.val){
      // 大小合适 向后遍历
      head=head.next
      continue
    }
    // 内层循环,合适位置插入节点， pre从头遍历 直至遇到 应插入位置的前一个节点
    pre=dummy // pre从头开始遍历
    while(pre.next.val<head.next.val) pre=pre.next
    // head.next插入到pre后面
    let cur=head.next //将当前要插入的节点存至cur
    head.next=cur.next //head下一节点指向head.next.next
    cur.next=pre.next //这两步真正插入
    pre.next=cur //这两步真正插入

  }

  return dummy.next
};
// @lc code=end

