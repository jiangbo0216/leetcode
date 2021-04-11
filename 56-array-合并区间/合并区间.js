/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])

  let res = [intervals[0]]
  for (const interval of intervals) {
    const len = res.length
    if (interval[0] <= res[len - 1][1]) {
      res[len -1][1] = Math.max(interval[1], res[len -1][1])
    } else {
      res.push(interval)
    }
  }
  return res
};
// @lc code=end

