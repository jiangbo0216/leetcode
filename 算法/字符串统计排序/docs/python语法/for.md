Python 中的 for 循环有多种使用方式，下面列举了一些常见的用法：

1. 遍历列表、元组、字符串等序列类型：

```py
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

2. 遍历字典的键：

```py
dict = {"name": "Alice", "age": 25, "city": "New York"}
for key in dict:
    print(key)
```

3. 遍历字典的值：

```py
dict = {"name": "Alice", "age": 25, "city": "New York"}
for value in dict.values():
    print(value)
```

4. 遍历字典的键值对：

```py
dict = {"name": "Alice", "age": 25, "city": "New York"}
for key, value in dict.items():
    print(key, value)
```

5. 遍历一个范围内的数字：

```py
for i in range(1, 6):
    print(i)
```

6. 遍历一个文件的每一行：

```py
with open("file.txt", "r") as file:
    for line in file:
        print(line)
```

在以上用法中，for 循环通过遍历不同类型的可迭代对象来实现不同的功能。在循环中，可以使用 break、continue 和 else 关键字来控制循环的执行。例如，使用 break 关键字可以在满足某个条件时提前终止循环，使用 continue 关键字可以跳过当前迭代，直接进入下一次迭代，使用 else 关键字可以在循环正常结束后执行一些操作。