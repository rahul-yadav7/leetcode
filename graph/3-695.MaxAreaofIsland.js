//695. Max Area of Island
let grid = [
            [0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]
        ]
// Output: 6


var maxAreaOfIsland = function(grid) {
    let max = 0
    let counter = 0;
    function dsf(i,j) {
        if(i>= 0 && i< grid.length && j>=0 && j< grid[i].length) {
            if(grid[i][j] == 1) {
                grid[i][j] = 0;
                counter +=1;
                dsf(i+1,j)
                dsf(i,j+1)
                dsf(i-1,j)
                dsf(i,j-1)
            }

        } 
    }
    for(let i=0;i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
           if(grid[i][j]== 1) {
               dsf(i,j)
               max = Math.max(max, counter);
               counter =0;
           }
        }
    }
    return max
};
console.log('maxAreaOfIsland', maxAreaOfIsland(grid))