#
# @lc app=leetcode.cn id=17 lang=python3
#
# [17] 电话号码的字母组合
#
from typing import List
import itertools

# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return list()
        
        phoneMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        groups = (phoneMap[digit] for digit in digits)
        return ["".join(combination) for combination in itertools.product(*groups)]

# @lc code=end


solution = Solution()
digits = "23"
combinations = solution.letterCombinations(digits)
print(combinations)


