//617. Merge Two Binary Trees

var mergeTrees = function(root1, root2) {
    if(!root1 || !root2) {
            return root1 || root2;
    }
    let t = new TreeNode(root1.val+ root2.val)
    t.left = mergeTrees(root1?.left, root2?.left)
    t.right = mergeTrees(root1?.right, root2?.right)


return t
};