/*
## 输入描述

第一行两个数字m、n，分别代表自行车限重，部门总人数。

第二行，n个数字，代表每个人的体重，体重都小于等于自行车限重m。

0<m<=200

0<n<=1000000

## 输出描述

最小需要的双人自行车数量。

### 示例1

输入输出示例仅供调试，后台判题数据一般不包含示例

输入

3 4

3 2 2 1

输出

3
*/

// The typical engineering design problems include a knapsack problem, bin-packing problem, traveling salesman problem, vehicle routing problem, machine scheduling order and balance, create yuan design issues, equipment, location and layout.

export function binPacking([threshold, count]: [number, number], array: number[]) {
  // 这个方法会直接修改数组
  array = array.sort()

  let box = 0

  // 贪心：每次装入最接近 threshold 的 items
  // 双指针
  let j = count
  let i = 0

  for (; j > i; j++) {
    const max = array[j];
    const min = array[i]
    
    if (min + max <= threshold) {
      ++i
    }
    box += 1
    --j
  }
  if (j > i) {
    box += 1
  }

  return box
}