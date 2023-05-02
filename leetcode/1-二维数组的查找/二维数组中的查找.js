// https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e

// function Find(target, array)
// {
//     // write code here
//     if(!array.length) return false
//     let row = 0
//     let col = array.length-1
//     while(row<array.length && col>=0){
//         if(array[row][col]===target){
//             return true
//         }else if(array[row][col]>target){
//             col--
//         }else{
//             row++
//         }
//     }
//     return false
    
// }
module.exports = {
    Find : Find
};

function Find (target, arr) {
  if (!arr.length) return false
  let row = 0
  let col = arr.length  -1 
  while(row<arr.length &&col > 0) {
    if (arr[row][col] === target) {
      return true
    } else  if (arr[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
 }
