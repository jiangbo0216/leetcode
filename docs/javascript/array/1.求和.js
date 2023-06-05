
const lst = [1, 2, 3, 1, 2, 4, 5, 1, 2];
const total = lst.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 输出 21

// 可以使用 lodash sum 函数