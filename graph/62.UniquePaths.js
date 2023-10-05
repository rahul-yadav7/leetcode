
//solution #1
//create one array with size m*n and fill it by 1
//start m and n leep from 1 
function getPath(m,n) {
    dp = Array.from({length:m},()=>Array(n).fill(1))
    console.log(dp)
    for(let i =1; i<m ; i++){
        for(let j =1; j<n ; j++){
          dp[i][j]= dp[i-1][j]+dp[i][j-1]
        }
    }
    console.log(dp)
    
}
console.log(getPath(3,7))


//solution #2
//add one extra row and collom with value 0
//start m  and n not from m-1 or n-1  

// 0 0 0 0 0 0 0 0 // 
// 0 1,1,1,1,1,1,1
// 0 1,1,1,1,1,1,1
// 0 1,1,1,1,1,1,1

const uniquePaths = function(m, n, memo = {}) {
    const key = m + ',' + n;
    if (key[memo]) return memo[key];
    if (m === 1 || n === 1) return 1
    if (m === 0 || n === 0) return 0;
    memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
    arr[m][n] = memo[key]
    return memo[key];
};


// //
// var uniquePaths = function(m, n) {
//     let ans = 1;
//     for (let i = 1; i <= m - 1; i++) {
//         ans = ans * (n - 1 + i) / i;
//     }
//     return ans;
// };
