/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * tag: [link-list]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 运行状态包括指针和进位情况
  let carry = 0

  // 结果
  let head = tail = new ListNode()
  
  while(l1 || l2) {
    let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry
    if (sum >= 10) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    tail.val = sum
    
    l1 = l1 && l1.next
    l2 = l2 && l2.next

    if (l1 || l2) {
      tail.next = new ListNode()
      tail = tail.next
    }
  }

  if (carry) {
    tail.next = new ListNode(carry)
  }

  return head
};
// @lc code=end



function ListNode(val) {
    this.val = val;
    this.next = null;
}