/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE
  let profit = 0
  for (const p of prices) {
    if (min > p) {
      min = p
    } else if (p - min > 0) {
      profit += p - min
      min = p
    }
  }
  return profit
};
// @lc code=end

