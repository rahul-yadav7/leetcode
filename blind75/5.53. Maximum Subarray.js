let nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// function getSum(arr) {
//     return arr.reduce((sum,cv)=> sum*cv, 1)
// }

// function maxSubArry(arr) {
//     let maxSum =0
//     for(let i=0;i<arr.length;i++) {
//         for(let j=i+1;j<=arr.length;j++) {
//         maxSum = Math.max(maxSum, getSum(arr.slice(i,j)))
//         }
//     }
//     return maxSum
// }

//we can solve this
//1) by useing I J loop  and check for each location
//
//best  // here we removing negetive value

function maxSubArry(arr) {
    let maxSum =0
    let curSum =0
    for(let i=0;i<arr.length;i++) {
        if(curSum< 0) { // remove  negetive value
            curSum = 0
        }
        curSum += arr[i]
        maxSum = Math.max(maxSum, curSum)
    }
    return maxSum
}

console.log(maxSubArry(nums))