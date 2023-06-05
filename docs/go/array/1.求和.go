package main

import "fmt"

func sum(numbers []int) int {
	var total int
	for _, num := range numbers {
		total += num
	}
	return total
}

func main() {
	lst := []int{1, 2, 3, 1, 2, 4, 5, 1, 2}
	total := sum(lst)
	fmt.Println(total) // 输出 21
}
