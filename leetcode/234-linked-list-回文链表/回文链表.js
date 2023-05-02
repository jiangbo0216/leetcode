/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 递归，后序遍历
// var isPalindrome = function(head) {
//   front = head
//   return recursiveCheck(head)
// };

// let front

// function recursiveCheck (current){
//   if (current !== null) {
//     if(!recursiveCheck(current.next)) {
//       return false
//     }
//     if (front.val === current.val) {
//       front = front.next
//       return true
//     } else {
//       return false
//     }
//   }
//   return true
// }

function reverseList (head) {
  let reverse = null
  let cur = head
  while (cur !== null) {
    const next = cur.next
    cur.next = reverse
    reverse = cur
    cur = next
  }

  return reverse
}

const inHalf = function (head) {
  let fast = head
  let slow = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

// 快慢指针
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true

  const half = inHalf(head)
  // 第一次反转链表
  const secondHalfReverse = reverseList (half.next)

  let p1 = head
  let p2 = secondHalfReverse
  let result = true
  // 使用p2作为条件判断， 如果整个链表长度为奇数， p2的长度较短
  while (p2 !== null) {
    if(p1.val !== p2.val) {
      result = false
      break
    }
    p1 = p1.next
    p2 = p2.next
  }
  // 再次反转链表
  half.next = reverseList(secondHalfReverse)
  return result
}; 

// @lc code=end

