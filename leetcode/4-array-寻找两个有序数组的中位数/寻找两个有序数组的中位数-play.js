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
// var findMedianSortedArrays = function(nums1, nums2) {
//   if(nums1.length === 0 && nums2.length === 0) return 0

//   let midIndex = Math.ceil((nums1.length + nums2.length) / 2 ) -1
//   let i = j = 0
//   let mid = 0
//   // 逐步查找
//   while (midIndex > - 1) {
//     if ( nums2[j] === undefined || nums1[i] && (nums1[i] <= nums2[j])) {
//       mid = nums1[i]
//       i++
//     } else {
//       mid = nums2[j]
//       j++
//     }
//     midIndex--
//   }
//   if ((nums1.length + nums2.length) & 1 === 1) {
//     return mid
//   } else {
//     let mida
//     if (i >= nums1.length) {
//       mida = nums2[j]
//     } else if (j > nums2.length){
//       mida = nums1[i]
//     } else {
//       mida = nums1[i] > nums2[j]  ? nums2[j]  : nums1[i]
//     }
//      return (mid + mida) / 2
//   }

// };


var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length
  let totalLen = len1 + len2
  if (totalLen & 1 === 1) {
    // 中位数的索引 比如 ~~(1 / 2) = 0
    let midIndex = ~~(totalLen / 2)
    const [mid] = getKthElement(nums1, nums2, [midIndex + 1])
    return mid
  } else {
    // ~~(4/2) = 2
    let midIndex1 = ~~(totalLen / 2), midIndex2 = ~~(totalLen / 2) -1
    const [mid1 , mid2] =  getKthElement(nums1, nums2,[  midIndex2 + 1, midIndex1 + 1 ])
    return (mid1 + mid2) /2
  }
};

function getKthElement  (nums1, nums2, kths) {
  let len1 = nums1.length, len2 = nums2.length
  let index1 = 0, index2 = 0
  let kthsEle = []
  kths = kths.map((val, idx, arr) => {
    if (idx === 0) {
      return val
    } else {
      val -= arr[idx -1]
      return val
    }
  })

  for(let i = 0; i < kths.length; i++) {
    k = kths[i]
    while (true) {
      if (k === 0) {
        if (nums1[index1] > nums2[index2]) {
          kthsEle[i] =  nums2[index2]
          index2++
        } else {
          kthsEle[i] =  nums1[index1] 
          index1++
        }    
        break
      }
      if (index1 === len1) {
        kthsEle[i] = nums2[index2 + k -1]
        index2 = index2 + k
        break;
      }
      if (index2 === len2) {
        kthsEle[i] = nums1[index1 + k -1] 
        index1 = index1 + k
        break
      }

      if (k === 1) {
        if (nums1[index1] > nums2[index2]) {
          kthsEle[i] =  nums2[index2]
          index2++
        } else {
          kthsEle[i] =  nums1[index1] 
          index1++
        }
        break
      }

      let half = ~~(k / 2)

      let newIndex1 = Math.min(index1 + half, len1) - 1
      let newIndex2 = Math.min(index2 + half, len2) - 1
      let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]
      if (pivot1 < pivot2) {
        k -= (newIndex1 - index1 + 1);
        index1 = newIndex1 + 1
      } else {
        k -= (newIndex2 - index2 + 1)
        index2 = newIndex2 + 1
      }
    } 
  }
  return kthsEle
}
// @lc code=end

findMedianSortedArrays([1,2], [1,2,3])

// [1,2,3] [3,4, 5]
// [1,2] [3,4]
// [1,2] [1,2]
// [1,4] [2]
// [4,5,6] [4,6,8] 4,4,5,6,6,8

