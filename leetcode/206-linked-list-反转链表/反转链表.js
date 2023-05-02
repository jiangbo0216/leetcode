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

  // 后续遍历
  if ( head.next === null) {
    return head
  }

  // 第一次返回的最后一个节点，每次直接返回即可
  const res = reverseList(head.next)
  // 1->2->3->4->5->NULL
  // 举例当前为4时，需要修改5指向4，4指向Null
  // 举例当前为3时，需要修改4指向3，3指向Null
  head.next.next = head 

  head.next = null

  return res
};


// @lc code=end

