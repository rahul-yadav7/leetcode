/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    console.log(board[0])
    console.log(board[1])
    console.log(board[2])
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<board[i].length;j++) {
            console.log("current value",board[i][j],i,j,"------------------------------------------------------------------------------")
            if(recrt(board,i,j,word,0)) {
                return true
            }
            console.log(board)
        }
    }
    return false
};
function recrt(board,i,j,word, index) {
    if(!board[i]) {
        // console.log("--", i)
         return false
    }
    // console.log("board[i][j]", board[i][j],i,j,"index",index,word[index])
  if(!board[i][j] || board[i][j] !=word[index]) { 
    //    console.log("new found")
     return false
  }
  if(board[i][j] == word[index] && !word[index+1]) {
    //   console.log('--  finnal', word[index], word[index+1])
     return true
    }
    JSON.stringify

    if(board[i][j] == word[index] && word[index+1]) {
        // console.log("+ + + + + .",i,j)
        board[i][j] =`${board[i][j]}2`
       if(!recrt(board,i+1,j,word, index+1)) {
           if(!recrt(board,i,j+1,word, index+1)) {
               if(!recrt(board,i-1,j,word, index+1)) {
                   if(!recrt(board,i,j-1,word, index+1)) {
                    board[i][j] = board[i][j][0]
                    // console.log("- - - - -",   board[i][j], i,j)
                      return false
                    }  
                } 
            }
        }
        return true
    }
    return false
}
function test(board,i,j,word, index) {
    console.log(board[i],[i])
    if(i==1&&j==3) {
        console.log("=============")
     return   true
    }
   return false

}
let board =
 [
    ["C","A","A"],
    ["A","A","A"],
    ["B","C","D"]]

    // [
    //     [ 'A', 'A', 'A', 'A', 'A', 'A' ],
    //     [ 'A', 'A', 'A', 'A', 'A', 'A' ],
    //     [ 'A', 'A', 'A', 'A', 'A', 'A' ],
    //     [ 'A', 'A', 'A', 'A', 'A', 'A' ],
    //     [ 'A', 'A', 'A', 'A', 'A', 'A' ],
    //     [ 'A', 'A', 'A', 'A', 'B', 'A' ]
    //   ]
// let word = "AAB"
// let word = "BA"
let word = "ABCCED"




console.log(exist(board,word))