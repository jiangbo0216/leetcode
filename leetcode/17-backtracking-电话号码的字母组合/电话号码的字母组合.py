#
# @lc app=leetcode.cn id=17 lang=python3
#
# [17] 电话号码的字母组合
#

# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        phone = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
             "4": ["g", "h", "i"],
             "5": ["j", "k", "l"],
             "6": ["m", "n", "o"],
             "7": ["p", "q", "r", "s"],
             "8": ["t", "u", "v"],
             "9": ["w", "x", "y", "z"],
        }

        def backtrack(now, next_digits):
            if not next_digits:
                ans.append(now)
            else:
                for d in phone[next_digits[0]]:
                    backtrack(now + d, next_digits[1:])
        ans = []

        if digits:
            backtrack("", digits)
        return ans
# @lc code=end

