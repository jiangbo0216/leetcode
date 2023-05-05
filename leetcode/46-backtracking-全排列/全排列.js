/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [nums]
  }
  let result = []

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const newArray = [...nums.slice(0,i), ...nums.slice(i+1)]
    const per = permute(newArray)
    for (const p of per) {
      result.push([element, ...p])
    }
  }
  return result
};
// @lc code=end

permute([1,2,3])
