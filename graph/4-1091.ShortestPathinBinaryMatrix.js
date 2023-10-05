//Input: [[0,0,0],[1,1,0],[1,1,0]]
//Output: 4

let input = 
[[0,0,1,0],
 [0,1,0,0],
 [0,0,0,0]];


function getSortestPath(input) {
    let m = input.length
    let n = input[0].length
    let max = 100
    function dsf(i,j,count, memo = {}) {
        if(i >= 0 && i<m && j >= 0 && j<n) {
            if(input[i][j] == 1|| memo[`${i}${j}`]) {
                return
            }
            memo[`${i}${j}`] = 1
            count += 1
            if(i == m-1 && j==n-1) {
                max = Math.min(count, max)
                return 
            }
            dsf(i+1,j,count, {...memo})
            dsf(i,j+1,count, {...memo})
            dsf(i-1,j,count, {...memo})
            dsf(i,j-1,count, {...memo})

            dsf(i+1,j+1,count, {...memo})
            dsf(i-1,j-1,count, {...memo})
            dsf(i-1,j+1,count, {...memo})
            dsf(i+1,j-1,count, {...memo})
        }
        return
    }
    dsf(0,0, 0)
    return max
}
console.log("🚀 ~ ortestPath:", getSortestPath(input))