var searchInsert = function(nums) {

    let start = 0;
    let end = nums.length -1
        
    while(start<= end) {
        let mid = Math.floor((end+start)/2)
        console.log("🚀 ~ file: leepcode540.js:8 ~ searchInsert ~ mid:", mid, nums[mid], start, end)
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) {
            return nums[mid]
         }
         if(nums[mid] == nums[mid-1]) {
           end = mid
         } else  {
            start = mid 
         }
           
    }
    return start
};
let nums =  [1,1,2,2,3,3,4,8,8]

console.log("🚀 ~ file: leepcode35.js:21 ~ searchInsert ~ searchInsert:", searchInsert(nums))
