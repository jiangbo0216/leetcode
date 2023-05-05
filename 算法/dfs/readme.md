## dfs

dfs 是在多个解决方案中找到最佳的方法的通用算法，其他的算法例如 **贪心** 和 **动态规划** 是在 dfs 基础上优化的结果

## 遍历


## 搜索

## 原理

DFS（深度优先搜索）是一种用于图遍历或树遍历的算法，它从根节点或起点开始，沿着一条路径尽可能深地访问每个节点，直到无法继续为止，然后返回到前一个节点，尝试访问另一条路径，直到所有节点都被访问为止。

DFS使用栈或递归实现，可以用递归或非递归的方式进行实现。

递归写法：

```python
def dfs_recursive(graph, start, visited):
    visited.add(start)
    print(start)

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
```

这个函数使用递归来遍历图。首先，我们将起始节点标记为已访问并打印。然后，我们遍历起始节点的所有邻居节点，如果邻居节点没有被访问过，则递归调用dfs_recursive函数。

循环写法：

```python
def dfs_iterative(graph, start):
    visited, stack = set(), [start]

    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(vertex)
            stack.extend(set(graph[vertex]) - visited)

    return visited
```

这个函数使用栈来遍历图。我们首先将起始节点入栈，并将其标记为已访问。然后，我们进入循环，直到栈为空。在每次循环中，我们从栈中弹出一个节点，如果该节点未被访问过，则将其标记为已访问，并打印该节点。然后，我们将该节点的所有未被访问的邻居节点加入栈中，以便在下一次循环中访问它们。

这两种写法都可以实现DFS算法，选择哪种写法取决于具体的应用场景和个人喜好。

## 可实际运行的代码

好的，下面是一个完整实现的例子，包括图数据结构的定义、DFS的递归实现和迭代实现。这里使用Python语言来实现。

```python
# 定义一个图数据结构
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}


# 递归实现DFS
def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()

    visited.add(start)
    print(start)

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)


# 迭代实现DFS
def dfs_iterative(graph, start):
    visited, stack = set(), [start]

    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(vertex)
            stack.extend(set(graph[vertex]) - visited)

    return visited


# 测试代码
print("递归实现DFS:")
dfs_recursive(graph, 'A')

print("\n迭代实现DFS:")
dfs_iterative(graph, 'A')
```

在这个例子中，我们定义了一个包含6个节点的图数据结构，并分别实现了递归和迭代两种方式的DFS遍历。在测试代码中，我们调用了这两个函数，以'A'为起始节点进行遍历。运行这段代码，输出结果如下：

```
递归实现DFS:
A
B
D
E
F
C

迭代实现DFS:
A
C
F
B
E
D
```

可以看到，这两种实现方式都可以遍历图中的所有节点，但输出顺序略有不同。