'''
输入
abcdefghijklmnopq 5
'''
str,n=input().split()
n=int(n)
arr=[]
for i in range(n):
    tmp=[]
    arr.append(tmp)
for i in range(len(str)):
    if int(i/n)%2==1:
        ind=n-1-i%n
        arr[ind].append(str[i])
    else:
        ind=i%n
        arr[ind].append(str[i])
for i in arr:
    for j in i:
        print(j,end="")
    print() 