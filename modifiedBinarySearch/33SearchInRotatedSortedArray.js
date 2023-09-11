// 33. Search in Rotated Sorted Array

/**
#common code
while
find mid

# find sorted side first  if (nums[l] <= nums[mid]) 
to find sorted side we check mid value left vale 
if true mean left side is sorted one else right side

now we have sorted array only
check target value available sorted side or not
// letf<=target < mid 


#check right side from mid
 mid< target <= right

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length -1
    while(l <= r) {
        let mid = Math.floor((r+l)/2)
        if(nums[mid] == target) {
            return mid
        }
        if(nums[l] <= nums[mid]) {  // find sorted side first 
            if(nums[l] <= target && target < nums[mid]) { // check target value available sorted side or not
                r = mid -1                                // letf<=target < mid
            } else {
                l = mid + 1
            }
        //    if (target > nums[mid]) { // 
        //         l = mid +1;
        //     } else if(target < nums[l]) {
        //         l = mid +1;
        //     } else {
        //         r = mid - 1
        //     }
        } else {
            if(target > nums[mid] && nums[r] >= target) {// check target value available sorted side or not
                l = mid + 1                              // mid< target <= right
            } else {
                r = mid - 1
            }
            // if (target < nums[mid]) {
            //     l = mid - 1;
            // } else if(target > nums[r]) {
            //     l = mid - 1;
            // } else {
            //     r = mid + 1;
            // }
        }
    }
    return -1
};

let nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums, target))