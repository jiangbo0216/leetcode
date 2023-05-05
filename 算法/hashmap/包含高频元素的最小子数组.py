
N=7
vec='1 2 2 4 2 1 1'.split()
map={}
Max=0
for i in range(len(vec)):
    if vec[i] not in map:
        map[vec[i]]=0
    map[vec[i]]+=1
    Max=max(Max,map[vec[i]])
res=len(vec)
for m in map:
    if map[m]==Max:
        start=vec.index(m)
        end=start
        for i in range(len(vec)):
            if vec[i]==m:
                end=i
        res=min(res,end-start+1)
print(res)