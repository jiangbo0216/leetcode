/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  let path = []
  let pos = 0
  while (pos < S.length) {
    let level = 0
    while(S[pos] === '-') {
      ++level
      ++pos
    }
    let val = 0
    while(pos < S.length) {
      const charcode =  S[pos].charCodeAt() 
      if (charcode >= 48 && charcode <= 57) {
        val = val * 10 + charcode - 48
        ++pos
      } else{
        break
      }
    }

    let treeNode = new TreeNode(val)
    if (level === path.length) {
      if (path.length > 0) {
        path[path.length - 1].left = treeNode
      }
    } else {
      while(level !== path.length) {
        path = path.slice(0, -1)
      }
      path[path.length - 1].right = treeNode
    }
    path.push(treeNode)
  }

  return path[0]
};
// @lc code=end

