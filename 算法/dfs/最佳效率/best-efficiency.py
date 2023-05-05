import unittest

class TestAdd(unittest.TestCase):
    
    def test_bestEfficiency(self):
        self.assertEqual(bestEfficiency(2, 2, [200, 300]), 500)



def bestEfficiency(m, n, vec):
  res = 0

  def dfs(arr, bucket, used, n):
    nonlocal res
    if used==n or used==len(bucket)*4:
        sum=0
        for i in range(len(bucket)):
            if bucket[i]==0:
                sum+=int(0.8*arr[i])
            else:
                sum+=int(arr[i]+(bucket[i]-1)*arr[i]*0.1)
        res=max(res,sum)
        return
    for i in range(len(bucket)):
        if bucket[i]<4:
            bucket[i]+=1
            dfs(arr, bucket, used+1, n)
            bucket[i]-=1

  arr = []

  for i in vec:
    arr.append(int(i))
  bucket = []

  for i in range(m):
    bucket.append(0)

  dfs(arr,bucket,0,n) #志愿者已使用的人数，志愿者总人数
  print(res)
  return res

if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(TestAdd)
    unittest.TextTestRunner(verbosity=2).run(suite)