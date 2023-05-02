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
// var reverseList = function(head) {
//   let reverse = null
//   let current = head
//   while(current !== null) {
//     const next = current.next
//     current.next = reverse
//     reverse = current
//     current = next
//   }

//   return reverse
// };

const reverseList = function (head) {
  let reverse = null
  let cur = head

  while(cur !== null) {
    const next = cur.next
    cur.next = reverse
    reverse = cur
    cur = next
  }

  return reverse
} 


// @lc code=end

