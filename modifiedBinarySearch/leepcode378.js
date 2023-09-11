/**
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.
You must find a solution with a memory complexity better than O(n2).
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
 */
//T O(n)
//S o(n**2)
// var kthSmallest = function(matrix, k) {
//     let flate = [];
//     for(let i=0;i<matrix.length;i++) {
//      flate =[...flate, ...matrix[i]]
//     }
//     return flate[k-1]
// };

// use heap 
// let matrix = [[1,2],[1,3]], k = 2

// T - O(n+m)
// S -O(1)
function kthSmallest(matrix, k) {
    let index=0;
    for(let i = 0; i< matrix.length; i++) {
        if(index+matrix[i].length< k) {
            index += matrix[i].length
        } else {
            for(let j = 0; j< matrix[i].length; j++) {
                if(index+j+1 == k) {
                    return matrix[i][j]
                }
            }
        }
    }
    
}
console.log("🚀 ~ file: leepcode378.js:20 ~ kthSmallest ~ kthSmallest:", kthSmallest(matrix, k))


