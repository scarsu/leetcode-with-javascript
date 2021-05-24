/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (64.64%)
 * Likes:    1440
 * Dislikes: 0
 * Total Accepted:    430.5K
 * Total Submissions: 663.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 1迭代
// var mergeTwoLists = function(l1, l2) {
//   let pre=new ListNode(-1)
//   let head=pre
//   while(l1!==null && l2!==null){
//     if(l1.val<l2.val){
//       pre.next=l1 // 指定下一节点
//       l1=l1.next // 移动向下一个节点
//     }else{
//       pre.next=l2 // 指定下一节点
//       l2=l2.next // 移动向下一个节点
//     }
//     pre=pre.next // 移动向下一个节点
//   }
//   pre.next=l1===null?l2:l1
//   return head.next
// };

// 递归
// 每次取两个链表头中  较小的一个
// 终止条件：某一个链表为null
var mergeTwoLists = function(l1, l2) {
  if(l1===null){
    return l2
  }else if(l2===null){
    return l1
  }else if(l1.val<l2.val){
    l1.next=mergeTwoLists(l1.next,l2)
    return l1 
  }else{
    l2.next=mergeTwoLists(l2.next,l1)
    return l2
  }
};

// @lc code=end

