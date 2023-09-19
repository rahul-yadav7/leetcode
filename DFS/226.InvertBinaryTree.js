//Given the root of a binary tree, invert the tree, and return its root.
//Input: root = [4,2,7,1,3,6,9]
//Output: [4,7,2,9,6,3,1]


//travers tree by common code and swap left child value with right child for each recurvibe 
//itraton
//  let tem = root.left
//  root.left = root.right
//  root.right = tem



var invertTree = function(root) { 
    dsf(root)
    console.log('end')
    return root
 };
 
 function dsf(root) {
     if(!root) {
         return false
     }
     let tem = root.left
     root.left = root.right
     root.right = tem
     console.log(root.val)
     return dsf(root.left) || dsf(root.right)
 }