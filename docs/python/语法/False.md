在 Python 中，下列值在布尔上下文中被视为 `False`（也称为假值）：

- `False`：布尔类型的值 False
- `None`：表示空值的特殊对象 None
- `0`：整数零
- `0.0`：浮点数零
- `''`：空字符串
- `[]`：空列表
- `{}`：空字典
- `()`：空元组
- 其他类型的对象，如果它们定义了一个名为 `__bool__()` 或 `__len__()` 方法，并且这些方法返回 False 或者 0，则它们在布尔上下文中也会被视为假值。

以下是一个示例，演示了这些值在布尔上下文中的行为：

```python
values = [False, None, 0, 0.0, '', [], {}, (), 'hello', [1, 2, 3]]

for value in values:
    if value:
        print(f'{value} is truthy')
    else:
        print(f'{value} is falsy')
```

输出结果如下：

```
False is falsy
None is falsy
0 is falsy
0.0 is falsy
 is falsy
[] is falsy
{} is falsy
() is falsy
hello is truthy
[1, 2, 3] is truthy
```

在这个示例中，我们将上述假值和一个非空列表 `[1, 2, 3]` 放入一个列表中。然后我们使用 `for` 循环遍历列表，对每个值进行布尔测试，并根据值是真值还是假值打印相应的消息。