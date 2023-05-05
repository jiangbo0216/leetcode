// 这个是 python 的版本转为 js 的版本

/*
输入一下字符串测试
My sister is in the house not in the yard
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a space-separated list of words: ', (input) => {
    const vec = input.split(' ');
    const arr = [];
    for (let i = 0; i < vec.length; i++) {
        const l = vec[i].split('');
        l.sort();
        const tmp = l.join('');
        arr.push(tmp);
    }
    const map = {};
    let hi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in map)) {
            map[arr[i]] = 0;
        }
        map[arr[i]] += 1;
        hi = Math.max(hi, map[arr[i]]);
    }
    for (let i = hi; i > 0; i--) {
        const mat = [];
        for (let k in map) {
            if (map[k] == i) {
                mat.push(k);
            }
        }
        mat.sort((a, b) => {
            if (a.length == b.length) {
                // str.localeCompare(compareString[, locales[, options]]) 方法的返回值是一个数字，表示两个字符串的比较结果。如果 str 在字典顺序上排在 compareString 前面，则返回一个负数；如果两个字符串相等，则返回 0；如果 str 在字典顺序上排在 compareString 后面，则返回一个正数。
                // 这里要求升序排列，相当于使用 a-b 需要返回 -1
                return b.localeCompare(a);
            }
            return a.length - b.length;
        });
        for (let w of mat) {
            for (let j = 0; j < i; j++) {
                process.stdout.write(w + ' ');
            }
        }
    }
    rl.close();
});