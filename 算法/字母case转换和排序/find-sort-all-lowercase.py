'''
abc
s,sdf134 A2c4b
'''
code = input()
vec = input().split()

res=-1

for i in range(len(vec)):
  lowercase = vec[i].lower()
  tmp=''

  for j in lowercase:
    if j >= 'a' and j <= 'z':
      tmp+=j

  l = list(tmp)
  l.sort()
  tmp="".join(l)
  
  if code == tmp:
    res = i + 1
    break
print(res)