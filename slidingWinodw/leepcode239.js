/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let start =0;
   max = 0;  //  
   secMax = 0;
   res = [];
   for(let i=0;i<nums.length; i++) {
        secMax = max < nums[i] ? max: secMax
        max = Math.max(max, nums[i])
        secMax = max;
       if(i>= k-1) {
           res.push(max)
           if(nums[start] == max) { // if start index is max so we will assign secMax into max
               max = secMax
           }
           start += 1;
       }
   }
   return res;
};


