// https://www.nowcoder.com/practice/0e26e5551f2b489b9f58bc83aa4b6c68

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串
 */
 function replaceSpace( s ) {
  // write code here
  return s.replace(/ /g, '%20');
}
module.exports = {
  replaceSpace : replaceSpace
};

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串
 */
//  function replaceSpace( s ) {
//   // write code here
//    return s.split(" ").join("%20")
// }
// module.exports = {
//   replaceSpace : replaceSpace
// };