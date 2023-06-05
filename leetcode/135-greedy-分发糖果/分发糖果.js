/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // 因为从 i = 1 开始遍历
  let ret = 1;
  let [inc, dec, pre] = [1, 0, 1];

  for (let i = 1, len = ratings.length; i < len; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0;
      if (ratings[i] != ratings[i - 1]) {
        pre += 1;
      } else {
        pre = 1;
      }
      ret += pre;
      inc = pre;
    } else {
      dec += 1;
      if (dec === inc) {
        dec += 1;
      }
      ret += dec;
      pre = 1;
    }
  }
  return ret;
};
// @lc code=end

// ratings [1, 3, 6, 5, 3, 2, 1, 1, 2]
// [1, 2, 3, 1, 2, 4, 5, 1, 2]

// 贪心策略 遇到非递增的从 1 开始分糖果
