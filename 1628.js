/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
}

var Node = function (val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
};

Node.prototype.evaluate = function () {
const {val, left, right} = this;
if(!left && !right) {
    return val;
}
let f = operators[val]
return f(left.evaluate(), right.evaluate())
};

/**
* This is the TreeBuilder class.
* You can treat it as the driver code that takes the postinfix input 
* and returns the expression tree represnting it as a Node.
*/

class TreeBuilder{
/**
   * @param {string[]} s
   * @return {Node}
   */
buildTree(postfix) {
    let stack = [];
      for (let i = 0; i < postfix.length; i++) {
          let char = postfix[i];
          if (operators[char]) {
              let right = stack.pop();
              let left = stack.pop();
              let root = new Node(char, left, right);
              stack.push(root);
          } else {
              stack.push(new Node(Number(char)));
          }
      }
      return stack.pop();
}
  
}

/**
* Your TreeBuilder object will be instantiated and called as such:
* var obj = new TreeBuilder();
* var expTree = obj.buildTree(postfix);
* var ans = expTree.evaluate();
*/