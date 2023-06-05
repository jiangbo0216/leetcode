function arrayIncludes(arr, target) {
  return arr.some(
    (item) =>
      Array.isArray(item) && item.every((val, index) => val === target[index])
  );
}

console.log(arrayIncludes([0, 1, 2, [1, 2], 3], [1, 2])); // true
console.log(arrayIncludes([0, 1, 2, [1, 3], 3], [1, 2])); // false
