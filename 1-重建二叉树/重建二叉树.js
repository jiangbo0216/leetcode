// https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6

// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
// 则重建二叉树并返回。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  // write code here
  function rebuild(preStart,preEnd,vinStart,vinEnd) {
      let node = new TreeNode(pre[preStart]);
   
      if((preStart === preEnd) && (vinStart = vinEnd)){
          return node;
      }

      let rootIndexInVin = vin.indexOf(pre[preStart]);
      let leftLength = rootIndexInVin - vinStart;
      let leftPreEnd = preStart + leftLength;
       
      if(leftLength > 0) {
          node.left = rebuild(preStart + 1,leftPreEnd,vinStart,rootIndexInVin - 1);
      }

      if(leftLength < preEnd - preStart) {
          node.right = rebuild(leftPreEnd + 1,preEnd,rootIndexInVin + 1,vinEnd);
      }

      return node;
  }

  let head = rebuild(0,pre.length - 1,0,vin.length - 1);

  return head;
}