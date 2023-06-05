# 删除字符串开头和结尾的空白字符
s1 = '   hello, world!   '
s2 = s1.strip()
print(s2)  # 输出：'hello, world!'

# 删除字符串开头和结尾的指定字符
s3 = '---hello, world!---'
s4 = s3.strip('-')
print(s4)  # 输出：'hello, world!'

# 删除字符串开头和结尾的多个字符
s5 = '***hello, world!***'
s6 = s5.strip('*!')
print(s6)  # 输出：'hello, world'
