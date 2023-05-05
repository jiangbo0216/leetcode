/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * tag: [bfs]
 * @param {string} s
 * @return {string}
 */

// 这里的思路类似 bfs，搜索各种情况
// 这个的复杂度过于复杂，n! 级别（甚至更高）
// 这个解法中有优化的空间，比如通过现有的找到的是回文或者不是回文，根据回文的定位进行延伸判断更多的字串是否为回文字符串
// 由于我们只关心回文的（数量少），我们关注回文 => 更多的回文这样会更有效率
var longestPalindrome = function(s) {
  const search = function (s, i) {
    let sub = s[i]
    for (let tail = i; tail < s.length; tail++) {
      const tmp = s.slice(i, i + tail - i + 1)
      if (tmp === tmp.split('').reverse().join('')) {
        if (tmp.length > sub.length) {
          sub = tmp
        }
      }
    }

    for (let j = i+1; j < s.length; j++) {
      const res = search(s, j)
      if (res.length > sub.length) {
        sub = res
      }
    }
    return sub

  }

  return search(s, 0)
};
// @lc code=end
console.time('1')
console.log(longestPalindrome('abbcccbbbcaaccbababcbcabca'))
console.timeEnd('1')

