package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

/*
输入一下字符串测试
My sister is in the house not in the yard
*/
func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	vec := strings.Fields(scanner.Text())
	arr := []string{}
	for _, v := range vec {
		l := strings.Split(v, "")
		sort.Strings(l)
		tmp := strings.Join(l, "")
		arr = append(arr, tmp)
	}
	m := make(map[string]int)
	hi := 0
	for _, v := range arr {
		if _, ok := m[v]; !ok {
			m[v] = 0
		}
		m[v]++
		if m[v] > hi {
			hi = m[v]
		}
	}
	for i := hi; i > 0; i-- {
		mat := []string{}
		for k, v := range m {
			if v == i {
				mat = append(mat, k)
			}
		}
		sort.SliceStable(mat, func(i, j int) bool {
			if len(mat[i]) != len(mat[j]) {
				return len(mat[i]) < len(mat[j])
			}
			return mat[i] < mat[j]
		})
		for _, w := range mat {
			for j := 0; j < i; j++ {
				fmt.Printf("%s ", w)
			}
		}
	}
}
