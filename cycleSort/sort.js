

let input = [1,2];

function swap(arr, index, index2) {
    let tem = arr[index]
    arr[index] = arr[index2];
    arr[index2] = tem
}
function sort(nums) {
    if(nums.length<2) {
        return nums[0] == 1? 0:1
    }
    for(let i=0;i<nums.length;i++) {
        while(i != nums[i] && nums[nums[i]]) { 
            swap(nums, i, nums[i]) 
        } 
      
    }
    for(let i=0;i<nums.length;i++) {
       if(i != nums[i]) return i
      
    }
   
    return nums[nums.length-1]+1
}
console.log(sort(input))

//cycle sort when range 0:n
function sort(nums) {
    if(nums.length<2) return nums /// base condition
    for(let i=0;i<nums.length;i++) {
        while(i != nums[i]) { 
        swap(nums, i, nums[i])
        } 
    }
    return nums
}

//cycle sort when range 1:n
function sort(nums) {
    if(nums.length<2) return nums // base condition
    for(let i=0;i<nums.length;i++) {
        while((i+1) != nums[i]) { // will check value index+1 and 
        swap(nums, i, nums[i]-1) // at the time of swap with  destination index -1
        } 
    }
    return nums
}


// find dublicate
// some code with one conditon that ater every while check is the value equal or not

// function sort(nums) {
//     if(nums.length<2) return nums 
//     for(let i=0;i<nums.length;i++) {
//         while((i+1) != nums[i]) { 
            if(nums[i] == nums[nums[i]-1]) { // condtion for check duplicate
                return true
            }
//         swap(nums, i, nums[i]-1) 
//         } 
//     }
//     return nums
// }


//dulicate
// if we have range 0:n that will work
// if we have range 1:n  then we have to use size+1 to get currect sum
function findMissing(nums) {
    let total = (nums.length * (nums.length+1))/2
    return nums.reduce((sum, cv)=> sum -= cv,total)
}
// or
// function sort(nums) {
//     if(nums.length<2) return nums 
//     for(let i=0;i<nums.length;i++) {
//         while((i+1) != nums[i]) { 
//         swap(nums, i, nums[i]-1) 
//         } 
//     }
        for(let i=0;i<nums.length;i++) {
            if(i != nums[i]) return i
        }
        return nums[nums.length-1]+1
// }

