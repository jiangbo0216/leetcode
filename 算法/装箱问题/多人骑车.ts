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


// 如何让这个题目变得复杂：车的载重不一样，或者一个车可以坐多个人

export function binPacking([threshold, count]: [number, number], array: number[]) {
  // 这个方法会直接修改数组
  array = array.sort()

  let box = 0

  // 贪心：每次装入最接近 threshold 的 items
  // 双指针: 一个指针用来定位最大的值，一个指针用来寻找最合适的 compliment
  let j = count - 1
  let i = 0

  const solves = new Array(count).fill(1)

  function findBestSuiteMin (j: number, remain: number) {
    for (let i = j - 1; i > -1; i--) {
      if (array[i] <= remain && solves[i] !== 0) {
        return i
      }
    }
    return -1
  }

  for (; j > -1;) {
    if (solves[j] === 0) {
      --j
      continue
    }
    const max = array[j];
    const minIdx = findBestSuiteMin(j, threshold - max)

    if (minIdx > -1) {
      solves[minIdx] = 0
    }
    solves[j] = 0
    --j
    box += 1
  }

  return box
}