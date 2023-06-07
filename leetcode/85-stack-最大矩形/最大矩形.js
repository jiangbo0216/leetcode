/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */
// 这一题把二维的问题转换为1维的问题
// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  const heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for (let row = 0; row < matrix.length; row++) {
    //遍历每一列，更新高度
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "1") {
        heights[col] += 1;
      } else {
        heights[col] = 0;
      }
    }
    //调用上一题的解法，更新函数
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
}

function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = [];
  let p = 0;
  while (p < heights.length) {
    //栈空入栈
    if (stack.length === 0) {
      stack.push(p);
      p++;
    } else {
      const top = stack[stack.length - 1];
      //当前高度大于栈顶，入栈
      if (heights[p] >= heights[top]) {
        stack.push(p);
        p++;
      } else {
        //保存栈顶高度
        const height = heights[stack.pop()];
        //左边第一个小于当前柱子的下标
        const leftLessMin = stack.length === 0 ? -1 : stack[stack.length - 1];
        //右边第一个小于当前柱子的下标
        const rightLessMin = p;
        //计算面积
        const area = (rightLessMin - leftLessMin - 1) * height;
        maxArea = Math.max(area, maxArea);
      }
    }
  }
  while (stack.length !== 0) {
    //保存栈顶高度
    const height = heights[stack.pop()];
    //左边第一个小于当前柱子的下标
    const leftLessMin = stack.length === 0 ? -1 : stack[stack.length - 1];
    //右边没有小于当前高度的柱子，所以赋值为数组的长度便于计算
    const rightLessMin = heights.length;
    const area = (rightLessMin - leftLessMin - 1) * height;
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
}

// @lc code=end
