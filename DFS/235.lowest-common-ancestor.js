/**
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
 */

// there is tree(root) and two values p and q 


getAns (root, p,q) {
    if(!root) {
        return false
    }
    if(p<=root.val && root.val <= q ) { // check this condition
        return root.val
    }
    if(p > root.val) {
        getAns(root.left, p, q)
    } else {
        getAns(root.right, p, q)
    }

}