#
# @lc app=leetcode.cn id=49 lang=python3
#
# [49] 字母异位词分组
#
import collections
from typing import List

# @lc code=start


# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#         mp = collections.defaultdict(list)

#         for st in strs:
#             counts = [0] * 26
#             for ch in st:
#                 counts[ord(ch) - ord("a")] += 1
#             # 需要将 list 转换成 tuple 才能进行哈希
#             mp[tuple(counts)].append(st)

#         return list(mp.values())

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = []
        group_map = {}

        for s in strs:
            found = False
            for group in ans:
                if self.is_anagram(s, group[0]):
                    group.append(s)
                    found = True
                    break
            if not found:
                ans.append([s])

        return ans

    def is_anagram(self, s1: str, s2: str) -> bool:
        if len(s1) != len(s2):
            return False
        count = {}
        for c in s1:
            count[c] = count.get(c, 0) + 1
        for c in s2:
            if c not in count:
                return False
            count[c] -= 1
            if count[c] == 0:
                del count[c]
        return len(count) == 0

# @lc code=end


s = Solution()
print(
    s.groupAnagrams(
        ["eat", "tea", "tan", "ate", "nat", "bat"]))


'''
这段代码实现了将给定字符串列表中的异位词进行分组。具体来说，它使用一个 defaultdict 对象 mp 来记录每个异位词所在的组。对于每个字符串 st，它首先计算出 st 中每个字符出现的次数，然后将这些次数组成一个元组作为 key，并将 st 添加到 mp[key] 中。最后，它返回 mp 中所有的值，即每个组中的字符串列表。

这段代码依赖于 Python 的 collections 模块中的 defaultdict 类来创建默认值为列表的字典对象。它还使用了 ord() 函数将字符转换为 ASCII 码，并使用了 tuple() 函数将列表转换为元组。

需要注意的是，这段代码的时间复杂度为 O(nk)，其中 n 是字符串列表的长度，k 是字符串的平均长度。虽然它的时间复杂度比一般的暴力算法要好，但如果字符串非常长，仍然可能会超时。
'''

'''

使用 `dict` 对象也可以实现这个算法，不过需要在添加每个字符串时都要检查它是否属于某个已经存在的异位词组。具体来说，可以遍历已有的异位词组列表，对于每个组，将当前字符串与组中的任意一个字符串进行比较，如果它们是异位词，则将当前字符串添加到该组中，并标记已经处理过。如果当前字符串不属于任何已有的组，则创建一个新的组并将当前字符串添加到其中。

这个算法的时间复杂度为 $O(n^2 k)$，其中 $n$ 是字符串列表的长度，$k$ 是字符串的平均长度。因为需要在两个字符串之间进行比较，所以时间复杂度是二次的。这个算法的空间复杂度为 $O(n)$。

相比之下，使用 `defaultdict` 可以将时间复杂度降低到 $O(nk)$，并且代码更加简洁易懂。因此，使用 `defaultdict` 是更好的选择。
'''
