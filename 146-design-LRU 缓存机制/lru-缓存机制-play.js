/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// 哈希表 + 双向链表
// 哈希表增强了检索的功能，弥补了双向链表的搜索的弱势，
// 双向链表在插入和删除node可以在O(1)的时间完成

// class DLinkedNode {
//   constructor (key, val) {
//     this.key = key
//     this.val = val
//     this.prev = null
//     this.next = null
//   }
// }

// var LRUCache = function(capacity) {

//   this.cache = Object.create(null)
//   this.head = new DLinkedNode()
//   this.tail = new DLinkedNode()
//   this.head.next = this.tail
//   this.tail.next = this.head
//   this.capacity = capacity
//   this.size = 0
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//   if (!this.cache[key]) {
//     return -1
//   }
//   const node = this.cache[key]
//   this.moveToHead(node)
//   return node.val
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//   if (!this.cache[key]) {
//     const node = new DLinkedNode(key, value) 
//     this.cache[key] = node
//     this.addToHead(node)
//     ++this.size
//     if (this.size > this.capacity) {
//       const removed = this.removeTail()
//       delete this.cache[removed.key]
//       --this.size
//     }
//   } else {
//     const node = this.cache[key]
//     node.val = value
//     this.moveToHead(node)
//   }
// };

// LRUCache.prototype.addToHead = function (node) {
//   node.prev = this.head
//   node.next = this.head.next
//   this.head.next.prev = node
//   this.head.next = node
// } 

// LRUCache.prototype.removeNode = function (node) {
//   node.prev.next = node.next
//   node.next.prev = node.prev
// } 

// LRUCache.prototype.moveToHead = function (node) {
//   this.removeNode(node)
//   this.addToHead(node)
// } 

// LRUCache.prototype.removeTail = function () {
//   const node = this.tail.prev
//   this.removeNode(node)
//   return node
// } 



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

