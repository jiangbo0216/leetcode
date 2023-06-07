import collections

d = collections.defaultdict(int)
d['a'] = 1
print(d['a'])  # 输出 1
print(d['b'])  # 输出 0，因为 int() 的默认返回值是 0


d = {}
d['a'] = 1
print(d['a'])  # 输出 1
print(d['b'])  # 抛出 KeyError 异常
