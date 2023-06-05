/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let row = new Array(n).fill('.')
  let queens = new Array(n).fill(-1)
  let solutions = []
  let columns = new Set()
  let diagonal1 = new Set()
  let diagonal2 = new Set()
  function generateBoard() {
    board = []
    for (let i = 0; i < n; i++) {
      // 设置 Q
      row[queens[i]] = 'Q'
      board.push(row.join(''))
      // 恢复
      row[queens[i]] = '.'
    }
    return board
  }

  function backtrack (row) {
    if (row === n) {
      const board = generateBoard()
      solutions.push(board)
    } else {
      for (let i = 0; i < n; i++) {
        if (columns.has(i) || diagonal1.has(row - i) || diagonal2.has(row + i)) {
          continue
        } 
        queens[row] = i
        columns.add(i)
        // \ 对角线 row col 的差相等，代表在同一对角线上
        diagonal1.add(row - i)
        // / 对角线 row col 的和相等，代表在同一对角线上
        diagonal2.add(row + i)
        backtrack(row + 1)
        columns.delete(i)
        diagonal1.delete(row - i)
        diagonal2.delete(row + i)
      }
    }
  }

  backtrack(0)
  return solutions
};
// @lc code=end



console.log(solveNQueens(4))