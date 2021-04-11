/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) return node
    // 将题目给定的节点添加到队列
    const newNode = new Node(node.val)
    let visited = new Map()
    visited.set(node, newNode)

    // 将题目给定的节点添加到队列
    let list = [node]

    while(list.length>0) {
      // 取出头节点
      const n = list.shift()
      // 遍历
      const neighbors = n.neighbors
      for (let i = 0; i < neighbors.length; i++) {
        const item = neighbors[i];
        if (!visited.get(item)) {
          visited.set(item, new Node(item.val))
          list.push(item)
        }
        // 更新当前节点的邻居列表
        visited.get(n).neighbors.push(visited.get(item))
      }
    }
    return visited.get(node)
};

// const cloneGraph = function (node) {
//   if (node === null) return node
//   const map = new Map()
//   const newNode = new Node(node.val)
//   map.set(node, newNode)

//   let list = [node] 
//   while (list.length > 0) {
//     const n = list.shift()
//     const neighs = n.neighbors

//     for (const neigh of neighs) {
//       if (!map.get(neigh)) {
//         map.set(neigh, new Node(neigh.val))
//         list.push(neigh)
//       }
//       map.get(n).neighbors.push(map.get(neigh))
//     }
//   }
//   return map.get(node)
// }

const cloneGraph = function (node) {
  if (node === null) return
  const map = new Map()
  map.set(node, new Node(node.val))

  const queue = [node]

  while (queue.length > 0) {
    const n = queue.shift()
    for (const neigh of n.neighbors) {
      if (!map.get(neigh)) {
        map.set(neigh, new Node(neigh.val))
        queue.push(neigh)
      }
      map.get(n).neighbors.push(map.get(neigh))
    }
  }
  return map.get(node)
}

// @lc code=end

