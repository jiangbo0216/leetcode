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
abb abb*
p[j]为 *，s[i] == p[j-1]时 f[i][j] = f[i-1][j]（需要*参与匹配） || f[i][j-2] （不需要*参与匹配）
s[i] != p[j-1]时 f[i][j] =  f[i][j-2]
*/
function isMatch(s, p) {
  let m = s.length;
  let n = p.length;

  let f = new Array(m + 1);
  for (let i = 0; i < f.length; i++) {
    f[i] = new Array(n + 1).fill(false);
  }

  f[0][0] = true;
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p.charAt(j - 1) == "*") {
        f[i][j] = f[i][j - 2];
        if (matches(s, p, i, j - 1)) {
          f[i][j] = f[i][j] || f[i - 1][j];
        }
      } else {
        if (matches(s, p, i, j)) {
          f[i][j] = f[i - 1][j - 1];
        }
      }
    }
  }
  return f[m][n];
}

function matches(s, p, i, j) {
  if (i == 0) {
    return false;
  }
  if (p.charAt(j - 1) == ".") {
    return true;
  }
  return s.charAt(i - 1) == p.charAt(j - 1);
}
// @lc code=end
