/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/* pattern 第一个位置由三种情况
字母
.
*

dp[i, j] = dp[i-1, j -1] && {
  if (s[i] === p[j]) {
    return true
  } else if (p[j] === .) {
    return true
  } else if (p[j] === *) {
    return dp[]
  }
}

*/
var isMatch = function(s, p) {

};
// @lc code=end

