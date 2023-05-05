## input 方法如何使用

`input()` 方法用于从用户处获取输入。它会将用户输入的文本作为字符串返回。您可以使用以下示例代码来获取用户输入：

```python
name = input("Please enter your name: ")
print("Hello, " + name)
```

在这个例子中，`input()` 方法会打印提示信息 "Please enter your name: "，然后等待用户输入文本。一旦用户输入了文本并按下回车键，`input()` 方法会返回这个文本，然后将其赋值给变量 `name`。最后，代码会打印出一条问候语，包含用户输入的名字。

请注意，`input()` 方法返回的是一个字符串，如果需要将其转换成其他类型（例如整数或浮点数），需要使用相应的转换方法（例如 `int()` 或 `float()`）。例如：

```python
age = int(input("Please enter your age: "))
print("You will be " + str(age+1) + " years old next year.")
```

在这个例子中，`input()` 方法会获取用户输入的年龄，然后使用 `int()` 方法将其转换成整数类型。接下来，代码会打印出一条消息，告诉用户明年他们将会多少岁。