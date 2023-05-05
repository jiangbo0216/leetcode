/*
## 题目描述

给定一个字符串s，s包括以空格分隔的若干个单词，请对s进行如下处理后输出：

1、单词内部调整：对每个单词字母重新按字典序排序

2、单词间顺序调整：

1）统计每个单词出现的次数，并按次数降序排列

2）次数相同，按单词长度升序排列

3）次数和单词长度均相同，按字典升序排列

请输出处理后的字符串，每个单词以一个空格分隔。

输入描述：

一行字符串，每个字符取值范围：【a-zA-z0-9】以及空格，字符串长度范围：【1，1000】

例1：

输入

This is an apple

输出

an is This aelpp

例2：

输入：

My sister is in the house not in the yard

输出：

in in eht eht My is not adry ehosu eirsst
*/

export function sortInWord (s: string) {
  return s.split('').sort().join('')
}

export function sortBetweenWord (list: string[]) {
  let map = new Map<string, number>()
  for (const item of list) {
    if (map.has(item)) {
      const count = map.get(item)! + 1
      map.set(item, count)
    } else {
      map.set(item, 1)
    }
  }

  const entries = [...map.entries()].sort((a, b) => {
    // 降序排列
    const countDiff = b[1] - a[1]
    if (countDiff === 0) {
      const lenDiff = a[0].length - b[0].length
      if (lenDiff === 0) {
        return a[0] > b[0] ? 1 : -1
      } else {
        return lenDiff
      }
    } else {
      return countDiff
    }
    // return b[1] - a[1]
  })

  return entries
}

export function countWord(list: string[]) {
  const sortList: string[][] = new Array(list.length).fill([])
  
  const entries = sortBetweenWord(list)
  for (let i = 0, len = entries.length; i < len; i++) {
    const [s, count] = entries[i]
    sortList[i] = new Array(count).fill(s)
  }
  return sortList
}


export function countSortString (s: string): string {
  let list = s.split(' ')

  list = list.map(sortInWord)

  const sortList = countWord(list)


  // 统计次数
  return sortList.flat().join(' ')
}