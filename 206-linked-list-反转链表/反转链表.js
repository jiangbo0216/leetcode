/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  // let reverse = null
  // let cur = head

  // 相当是一个环
  // // Null->1->2->3->4->5->Null
  // while (cur !== null) {
  //   // 保存next
  //   let next = cur.next
  //   // 反转当前的指向
  //   cur.next = reverse
  //   // reverse 向前走一步
  //   reverse = cur
  //   // cur 向前走一步
  //   cur = next
  // }
  // return reverse

  if ( head.next === null) {
    return head
  }

  const res = reverseList(head.next)
  // 1->2->3->4->5->NULL
  head.next.next = head 

  head.next = null

  return res
};


// @lc code=end

