# 将列表中的每个元素平方，并返回一个新的列表
my_list = [1, 2, 3, 4, 5]
squared_list = list(map(lambda x: x ** 2, my_list))
print(squared_list)  # 输出 [1, 4, 9, 16, 25]
