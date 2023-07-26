class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def sumroot(root,s):
            if not root: return 0
            s=s*10+root.val
            if not root.left and not root.right: return s
            return sumroot(root.left,s) + sumroot(root.right,s)
        return sumroot(root,0)