let input =[9,8,7,6,5,4,3,2,1];
let size = 4;
const getSortedArray = value =>value.sort((a,b)=>a-b)
const getMedian = value => {

    if(!value.length) {
        return 0
    }
    let mindIndex = (value.length -1)/2
    let left = Math.trunc(mindIndex)
    let right = Math.round(mindIndex)
    return (value[left] + value[right])/2
}
const window = (input, k) => {

  
    let output = [];
 
 for(let i=0; i<input.length-k; i++) {
     let window = [];
    for(let j=0; j < k; j++) {
       window.push(input[i+j])

    }
    window = getSortedArray(window)
   
    output.push(getMedian(window))

 }
 return output
}



console.log(window(input,size))