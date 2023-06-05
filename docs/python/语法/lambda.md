在 Python 中，lambda 是一个用于创建匿名函数的关键字。lambda 函数是一种简单的、单行的函数定义，通常用于需要一个简单函数的场合，例如排序、映射等。lambda 函数的语法如下：

```
lambda arguments: expression
```

其中，`arguments` 是一个逗号分隔的参数列表，类似于普通函数的参数列表，但不需要指定参数类型。`expression` 是一个简单的 Python 表达式，用于计算函数的返回值。

下面是一个示例，演示如何使用 lambda 函数来进行排序：

```
# 使用 lambda 函数进行排序
fruits = ['apple', 'banana', 'cherry', 'date']
sorted_fruits = sorted(fruits, key=lambda x: len(x))
print(sorted_fruits)  # ['date', 'apple', 'banana', 'cherry']
```

在这个例子中，我们使用 `sorted` 函数对水果列表进行排序，通过 `key` 参数指定排序规则。我们使用一个 lambda 函数来指定排序规则，该函数返回水果名称的长度。由于该函数只有一个表达式，因此我们可以使用 lambda 函数来定义它，而不需要为它命名。

lambda 函数还可以与其他 Python 函数一起使用，例如 `map` 和 `filter` 函数，用于对列表中的元素进行映射和筛选。以下是一些示例：

```
# 使用 lambda 函数进行映射
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)  # [1, 4, 9, 16, 25]

# 使用 lambda 函数进行筛选
numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
```

在这些示例中，我们使用 lambda 函数来指定 `map` 和 `filter` 函数的规则，用于对列表中的元素进行映射和筛选。