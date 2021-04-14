/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) return '' 
  let prefix = strs[0]

  function longestCommonTwoStr (s1, s2) {
    let len = Math.min(s1.length, s2.length)
    let prefix = ''
    for (let i = 0; i < len; i++) {
      if (s1[i] === s2[i]) {
        prefix+=s1[i]
      } else {
        break
      }
    }
    return prefix
  }

  for (const s of strs) {
    prefix = longestCommonTwoStr(prefix, s)
  }
  return prefix
};
// @lc code=end

