/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 动态规划 dp[i] = dp[i - 1] concat ( each copy (dp[i - 1]).concat([s[i]]))
var subsets = function(nums) {
  let result= [[]]
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (item of result.slice()) {
      const con = item.concat([num])
      result = result.concat([con])
    }
  }

  return result
};

var subsets = function(nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
      const t = [];
      for (let i = 0; i < n; ++i) {
          if (mask & (1 << i)) {
              t.push(nums[i]);
          }
      }
      ans.push(t);
  }
  return ans;
};

// @lc code=end

