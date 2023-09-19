let input = [1,2,3]

function getSet(arra) {
 let res = []

 function dfs(array, index, set = []) {
    if(index>= array.length) {
        res.push(set)
    return 

    }


dfs(array,index+1, [...set, array[index]])
dfs(array,index+1, [...set])
}
    dfs(arra,0)

 return res

}


console.log(getSet(input))