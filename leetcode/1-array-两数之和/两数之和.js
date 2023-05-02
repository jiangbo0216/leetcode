/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var ret = [];
  var exist = {};
  for(var i = 0; i < nums.length; i++){
      if(typeof(exist[target - nums[i]]) !== 'undefined'){ // 使用typeof比较准确
          ret.push(exist[target - nums[i]]);
          ret.push(i);
      }
      
      exist[nums[i]] = i;
  }
  
  return ret
};

// @lc code=end

