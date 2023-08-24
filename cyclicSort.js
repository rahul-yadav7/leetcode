// cyclicSort

// let input = [4,6,5,7,8,2,3,1]
// let input = [4, 3, 3, 2, 2, 3, 1]
// const getSortedArray = (input) => {
//     for(let i=0; i<input.length; i++) {
//         while(input[i] != (i+1)) {
//             tem = input[input[i]-1]
//             input[input[i]-1] =  input[i]
//             input[i] = tem
//         }
//     }
//     return input
// }



// console.log(getSortedArray(input))

let input = [9,8,7,6,5,4,3,1]
// const getSortedArrayMissing = (input) => {
//     let missing =[];
//     for(let i=0; i<input.length; i++) {
//         while(input[i] != (i+1)) {
//             tem = input[input[i]-1]
//             if(!tem) {
//                 input[input[i]-1] = tem
//             }
//             console.log("getSortedArrayMissing -> tem", tem)
//             // if(tem == input[i]) {
//             //    missing.push(i+1)
//             //    break;
//             // }
//             input[input[i]-1] =  input[i]
//             input[i] = tem
//         }
//     }
//     return missing
// }

// console.log(getSortedArrayMissing(input))


function solve(a) {
    let i = 0;
    while(i<5)
    {
        if(a[i] == i+1 || a[i] == 6) i++;
        else {
            let temp = a[i];
            a[i] = a[a[i]-1];
            a[a[i]-1] = temp;
        }
    }
    return a
}
console.log(solve([1,2,3,5,6]))
