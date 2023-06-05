from typing import List


def cmp(a: List[int]) -> int:
    sum1 = a[0] * len(a)
    return sum1


arr = [[1, 1], [3, 3], [2, 2], [5, 5]]

# sort 默认升序排列，在使用 key 参数时，该参数传递的应该是一个函数或者 lambda 表达式，这个函数
# 或者 lambda 表达式的作用是对每个元素进行处理，返回一个数字作为排序的依据。这个数字可以是任何数据类型，
# 包括整数、浮点数、字符串等等，只要它们可以进行比较就可以了。在使用 key 参数时，一定要保证返回的是一个数字类型的值。
print(arr.sort(key=cmp), arr)  # 直接改变了 arr，sort 方法返回值是 None

# Return a new list containing all items from the iterable in ascending order.
print(sorted([[1, 1], [3, 3], [2, 2], [5, 5]], key=cmp))
