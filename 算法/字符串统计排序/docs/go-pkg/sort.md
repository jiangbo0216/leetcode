go sort包中提供了多种排序方法，主要包括以下函数：

- sort.Ints()：对整型切片进行升序排序。
- sort.Float64s()：对float64类型切片进行升序排序。
- sort.Strings()：对字符串切片进行升序排序。
- sort.Slice()：根据提供的比较函数对任意类型的切片进行排序。
- sort.Search()：在已排序的切片中查找特定元素的位置。
- sort.SliceStable()：类似于Slice函数，但是保留了相等元素的原始顺序。如果两个元素相等，则它们在排序后的切片中的相对顺序与它们在排序前的切片中的相对顺序相同。

下面是每个函数的代码示例：

1. sort.Ints()

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    s := []int{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5}
    fmt.Println("Before sorting:", s)
    sort.Ints(s)
    fmt.Println("After sorting:", s)
}
```

输出结果：

```
Before sorting: [3 1 4 1 5 9 2 6 5 3 5]
After sorting: [1 1 2 3 3 4 5 5 5 6 9]
```

2. sort.Float64s()

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    s := []float64{3.2, 1.1, 4.5, 1.0, 5.4, 9.9, 2.3, 6.7, 5.0, 3.8, 5.9}
    fmt.Println("Before sorting:", s)
    sort.Float64s(s)
    fmt.Println("After sorting:", s)
}
```

输出结果：

```
Before sorting: [3.2 1.1 4.5 1 5.4 9.9 2.3 6.7 5 3.8 5.9]
After sorting: [1 1.1 2.3 3.2 3.8 4.5 5 5.4 5.9 6.7 9.9]
```

3. sort.Strings()

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    s := []string{"banana", "apple", "orange", "grape", "pear"}
    fmt.Println("Before sorting:", s)
    sort.Strings(s)
    fmt.Println("After sorting:", s)
}
```

输出结果：

```
Before sorting: [banana apple orange grape pear]
After sorting: [apple banana grape orange pear]
```

4. sort.Slice()

```go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []Person{
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 20},
        {"David", 35},
    }
    fmt.Println("Before sorting:", people)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Age < people[j].Age
    })
    fmt.Println("After sorting:", people)
}
```

输出结果：

```
Before sorting: [{Alice 25} {Bob 30} {Charlie 20} {David 35}]
After sorting: [{Charlie 20} {Alice 25} {Bob 30} {David 35}]
```

5. sort.Search()

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    s := []int{1, 3, 4, 5, 6, 8, 9}
    fmt.Println("Sorted slice:", s)
    fmt.Println("Index of 5:", sort.SearchInts(s, 5))
    fmt.Println("Index of 7:", sort.SearchInts(s, 7))
    fmt.Println("Index of 0:", sort.SearchInts(s, 0))
}
```

输出结果：

```
Sorted slice: [1 3 4 5 6 8 9]
Index of 5: 3
Index of 7: 6
Index of 0: 0
```

以上是go sort包中常用的排序方法及其代码示例。

6. sort.SliceStable()

```go
package main

import (
	"fmt"
	"sort"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	people := []Person{
		{"Alice", 25},
		{"Bob", 30},
		{"Charlie", 20},
		{"David", 35},
		{"Eve", 25},
	}
	fmt.Println("Before sorting:", people)

	// 按照年龄升序排序
	sort.SliceStable(people, func(i, j int) bool {
		return people[i].Age < people[j].Age
	})

	fmt.Println("After sorting:", people)
}
```

输出结果：

```
Before sorting: [{Alice 25} {Bob 30} {Charlie 20} {David 35} {Eve 25}]
After sorting: [{Charlie 20} {Alice 25} {Eve 25} {Bob 30} {David 35}]
```

在上面的示例中，我们按照Person的Age字段对people切片进行了升序排序，使用了SliceStable函数，因此即使Alice和Eve的年龄相同，它们在排序后的切片中的相对顺序也与它们在排序前的切片中的相对顺序相同。

需要注意的是，SliceStable函数的时间复杂度比Slice函数要高，因此只有在需要保留相等元素的原始顺序时才应该使用它。