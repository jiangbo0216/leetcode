/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  let dp = []

  let maxLen = 1

  let begin = 0


  for (let i = 0; i < len; i++) {
    dp[i] = []
    dp[i][i] = true
  }

  // i 为 x， j 为 y，dp[i][j] = dp[i+1][j-1]，参考的值为右上方的值
  for(let j = 1; j < len; j++) {
    for(let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i+1][j-1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)

};
// @lc code=end

console.time('1')
console.log(longestPalindrome('abbcccbbbcaaccbababcbcabca'))
console.timeEnd('1')
