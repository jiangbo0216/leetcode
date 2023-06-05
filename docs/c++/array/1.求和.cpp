#include <iostream>
#include <vector>
#include <numeric>
// C++ 标准库头文件的引用，其中 iostream 包含了标准输入输出流，vector 包含了可变大小数组的实现，numeric 包含了算法函数的实现。

template <typename T>
T sum(const std::vector<T> &v)
{
  return std::accumulate(v.begin(), v.end(), 0);
}

// class MyClass
// {
//   // class definition
// };
int main()
{
  std::vector<int> v{1, 2, 3, 4, 5};
  // MyClass *obj = new MyClass;

  // std::vector<MyClass *> v{obj};
  std::cout << "The sum of the vector is: " << sum(v) << std::endl;
  return 0;
}