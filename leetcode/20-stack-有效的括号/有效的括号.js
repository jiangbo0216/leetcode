/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const n = s.length;
  if (n % 2 === 1) {
      return false;
  }
  const pairs = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);
  const stk = [];

  for (const char of s) {
    if (pairs.get(char)) {
      if (stk.length > 0 && stk[stk.length - 1] === pairs.get(char)) {
        stk.pop()
      } else {
        return false
      }
    } else {
      stk.push(char);
    }
  }
  return stk.length === 0;
};
// @lc code=end

isValid('()')