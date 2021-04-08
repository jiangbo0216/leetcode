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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 运行状态包括指针和进位情况
  let carry = 0

  let p1 = l1, p2 = l2

  // 结果
  let result = new ListNode()
  result.next = new ListNode()
  let resultP = result
  
  while(p1 || p2 || carry) {
    
    resultP = resultP.next
    let sum = (p1 && p1.val || 0) + (p2 && p2.val || 0) + carry
    if (sum >= 10) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    resultP.val = sum
    
    p1 = p1 && p1.next
    p2 = p2 && p2.next

    if (p1 || p2 || carry) {
      resultP.next = new ListNode()
    }
  }

  return result.next
};
// @lc code=end

