/*
## 题目描述

输入一个长度为4的倍数的字符串Q,字符串中仅包含WASD四个字母。

将这个字符串中的连续子串用同等长度的仅包含WASD的[字符串替换](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%9B%BF%E6%8D%A2&spm=1001.2101.3001.7020),如果替换后整个字符串中WASD四个字母出现的频数相同,

那么我们称替换后的字符串是“完美走位”。求子串的最小长度。如果输入字符串已经平衡则输出0。

输入: 一行字符表示给定的字符串S

数据范围: 1<=n<=105且n是4的倍数,字符串中仅包含WASD四个字母。

输出: 整数表示答案

## 示例1

输入: WASDAASD

输出: 1

说明: 将第二个A替换为W,即可得到完美走位。

## 示例2

输入: AAAA

输出: 3

说明: 将其中三个连续的A替换为WSD,即可得到完美走位

## 示例3

输入

ASDW

输出

0

## 示例4

输入

AASW

输出

1

## 示例5

输入

WAAADSSS

输出

3
*/

// 更难的可能是如何修改位平均频次或者如何变更为目标的字符串
export function averageFrequency (s: string) {
  const remainder = s.length % 4 
  if (remainder !== 0) {
    console.log(s, '字符串长度不是4的倍数')
  }
  const average = s.length / 4
  let map = new Map<string, number>()
  // 统计 WASD 的频率
  const charList = s.split('')
  let overAverageMap = new Map<string, number>()
  charList.forEach(char => {
    let record = map.get(char) 
    if (record!== undefined) {
      record = record + 1
      map.set(char, record)
      if (record > average) {
        overAverageMap.set(char, record)
      }
    } else {
      map.set(char, 1)
    }
  })

  let editDistance = 0
  for (const v of overAverageMap.values()) {
    editDistance += v - average
  }
  
  return editDistance

}