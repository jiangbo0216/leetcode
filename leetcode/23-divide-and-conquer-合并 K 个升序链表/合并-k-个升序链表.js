/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return merge(lists, 0, lists.length - 1)
};

function merge(lists, l, r) {
  if (l == r) {
    return lists[l]
  }
  if (l > r) {
    return null
  }

  let mid = (l + r) >> 1

  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
}

function mergeTwoLists(a, b) {
  if (a === null || b === null ){
    return a != null ? a : b
  }

  let head = new ListNode(0)
  let tail = head, aPtr = a, bPtr = b

  while(aPtr && bPtr) {
    if (aPtr.val < bPtr.val) {
      tail.next = aPtr;
      aPtr = aPtr.next;
    } else {
        tail.next = bPtr;
        bPtr = bPtr.next;
    }
    tail = tail.next;
  }
  tail.next = (aPtr != null ? aPtr : bPtr);

  return head.next;
}
// @lc code=end

