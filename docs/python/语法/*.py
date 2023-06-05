queens = [-1] * 4
print(queens)

# [-1, -1, -1, -1]

# = new Array(n).fill(-1)

queens = [{"a": 1}] * 4
queens[0]['a'] = 2
print(queens)

# 这里的行为和 js 一致

# [{'a': 2}, {'a': 2}, {'a': 2}, {'a': 2}]