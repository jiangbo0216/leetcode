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
// var lengthOfLongestSubstring = function(s) {
//   const map = new Map()

//   let left = 0
//   const len = s.length

//   let num = 0

//   // 这里使用 map 记录 char 的位置
//   for (let i = 0; i < len; i++) {

//     if (map.has(s[i]) && map.get(s[i]) >= left) {
//       left = map.get(s[i]) + 1
//     }
//     num = Math.max(i - left + 1, num)
//     map.set(s[i], i)
//   }

//   return num

// };

var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过

  const set = new Set();

  const n = s.length;

  // 右指针，初始值为 0，相当于我们在字符串的左边界的左侧，还没有开始移动

  let j = 0,
    len = 0;

  for (let i = 0; i < n; i++) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      set.delete(s.charAt(i - 1));
    }

    while (j < n && !set.has(s.charAt(j))) {
      // 不断地移动右指针
      set.add(s.charAt(j));
      ++j;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    len = Math.max(len, j - i);
  }
  return len;
};
// @lc code=end

lengthOfLongestSubstring("abba");
