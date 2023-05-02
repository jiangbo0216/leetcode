// https://www.nowcoder.com/practice/2baf799ea0594abd974d37139de27896
// function quicksort (arr) {
//   if (Array.isArray(arr) && arr.length > 1) {
//     if (arr.length <= 1) return arr
//     let pivotIndex = ~~(arr.length / 2)
//     const pivot = arr.splice(pivotIndex, 1)[0]

//     let left = [], right = []
//     for (const item of arr) {
//       if (item < pivot) {
//         left.push(item)
//       } else {
//         right.push(item)
//       }
//     }

//     return quicksort(left).concat([pivot], quicksort(right))
//   } else {
//     return arr
//   }
// }

console.log(quicksort([1,4,2,3,5,2,5,3,7,3,8,6]))

function quicksort (arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    const pivotIndex = ~~(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    
    let left = [], right = []
    for (const item of arr) {
      if (item <= pivot) {
        left.push(item)
      } else {
        right.push(item)
      }
    }
    return quicksort(left).concat([pivot], quicksort(right))
  } else {
    return arr
  }
}
