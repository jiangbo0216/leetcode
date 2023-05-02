/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = ''
  let tempVal = 0
  let arr1 = num1.split('')
  let arr2 = num2.split('')

  while (arr1.length || arr2.length || tempVal) {
    tempVal += ~~arr1.pop() + ~~arr2.pop()
    result = tempVal % 10 + result
    tempVal = ~~(tempVal / 10)
  }
  return result.replace(/^0+/, '') || '0'
};
// @lc code=end

