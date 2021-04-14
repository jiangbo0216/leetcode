/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 边界条件
  if (numRows < 2) return s
  let resultArr = new Array(numRows).fill(undefined).map(() => [])
  let j = 0, flag = -1
  for (let i = 0; i < s.length; i++) {
    if (i % (numRows-1) === 0) flag = -flag
    const si = s[i];
    resultArr[j].push(si)
    j += flag
  }
  const result = Array.prototype.concat.apply([], resultArr)
  return result.join('')
};
convert("AB", 1)
// @lc code=end

