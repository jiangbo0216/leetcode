/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) return 0 
  const mergeArr = nums1.concat(nums2)
  mergeArr.sort((a, b) => a -b)
  if (mergeArr.length & 1 === 1) {
    const midIndex = ~~(mergeArr.length / 2)
    return mergeArr[midIndex]
  } else {
    const midIndex = mergeArr.length / 2
    return (mergeArr[midIndex] + mergeArr[midIndex - 1]) /2
  }
};
// @lc code=end

// findMedianSortedArrays([1,2], [3,4])

// [1,2,3] [3,4]

