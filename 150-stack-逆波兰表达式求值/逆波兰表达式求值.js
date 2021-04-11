/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

// 逆波兰表达式由波兰的逻辑学家卢卡西维兹提出。逆波兰表达式的特点是：没有括号，运算符总是放在和它相关的操作数之后。因此，逆波兰表达式也称后缀表达式。
// 如果遇到操作数，则将操作数入栈；

// 如果遇到运算符，则将两个操作数出栈，其中先出栈的是右操作数，后出栈的是左操作数，使用运算符对两个操作数进行运算，将运算得到的新操作数入栈。


var evalRPN = function(tokens) {
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (isNumber(token)) {
      stack.push(parseInt(token))
    } else {
      const num2 = stack.pop()
      const num1 = stack.pop()
      if (token === '+') {
        stack.push(num1 + num2)
      } else if (token === '-') {
        stack.push(num1 - num2)
      } else if (token === '*') {
        stack.push(num1 * num2)
      } else if (token === '/') {
        stack.push(~~(num1 / num2))
        // ~ 相当于 -(x+1) ~~相当于 -(-(x+1) + 1)
      }
    }
  }
  return stack.pop()
};
const isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token );
}

// @lc code=end

