const a = new Array(2).fill({a: 1})
a[0].a = 2
console.log(JSON.stringify(a))

// [{"a":2},{"a":2}]