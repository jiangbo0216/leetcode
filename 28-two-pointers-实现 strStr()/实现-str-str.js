/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Sunday 算法
/*
  偏移表给出了下一步可能匹配需要移动的最小步数。
  偏移表的作用是存储每一个在 模式串 中出现的字符，在 模式串 中出现的最右位置到尾部的距离 +1，例如 aab：

  a 的偏移位就是 len(pattern)-1 = 2
  b 的偏移位就是 len(pattern)-2 = 1
  其他的均为 len(pattern)+1 = 4

 */
var strStr = function(haystack, needle) {
  function calShiftMat (s) {
    const dic = Object.create(null)
    for (let i = 0; i < s.length; i++) {
      if (dic[s[i]]) {
        dic[s[i]] = s.length - i
      }
    }
    dic['ot'] = s.length + 1
    

    // TODO
  }
};
// @lc code=end

