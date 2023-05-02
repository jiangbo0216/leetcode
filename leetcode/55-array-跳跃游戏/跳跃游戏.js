/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 保留最远可以到达的位置，贪心算法，去掉多余的状态
  let far = 0
  let l =  nums.length 
  for (let i = 0; i < l; i++) {
    // 注意考虑第一个和最后一个的特殊情况
    if (i <= far) {
      const num = nums[i];
      far = i + num > far ? i + num : far
      if (far >=l -1) {
        return true
      }
    } 
  }
  return false
};
// @lc code=end

