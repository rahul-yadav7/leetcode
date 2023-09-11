//34 - search range - [1,2,2,3,4]  || [1,2]
let nums = [5,7,7,8,8,10], target = 8
function getLeft(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let index  = -1;
    while(left<=right) {
       let mid = Math.floor((right+left)/2)
       if(target == nums[mid]) {
         index = mid
         right = mid -1    // for left
         //left = mid  +1    // for right
       } else if(target < nums[mid]) {
        right = mid - 1
       } else {
        left = mid + 1
       }
    }
    return index
}
function getRight(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let index  = -1;
    while(left<=right) {
       let mid = Math.floor((right+left)/2)
     
       if(target == nums[mid]) {
         index = mid
         left = mid +1
       } else if(target < nums[mid]) {
        right = mid - 1
       } else {
        left = mid + 1
       }
    }
    return index
}



function searchRange(nums, target) {
    return [getLeft(nums, target), getRight(nums, target)]
}
console.log(searchRange(nums, target))