/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//     if(root === null) return null;
//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;
//     invertTree(root.left);
//     invertTree(root.right);
//     return root;
// };

var invertTree = function(root) {
  let queue = [root];
  while(queue.length) {
      let curNode = queue.shift();
      if(curNode) {
          [curNode.left, curNode.right] = [curNode.right, curNode.left];
          queue.push(curNode.left, curNode.right)
      }
  }
  return root;
};