// 74. Search a 2D Matrix
/**
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 */

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first = 0
    let last = nums.length -1
    while(first <= last) {
        let mid = Math.floor((last+first)/2)
        if(nums[mid] == target) {
            return mid
        }
        if(nums[first]<= nums[mid]) {
           if (nums[first] <= target && target <= nums[last]) {
                last = mid -1;
            } else {
                first = mid +1
            }
        } else {
            if (nums[mid] <= target && target <= nums[last]) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
    }
    return -1
};
