 // https://www.nowcoder.com/practice/a9fec6c46a684ad5a3abd4e365a9d362
 // 
  /*
  * function TreeNode(x) {
  *   this.val = x;
  *   this.left = null;
  *   this.right = null;
  * }
  */

  /**
   * 
   * @param root TreeNode类 the root of binary tree
   * @return int整型二维数组
   */
  function threeOrders( root ) {
    // write code here
    const pre = []
    function preOrder (root) {
      if (root === null) {
        return
      }
      pre.push(root.val)
      preOrder(root.left)
      preOrder(root.right)
    }

    const inRes = []
    function inOrder (root) {
      if (root) {
        inOrder(root.left)
        inRes.push(root.val)
        inOrder(root.right)
      }
    }

    const post = []
    function postOrder (root) {
      if (root) {
        postOrder(root.left)
        postOrder(root.right)
        post.push(root.val)
      }
    }

    preOrder(root)
    inOrder(root)
    postOrder(root)

    return [pre, inRes, post]
  }
  module.exports = {
    threeOrders : threeOrders
  };
