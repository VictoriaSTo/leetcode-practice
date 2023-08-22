/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
var expTree = function(s) {
  const postfix = infixToPostfix(s)

  const treeNodes = [];

  while (postfix.length > 0) {
      const op = postfix.shift();

      if (isFinite(op)) {
          treeNodes.push(new Node(op));
      } else {
          const right = treeNodes.pop();
          const left = treeNodes.pop();
          treeNodes.push(new Node(op, left, right))
      }
  }
  return treeNodes[0];
};

const getPrecedence = (operator) => {
  let precedence = 0;
  switch (operator) {
  case "+":
  case "-":
    precedence = 1;
    break;
  case "*":
    precedence = 2;
    break;
  case "/":
    precedence = 3;
    break;
  }
  return precedence;
}

const infixToPostfix = (str) => {
  const postfix = [];
  const ops = [];

  for (let i = 0; i < str.length; i++) {
      if (isFinite(str[i])) {
          postfix.push(str[i])
      } else if (str[i] === "(") {
          ops.push(str[i]);
      } else if (str[i] === ")") {
          while (ops[ops.length - 1] !== ")") {
              postfix.push(ops.pop());
          }
          ops.pop();
      } else {
          while (ops.length > 0 && getPrecedence(ops[ops.length - 1]) >= getPrecedence(str[i])) {
              postfix.push(ops.pop())
          }
          ops.push(str[i]);
      }
  }
  while (ops.length > 0) {
      postfix.push(ops.pop())
  }

  return postfix;
}