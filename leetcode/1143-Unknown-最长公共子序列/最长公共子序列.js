/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  /*
  定义状态：d[i][j] 代表 s1 i 位置和 s2 j 位置的 最长公共子序列的长度
  状态转移：如果 s1[i] == s2[j] 或者不等
  */

  const m = text1.length,
    n = text2.length;
  // 因为多了一行 0 0， 所以dp 的面积为 m+1 * n+1
  const dp = new Array(m + 1).fill(0).map(() => {
    return new Array(n + 1).fill(0);
  });

  // 我们已知 d[0][0] d[0][1] d[1][0] = 0
  // 因为取数是 i-1 所以 <= m
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];

      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"));
// @lc code=end

/*
动态规划是解决最优化问题的一种算法思想，其基本思想是将问题划分为若干个子问题，通过解决子问题来推导出原问题的解。动态规划常用于求解具有重叠子问题和具有最优子结构性质的问题。

下面是一般性的动态规划解题思路和步骤：

1. 确定状态：将原问题转化为子问题，明确每个子问题应该包含哪些变量。状态可以是一个数值、一个字符串、一个数组、一个矩阵等。

2. 定义状态转移方程：找出相邻两个状态之间的联系，定义状态转移方程。状态转移方程是一个递推式，表示当前状态与之前的状态之间的关系，通常包含一个或多个决策。

3. 确定边界条件：确定状态转移方程中的初始状态或者边界条件。边界条件通常是指最小状态的情况，例如数组下标为0，或者字符串为空等。

4. 计算顺序：计算顺序是指按照拓扑排序的顺序依次计算每个状态的值。通常，计算顺序需要满足状态转移方程中后面的状态不依赖于前面状态未计算出来的值。

5. 计算最终结果：根据状态转移方程和边界条件计算出最终结果。

6. 可选的优化：在实际应用中，可以通过优化计算顺序或状态转移方程等来降低时间复杂度或空间复杂度。

需要注意的是，以上步骤并不是固定不变的，具体问题需要根据具体情况进行调整和优化。
*/
