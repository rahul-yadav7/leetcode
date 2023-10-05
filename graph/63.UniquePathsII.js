/**
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
 */
let grid = [[0,1],[0,0]]



function getPath(grid) {
    let resArr= Array.from({length:grid.length+1},()=> Array(grid[0].length+1).fill(0)) 
    resArr[grid.length-1][grid[0].length-1] = 1;
    grid[grid.length-1][grid[0].length-1] = 1;
    
    for(let i= grid.length-1; i>= 0; i--) {  // i,j loop end to start
        for(let j= grid[i].length-1; j>= 0; j--) {
            if(!grid[i][j]){
              resArr[i][j] = resArr[i+1][j] + resArr[i][j+1]
            }
        }
    }
    // console.log(resArr)

    return resArr[0][0]

}

console.log(getPath(grid))