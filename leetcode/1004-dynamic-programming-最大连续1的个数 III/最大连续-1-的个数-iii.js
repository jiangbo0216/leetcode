/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */
// 我们可以把问题转化成：求数组中一段最长的连续区间，要求这段区间内 0 的个数不超过 k 个。
// rsum 右边界用来统计 0 的个数， lsum 左边界统计 0 的个数
// lsum < rsum - k
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const n = nums.length;
  let left = 0,
    lsum = 0,
    rsum = 0;
  let ret = 0;

  for (let right = 0; right < n; right++) {
    rsum += 1 - nums[right];

    while (lsum < rsum - k) {
      lsum += 1 - nums[left];
      ++left;
    }
    ret = Math.max(ret, right - left + 1);
  }
  return ret;
};
// @lc code=end

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
