在 Python3 中，`in` 是一个用于测试成员资格的操作符，可以在多种情况下使用。以下是 `in` 的所有用法：

1. 判断一个元素是否在一个序列中

    ```
    element in sequence
    ```

    这个操作符用于判断一个元素是否在一个序列中，如果在则返回 `True`，否则返回 `False`。序列可以是字符串、列表、元组、集合、字典的键等。

    例如：

    ```
    >>> 'a' in 'hello'
    True
    >>> 1 in [1, 2, 3]
    True
    >>> 'cat' in ('dog', 'cat', 'bird')
    True
    >>> 'apple' in {'apple': 1, 'orange': 2}
    True
    ```

2. 判断一个子序列是否在一个序列中

    ```
    subsequence in sequence
    ```

    这个操作符用于判断一个序列是否为另一个序列的子序列，如果是则返回 `True`，否则返回 `False`。

    例如：

    ```
    >>> 'lo' in 'hello'
    True
    >>> [1, 2] in [0, 1, 2, [1, 2], 3]
    True
    >>> ('cat', 'dog') in [('bird', 'cat'), ('dog', 'cat'), ('fish', 'worm')]
    False
    ```

3. 判断一个键是否在一个字典中

    ```
    key in dictionary
    ```

    这个操作符用于判断一个键是否在一个字典中，如果在则返回 `True`，否则返回 `False`。

    例如：

    ```
    >>> 'apple' in {'apple': 1, 'orange': 2}
    True
    >>> 'banana' in {'apple': 1, 'orange': 2}
    False
    ```

4. 判断一个文件是否包含一个字符串

    ```
    string in file_object
    ```

    这个操作符用于判断一个文件是否包含一个字符串，如果包含则返回 `True`，否则返回 `False`。

    例如：

    ```
    >>> with open('example.txt', 'r') as file:
    ...     'hello' in file
    True
    >>> with open('example.txt', 'r') as file:
    ...     'world' in file
    False
    ```

5. 判断一个对象是否为另一个对象的属性

    ```
    attribute in object
    ```

    这个操作符用于判断一个对象是否有一个属性，如果有则返回 `True`，否则返回 `False`。

    例如：

    ```
    >>> hasattr(list, 'append')
    True
    >>> hasattr(list, 'pop')
    True
    >>> hasattr(list, 'remove')
    False
    ```