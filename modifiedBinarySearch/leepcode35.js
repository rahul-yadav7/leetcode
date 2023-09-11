var searchInsert = function(nums, target) {

    let start = 0;
    let end = nums.length -1
    if(target< nums[start]) {
        return 0
    }
    if(target > nums[end]) {
        return end+1
    }
    while(start<= end) {
        let mid = Math.floor((end+start)/2)
        if(target == nums[mid]) {
            return mid
        } else if(target < nums[mid]) {
           
            end = mid-1
        } else {
           
            start = mid + 1
        }   
    }
    return start
};
let nums = [1,3,5,6], target = 7

console.log("🚀 ~ file: leepcode35.js:21 ~ searchInsert ~ searchInsert:", searchInsert(nums, target))
