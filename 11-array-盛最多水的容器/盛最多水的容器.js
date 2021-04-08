/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length
  let head = 0, tail = len - 1

  let max = 0

  while (head < tail) {
    if (height[head] < height[tail]) {
      max = Math.max(height[head] * (tail - head), max)
      head += 1
    } else {
      max = Math.max(height[tail] * (tail - head), max)
      tail -= 1
    }
  }
  return max
};
// @lc code=end

