/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverse = 0
  while (x!== 0) {
    let pop = x % 10
    x = ~~(x/10)
    if (reverse > (2**31 - 1)/10 || (reverse === (2**31 - 1)/10 && pop > 7)  ) {
      return 0
    }
    if (reverse < -(2**31)/10 || (reverse === -(2**31)/10 && pop < -8)  ) {
      return 0
    }
    reverse = reverse * 10 + pop
  }
  return reverse
};
reverse(123)
// @lc code=end

