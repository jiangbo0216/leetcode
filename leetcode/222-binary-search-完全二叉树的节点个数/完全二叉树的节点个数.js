/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root === null) {
    return 0
  }

  let level = 0
  let node = root
  while (node.left !== null) {
    ++level
    node = node.left
  }

  let low = 1 << level, high = (1 << (level + 1)) - 1

  // 开始二分查找
  while (low < high) {
    // 这里需要加1, 对应
    // 这里一定是一个[)的范围
    // 这种写法可能有溢出的风险
    // let mid = ((low + high) >> 1) + 1  
    // const mid = Math.floor((high - low + 1) / 2) + low;
    
    // if (exists(root, level, mid)) {
    //   low = mid
    // }
    // else {
    //   high = mid - 1
    // }

  }
  return low


};


const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
      if (!(bits & k)) {
          node = node.left;
      } else {
          node = node.right;
      }
      bits >>= 1;
  }
  return node !== null;
}

// @lc code=end

