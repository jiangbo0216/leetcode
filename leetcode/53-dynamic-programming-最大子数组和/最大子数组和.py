#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子数组和
#
from typing import List
# @lc code=start


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # pre 代表到某个位置的最大的字数组和
        # max 表示全局的最大的子数组和

        pre, maxAns = 0, nums[0]
        for x in nums:
            pre = max(pre + x, x)
            maxAns = max(maxAns, pre)
        return maxAns
        # 只有一个变量的版本g
        # max_val = nums[0]
        # for i in range(1, len(nums)):
        #     if nums[i] + nums[i-1] > nums[i]:
        #         nums[i] += nums[i-1]
        #     if nums[i] > max_val:
        #         max_val = nums[i]
        # return max_val

# @lc code=end


s = Solution()
print(s.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
