/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
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
    } else if (p - min > profit) {
      profit = p - min
    }
  }
  return profit
};
// @lc code=end

