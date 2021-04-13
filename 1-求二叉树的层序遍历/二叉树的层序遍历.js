/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型二维数组
  */
 function levelOrder( root ) {
    
   
   if (!root) return []
  let queue = [root]
  let result = []
  let temp = []
  let len = 0
  while(len = queue.length) {
     
      
      for (let i = 0; i < len; i++) {
        let node = queue.shift()
        temp.push(node.val)
        if (node.left) {
          queue.push(node.left)
        } 
        if(node.right){
            queue.push(node.right)
        }
      }
  
      result.push([...temp])
      temp.length = 0
  }
  return result
}
module.exports = {
  levelOrder : levelOrder
};