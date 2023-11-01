let nums = [4,5,6,7,8,9,1,2,3]

// function bst(nums) {
//     let start =0;
//     let end = nums.length-1
//     while(end> start) {
//         let mid = Math.floor((end+start)/2)
//         console.log(start, end, mid)
//         if((mid == 0 && nums[mid]< nums[mid+1])  ||(nums[mid]< nums[mid+1] && nums[mid]< nums[mid-1])) {
//             return mid
//         } if(nums[start]< nums[mid]) {
//             start = mid 
//         } else {
//             end = mid
//         }
//     }
//     return -1

// }


function bst(nums, target) {
    let start =0;
    let end = nums.length-1
    while(end> start) {
        let mid = Math.floor((end+start)/2)
        if(nums[mid] == target) {
            return mid
        } if(nums[start]< nums[mid]) {
            if(target<=nums[mid] && target>= nums[start]) {
               end = mid;
            } else {
                start = mid
            }
        } else {
            if(target<=nums[mid] && target>= nums[start]) {

                start = mid
            } else {
                end = mid
            }
        }
    }
    return -1

}

console.log(bst(nums, 1))