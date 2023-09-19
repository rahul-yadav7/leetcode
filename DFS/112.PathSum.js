/**
 Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.


use commone code  with each itration less root val from sum
  sum = sum - root.val;
and after that check sum == 0 plus left and righit child should be null
 */


var hasPathSum = function(root, targetSum) {
    return travers(root, targetSum)
 };
 
 function travers(root, sum) {
     if(!root) {
       return false;
     }
     sum = sum - root.val;
     if(sum == 0 && root.left == null && root.right == null) {
         return true
     }
     return travers(root.left, sum) || travers(root.right, sum)
 }