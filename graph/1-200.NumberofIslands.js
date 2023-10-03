/**
 * 200. Number of Islands
 * Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
 */

/**
 * #1 run i and j loop and check value is == 1 
 * #2 if yes inc. count by 1
 * #3 and then run dsf to all side  trverse all side and assign 0
 * #4 return count
 * @param {*} grid 
 * @returns 
 */
var numIslands = function(grid) {
	let count = 0;
	
	function callDFS(grid, i, j) {
        //boundary condition
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
			return;
		}
		grid[i][j] = '0';// mark as visited
		// check all side
		callDFS(grid, i + 1, j); // down
		callDFS(grid, i - 1, j); // up
		callDFS(grid, i, j + 1); // right
		callDFS(grid, i, j - 1); // left
	}

    // simple i and j loop
	for (let i = 0; i < grid.length; i++) { 
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == '1') {
				count += 1;
				callDFS(grid, i, j);
			}
		}
	}
	
	return count;
};