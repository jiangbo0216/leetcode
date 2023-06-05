# 使用 lambda 函数进行排序
fruits = ['apple', 'banana', 'cherry', 'date']
sorted_fruits = sorted(fruits, key=lambda x: len(x))
print(sorted_fruits)  # ['date', 'apple', 'banana', 'cherry']


def length(x):
    return len(x)


fruits = ['apple', 'banana', 'cherry', 'date']
sorted_fruits = sorted(fruits, key=length)
print(sorted_fruits)  # ['date', 'apple', 'banana', 'cherry']


# 使用 lambda 函数进行映射
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)  # [1, 4, 9, 16, 25]

# 使用 lambda 函数进行筛选
numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
