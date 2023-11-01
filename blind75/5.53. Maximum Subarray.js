let nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function getSum(arr) {
    return arr.reduce((sum,cv)=> sum*cv, 1)
}

function maxSubArry(arr) {
    let maxSum =0
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<=arr.length;j++) {
        maxSum = Math.max(maxSum, getSum(arr.slice(i,j)))
        }
    }
    return maxSum
}

console.log(maxSubArry(nums))