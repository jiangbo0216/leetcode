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
// const cloneGraph = function (node) {
//   if (node === null) return node
//   let visited = new Map()

//   function dfsClone (node) {
//     // 如果节点已经访问过，则直接从哈希表中取出对应的clone节点
//     if (visited.get(node)) {
//       return visited.get(node)
//     }
//     // 克隆节点
//     const newNode = new Node(node.val)
//     visited.set(node, newNode)

//     // 遍历节点的邻居，并更新克隆节点的邻居列表
//     for (const neigh of node.neighbors) {
//       newNode.neighbors.push(dfsClone(neigh))
//     }
//     return newNode
//   }

//   return dfsClone(node)
// }

const cloneGraph = function (node) {
  if (node === null) return node

  let visited = new Map()

  // 返回Clone的节点和各层的邻居节点
  function dfsClone (node) {
    if (visited.get(node)) {
      return visited.get(node)
    }

    const cloneNode = new Node(node.val)
    visited.set(node, cloneNode)

    for (const neigh of node.neighbors) {
      cloneNode.neighbors.push(dfsClone(neigh))
    }
    return cloneNode
  }

  return dfsClone(node)
}
// @lc code=end

