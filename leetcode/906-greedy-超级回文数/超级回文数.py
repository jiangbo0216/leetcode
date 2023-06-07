#
# @lc app=leetcode.cn id=906 lang=python3
#
# [906] 超级回文数
#

# @lc code=start
class Solution(object):
    def superpalindromesInRange(self, L, R):
        L, R = int(L), int(R)
        MAGIC = 100000

        """
        这段代码实现了将一个正整数翻转的功能。具体来说，它使用了一个`while`循环来不断地取出`x`的末位数字，然后将其加到`ans`的末位，最后将`x`除以10来去掉末位数字。

        具体来说，代码中的`x % 10`可以取出`x`的末位数字，然后将其乘以10加到`ans`的末位，就相当于将`ans`中原来的数字向左移动一位，然后将新的数字加到末尾。最后，`x /= 10`的作用是将`x`的末位去掉，因为整数除法会向下取整，所以相当于将`x`向右移动一位。

        例如，如果`x`的值为`12345`，那么初始时`ans`的值为0，第一次循环时，`x % 10`的值为5，所以将5加到`ans`的末尾，此时`ans`的值为5；然后将`x`除以10，将其变为`1234`，第二次循环时，`x % 10`的值为4，所以将4加到`ans`的末尾，此时`ans`的值为54；然后再将`x`除以10，将其变为`123`，以此类推，直到将`x`的所有数字都取完为止，最后返回`ans`，就得到了`x`的翻转后的值。
        """
        def reverse(x):
            ans = 0
            while x:
                ans = 10 * ans + x % 10
                x //= 10
            return ans

        def is_palindrome(x):
            return x == reverse(x)

        ans = 0

        # count odd length
        for k in range(MAGIC):
            s = str(k)  # Eg. s = '1234'
            t = s + s[-2::-1]  # t = '1234321'
            v = int(t) ** 2
            if v > R:
                break
            if v >= L and is_palindrome(v):
                ans += 1

        # count even length
        for k in range(MAGIC):
            s = str(k)  # Eg. s = '1234'
            t = s + s[::-1]  # t = '12344321'
            v = int(t) ** 2
            if v > R:
                break
            if v >= L and is_palindrome(v):
                ans += 1

        return ans

# @lc code=end


s = Solution()

print(s.superpalindromesInRange("4", "1000"))
