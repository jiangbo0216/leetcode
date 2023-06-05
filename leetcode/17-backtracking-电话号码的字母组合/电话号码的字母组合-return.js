/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const phone = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
     "4": ["g", "h", "i"],
     "5": ["j", "k", "l"],
     "6": ["m", "n", "o"],
     "7": ["p", "q", "r", "s"],
     "8": ["t", "u", "v"],
     "9": ["w", "x", "y", "z"],
  }

  function recursive (now, digits = '') {
    let ans = []
    if (digits.length === 0) {
      ans.push(now)
      return ans
    } else {
      for (const key of phone[digits[0]]) {
        ans.push(...recursive(now + key, digits.slice(1)))
      }
      return ans
    }
  }
  
  
  return recursive('', digits)
};
// @lc code=end

console.log(letterCombinations('23'))