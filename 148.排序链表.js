/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (67.05%)
 * Likes:    835
 * Dislikes: 0
 * Total Accepted:    107.5K
 * Total Submissions: 159.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 进阶：
 * 
 * 
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 
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

/*
插入排序的方法对链表进行排序，插入排序的时间复杂度是 O(n^2)，其中 n 是链表的长度。

这道题考虑时间复杂度更低的排序算法。
题目的进阶问题要求达到 O(nlogn) 的时间复杂度和 O(1) 的空间复杂度，
时间复杂度是 O(nlogn) 的排序算法包括归并排序、堆排序和快速排序（快速排序的最差时间复杂度是 O(n^2)），其中最适合链表的排序算法是归并排序。

归并排序基于分治算法。
最容易想到的实现方式是自顶向下的递归实现，考虑到递归调用的栈空间，自顶向下归并排序的空间复杂度是 O(logn)。
如果要达到 O(1) 的空间复杂度，则需要使用自底向上的实现方式。
*/


/* 自顶向下的归并排序
const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    // 合并两个有序链表
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}

const toSortList = (head, tail) => {
  // 如果链表只有一个节点，不需要排序直接返回
  if (head === null) {
      return head;
  }
  if (head.next === tail) {
      head.next = null;
      return head;
  }
  // 快慢指针，找到链表中点
  // 快指针每次移动两步，慢指针每次移动一步，当快指针到结尾时，慢指针就是中点
  let slow = head, fast = head;
  while (fast !== tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast !== tail) {
          fast = fast.next;
      }
  }
  const mid = slow;
  // 递归合并子链表
  return merge(toSortList(head, mid), toSortList(mid, tail));
}

var sortList = function(head) {
    return toSortList(head, null);
};
*/


/*  自底向上的归并排序

*/
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;
  // 有序合并两个子链表
  while (temp1 !== null && temp2 !== null) {
      if (temp1.val <= temp2.val) {
          temp.next = temp1;
          temp1 = temp1.next; //向后移动
      } else {
          temp.next = temp2;
          temp2 = temp2.next; //向后移动
      }
      temp = temp.next; //向后移动
  }
  if (temp1 !== null) {
      temp.next = temp1;
  } else if (temp2 !== null) {
      temp.next = temp2;
  }
  return dummyHead.next;
}

var sortList = function(head) {
  // 边界情况
  if (head === null) {
      return head;
  }

  // 求链表长度
  let length = 0;
  let node = head;
  while (node !== null) {
      length++;
      node = node.next;
  }

  const dummyHead = new ListNode(0, head);
  // subLength 初始为1
  // 将链表拆分成n个长度为subLength的子链表，两两合并
  // subLength<<=1翻倍，重复合并
  // 由于最初subLength=1，所以两两合并后是有序的，之后随着subLength增长，都是有序的
  // 因此最终得到的链表有序
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    // curr为初始链表头节点
    let prev = dummyHead, curr = dummyHead.next;

    while (curr !== null) {
      // head1：第一个长度为subLength的子链表
      // prev->@curr->@->@->@->@->@->...->null
      let head1 = curr;
      // prev->@head1/curr->@->@->@->@->@->...->null
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }
      // prev->@head1->..subLength..->@curr->@->@->@->@->...->null

      // head2：下一个长度为subLength的子链表
      let head2 = curr.next;
      // prev->@head1->..subLength..->@curr->@head2->@->@->@->...->null
      curr.next = null;   //拆分head1链表
      // prev->@head1->..subLength..->@curr->null
      // @head2->@->@->@->...->null
      curr = head2;   // cur重新指向head2
      // @head2/curr->@->@->@->...->null
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
        curr = curr.next;
      }
      // @head2->..subLength...->@curr->@->@->@->...->null
      
      let next = null;
      if (curr !== null) {
        next = curr.next;
        // @head2->..subLength...->@curr->@next->@->@->...->null
        curr.next = null; // 拆分head2链表
        // @head2->..subLength...->@curr->null
        // @next->@->@->...->null
      }

      // 合并head1和head2，合并后的是有序的（因为subLength从1开始）
      const merged = merge(head1, head2);
      // prev本来指向head1上一节点，改为指向合并链表的开头
      prev.next = merged;
      // dummyHead->merged->null
      // @next->@->@->...->null
      while (prev.next !== null) {
        // prev向后移动，直至遇到合并链表的最后一个节点
        prev = prev.next;
      }
      curr = next;
      // dummyHead->merged->prev
      // @next/curr->@->@->...->null
    }
  }
  return dummyHead.next;
};
// @lc code=end

