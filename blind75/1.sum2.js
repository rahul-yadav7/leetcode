let nums = [1,2,3,4,5,6,7,8,9], target = 21
//Output: [0,1]

// function getPostion(nums, target) {
//     let start = 0
//     let end = nums.length-1;
//     while(start<end) {
//         if((nums[start]+nums[end]) == target) {
//             return [start, end]
//         } else if((nums[start]+nums[end]) > target) {
//             end -= 1
//         } else {
//             start += 1
//         }
//     }
//     return [-1,-1, -1]
// }


function getPostion(nums, target) {
    let start = 0
    let end = nums.length-1;
    
    for(let i=0;i<nums.length;i++) {
        start = i +1
        while(start< end) {
            if((nums[i]+nums[start]+nums[end]) == target) {
                return [nums[i],nums[start], nums[end]]
            } else if((nums[i]+nums[start]+nums[end]) > target) {
                end -= 1
            } else {
                start += 1
            }
        }
    }
    return [-1,-1, -1]

}

console.log("🚀 ~ file: sum2.js:21 ~ getPostion(nums, target):", getPostion(nums, target))
