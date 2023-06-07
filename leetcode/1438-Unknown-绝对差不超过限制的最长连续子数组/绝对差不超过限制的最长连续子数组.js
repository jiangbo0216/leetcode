/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const queMax = [];
  const queMin = [];

  const n = nums.length;

  let left = 0,
    right = 0;
  let ret = 0;

  // que 用来保存当前区间的最大值和最小值的序列
  while (right < n) {
    while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
      queMax.pop();
    }
    while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
      queMin.pop();
    }

    queMax.push(nums[right]);
    queMin.push(nums[right]);

    // 如果遇到 > limit， left + 1， 没有必要继续探索当前 left 的情况了
    while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
      if (nums[left] === queMin[0]) {
        queMin.shift();
      }
      if (nums[left] === queMax[0]) {
        queMax.shift();
      }

      left++;
    }

    // 这一轮 left, < limit 的个数为 right - left + 1
    ret = Math.max(ret, right - left + 1);
    right++;
  }
  return ret;
};
// @lc code=end

// console.log(longestSubarray([8, 2, 4, 7], 4));
