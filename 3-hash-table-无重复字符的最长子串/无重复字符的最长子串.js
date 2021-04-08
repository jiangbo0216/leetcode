/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set()

  const n = s.length

  let j = 0, len = 0

  for (let i = 0;  i < n; i++) {
    if (i != 0) {
      set.delete(s.charAt(i - 1))
    }

    while(j < n && !set.has(s.charAt(j))) {
      set.add(s.charAt(j))
      ++j
    }

    len = Math.max(len, j - i)
  }
  return len
};
// @lc code=end

