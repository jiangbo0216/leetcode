


def mineSweeping (m, n, arr):
  def dfs(arr, i, j):
    print(i, j)
    if i < 0 or j < 0 or i >= m or j >= n or arr[i][j] == 0:
      return
    arr[i][j] = 0
    dfs(arr, i-1, j)
    dfs(arr, i+1, j)
    dfs(arr, i, j-1)
    dfs(arr, i, j+1)
    dfs(arr, i-1, j-1)
    dfs(arr, i+1, j-1)
    dfs(arr, i-1, j+1)
    dfs(arr, i+1, j+1)

  res = 0

  for i in range(m):
    for j in range(n):
      if arr[i][j] == 1:
        res += 1
        dfs(arr, i, j)

  return res
