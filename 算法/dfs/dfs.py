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