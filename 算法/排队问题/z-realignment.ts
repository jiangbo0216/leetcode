/*
■ 题目描述
有一批箱子（形式为字符串，设为str），

要求将这批箱子按从上到下以之字形的顺序摆放在宽度为 n 的空地，请输出箱子的摆放位置。

例如：箱子ABCDEFG，空地宽度为3，摆放结果如图：


则输出结果为：

AFG

BE

CD

输入描述
输入一行字符串，通过空格分隔，前面部分为字母或数字组成的字符串str，表示箱子；

后面部分为数字n，表示空地的宽度。例如：

ABCDEFG 3

输出描述
箱子摆放结果，如题目示例所示

AFG

BE

CD

备注

请不要在最后一行输出额外的空行

str只包含字母和数字，

1 <= len(str) <= 1000

1 <= n <= 1000

示例1：
输入

ABCDEFG

3

输出

AFG

BE

CD

示例2：
输入

abcdefghijklmnopq

5

输出

ajk

bil

chm

dgnq

efop

*/

export function zRealignment (s: string, rows: number) {
  let zRealignmentLine = ''
  let direction: number
  for (let i = 0; i < rows; i++) {
    let line = ''
    direction = 1
    for (let j = i, len = s.length ; j < len;) {
      const char = s[j];
      line += char
      if (direction > 0) {
        j = j + 2 * (rows - i) -1
        direction = -1
      } else {
        direction = 1
        j = j + 2 * i + 1
      }
    }
    // process.stdout.write(line + '\n')
    zRealignmentLine = zRealignmentLine + line + '\n'
  }
  return zRealignmentLine
}