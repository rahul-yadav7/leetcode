let Input = [1, 2, 3,4,5,6]


var subsetsWithDup = function(nums) {
    let output = [[]]
    for(let i =1; i<=nums.length; i++) {
        
        for(let j =0; j<= nums.length -i; j++) {
            
            console.log("subsetsWithDup -> Input.slice(j,j+i)", j,j+i,Input.slice(j,j+i))
            output.push(Input.slice(j,j+i))
        }
      
    }
    return output
    
};

console.log(subsetsWithDup(Input))



