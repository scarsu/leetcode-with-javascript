/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (40.49%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    125.4K
 * Total Submissions: 307.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 
 * 0 
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
 * @param {number} k
 * @return {ListNode}
 */
// 闭合链表成环 重新截断
var rotateRight = function(head, k) {
  if(!head || k===0) return head

  // 一次遍历 将原链表连成环 计算节点数
  let n=1,cur=head
  while(cur.next){
    n++
    cur=cur.next
  }
  if(k%n===0) return head // 特殊情况优化，直接返回原链表
  cur.next=head // 首尾相连成环
  // 二次遍历 从head开始找到第n-k个节点，断开
  for(let i=0;i<n-k%n;i++){
    cur=cur.next
  }
  let ret = cur.next
  cur.next=null
  return ret
};
// @lc code=end

