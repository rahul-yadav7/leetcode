// problem number - 744

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetter = function (letters, target) {
//     letters = [...new Set(letters)]
//     let first = 0;
//     let last = letters.length - 1
//     let mind = Math.round((first + last) / 2)
//     while (first != last) {
//     console.log("nextGreatestLetter -> last", last)
        
//         if (letters[mind] == target) {
//             return letters[mind + 1] || letters[0]
//         } else if (letters[mind] < target) {
            
//             if(!letters[mind+1]){
//                 return letters[0]
//             }
           
//             if (letters[mind+1] && letters[mind] + 1 > target) {
//                 return letters[mind + 1] 
//             }
           
//             first = mind
//             mind = Math.round((first + last) / 2)
//         } else if (letters[mind] > target) {
//             last = mind
//             mind = Math.trunc((first + last) / 2)
//         }
//     }
//     return letters[0]
// };

var nextGreatestLetter = function(letters, target) {
    let low = 0;
    let high = letters.length - 1;

    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        
        if (letters[mid] > target) {
            high = mid - 1;
        } else {
            // HERE: When the target is found we still want to continue searching on the right.
            low = mid + 1;
        }
    }

    // HERE. % letter.l.ength if low = mid + 1 got us to the end return the first letters entry.
    // console.log('low--->',low, low % letters.length, )
    let data = low % letters.length
    return letters[data];
};


let letters =["c","c","j"], target = 'c'

console.log("nextGreatestLetter -> nextGreatestLetter", nextGreatestLetter(letters, target))