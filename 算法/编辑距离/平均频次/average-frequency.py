'''
AAAA
WASDAASD
ASDW
'''

str=input()
map={}
map['A']=0
map['S']=0
map['D']=0
map['W']=0
for i in str:
    map[i]+=1
ave=int(len(str)/4)
res=0
for m in map:
    if map[m]<ave:
        res+=ave-map[m]
print(res)