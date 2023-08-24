// //Given an array of integers of size ‘n’, Our aim is to calculate
// // the maximum sum of ‘k’ consecutive elements in the array.

// function maxSum( arr, k){
//     let max_sum =0;
//     for (let i = 0; i < arr.length - k + 1; i++) {  // arr size = 9  window size = 4 loop will run 9-4 = 5 
//         let current_sum = 0;  
//         for (let j = 0; j < k; j++) {   // window size 4  loop will run 4 time
//             // [ 1, 4, 2, 10,                ];  
//             // [    4, 2, 10, 2              ];                     
//             // [       2, 10, 2, 3           ];                     
//             // [          10, 2, 3, 1        ];                     
//             // [              2, 3, 1, 0, 20 ];                                       
//             current_sum = current_sum + arr[i + j];
//         }
//         if(current_sum> max_sum) {
//             max_sum = current_sum
//         }
//     }
//     return max_sum;
// }
  

// let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
// let k = 4;
// console.log(maxSum(arr, k));




var isGoodString = function (i, s) {
    let tempObj = {};
        for(let j=i; j< i+3 ; j++) {
            if(tempObj[s[j]]) {
                return false
            }
            tempObj[s[j]] = true

        }       
    return true
}
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let counter = 0;
    for(let i=0;i<s.length-2; i++) {
        if(isGoodString(i, s)) {
            counter+=1
        }
        
    }
    console.log("countGoodSubstrings -> counter", counter)
    return counter;
};

countGoodSubstrings('aababcabc')