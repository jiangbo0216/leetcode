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

// 双向链表中使用一个伪头部和伪尾部，在操作指针指向的时候，不需要判断相邻
// 节点是否存在

class DLinkedNode {
  // 包含前驱和后继
  constructor (key, val) {
    this.key = key
    this.val = val
    this.pre = null
    this.next = null
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity
  this.head = new DLinkedNode()
  this.tail = new DLinkedNode()
  // 建立头部和尾部的链表关系
  this.head.next = this.tail
  this.tail.pre = this.head

  this.cache = Object.create(null)
  this.size = 0
}

LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) {
    return -1
  }
  const node = this.cache[key]
  this.moveToHead(node)
  return node.val
}

LRUCache.prototype.put = function (key, val) {
  if (!this.cache[key]) {
    const node = new DLinkedNode(key, val)
    this.cache[key] = node
    ++this.size
    // 添加新的节点到头
    this.addToHead(node)

    if (this.size > this.capacity) {
      --this.size
      // node 同时存在链表和cache哈希表中
      const node = this.removeTail()
      delete this.cache[node.key]
    }
    return
  }
  const node = this.cache[key]
  // 更新val
  node.val = val
  this.moveToHead(node)
}

// 新增 addToHead [moveToHead removeTail] (removeNode)
LRUCache.prototype.addToHead = function(node) {
  node.next = this.head.next
  node.pre = this.head
  this.head.next.pre = node
  this.head.next = node
}
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addToHead(node)
}
LRUCache.prototype.removeTail = function () {
  const node = this.tail.pre
  this.removeNode(node)
  return node
}
LRUCache.prototype.removeNode = function(node) {
  node.pre.next = node.next
  node.next.pre = node.pre
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

