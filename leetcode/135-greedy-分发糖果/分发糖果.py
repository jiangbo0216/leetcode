#
# @lc app=leetcode.cn id=135 lang=python3
#
# [135] 分发糖果
#
from typing import List

# @lc code=start


class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        ret = 1
        inc, dec, pre = 1, 0, 1

        for i in range(1, n):
            if ratings[i] >= ratings[i - 1]:
                dec = 0
                pre = (1 if ratings[i] == ratings[i - 1] else pre + 1)
                ret += pre
                inc = pre
            else:
                dec += 1
                if dec == inc:
                    dec += 1
                ret += dec
                pre = 1

        return ret

# @lc code=end


solution = Solution()
print(solution.candy([1, 3, 6, 5, 3, 2, 1, 1, 2]))


# [1, 2, 3, 1, 2, 4, 5, 1, 2]
