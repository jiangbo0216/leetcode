/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const ori = {};
  const cnt = {};
  // 先对 t 目标子串，先进行计数统计
  for (const c of t) {
    ori[c] = (ori[c] || 0) + 1;
  }

  let l = 0,
    r = -1;
  // 记录目标子串的长度
  let len = Infinity,
    // 记录目标子串 left 的位置
    ansL = -1;

  // 检查是否包含
  const check = () => {
    for (const [key, val] of Object.entries(ori)) {
      if ((cnt[key] || 0) < val) {
        return false;
      }
    }
    return true;
  };

  // 滑动窗口
  while (r < s.length) {
    if (ori[s[++r]]) {
      cnt[s[r]] = (cnt[s[r]] || 0) + 1;
    }
    // 如果 check 包含，意味着我left 可以 left 继续右移动
    while (check() && l <= r) {
      if (r - l + 1 < len) {
        len = r - l + 1;
        ansL = l;
      }
      if (ori[s[l]]) {
        cnt[s[l]]--;
      }
      l++;
    }
  }

  return ansL === -1 ? "" : s.substr(ansL, len);
};
// @lc code=end
