list1 = [4, 5, 6]
list2 = [1, 2, 3]
list1[:0] = list2

print(list1)  # 输出 [1, 2, 3, 4, 5, 6]。

stack = []
stack.extend([1, 2, 3])
print(stack)  # 输出 [1, 2, 3]

stack.extend([4, 5])
print(stack)  # 输出 [1, 2, 3, 4, 5]