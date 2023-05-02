/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let num = 0
  let flag = true
  for (const si of s) {
    const code = si.charCodeAt()
    if (code === 32) continue
    if (code === 45) {
      if (num === 0) {
        flag = false
      } else {
        break
      }
    }
    if(code >= 48 && code <=57) {
      num = num * 10 + code - 48
    }
  }
  if (flag) {
    return ~~num
  } else {
    return ~~(-num)
  }
};

myAtoi('42')
// @lc code=end

